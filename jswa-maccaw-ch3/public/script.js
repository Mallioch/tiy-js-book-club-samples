
//This is a basic example of a common way of adding support for something in browsers when they don't have it, while keeping their default implementation if they do.
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {};
    F.prototype = o;
    return F();
  }
}


Math.guid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}






var Model = {
  inherited: function() {},
  created: function() {},

  prototype: {
    init: function() {}
  },

  create: function() {
    var object = Object.create(this);
    object.parent = this;
    object.prototype = object.fn = Object.create(this.prototype);

    object.created();
    this.inherited(object);
    return object;
  },

  init: function() {
    var instance = Object.create(this.prototype);
    instance.parent = this;
    instance.init.apply(instance, arguments);
    return instance;
  },

  extend: function(o) {
    var extended = o.extended;
    $.extend(this, o);
    if (extended) extended(this);
  },

  include: function(o) {
    var included = o.included;
    $.extend(this.prototype, o);
    if (included) included(this);
  }
}

Model.include({
  init: function(atts) {
    if (atts) this.load(atts);
  },

  load: function(attributes) {
    for (var name in attributes) {
      this[name] = attributes[name];
    }
  }
});

//Persisting Records (pg 35)
Model.records = {};

Model.include({
  newRecord: true,

  create: function() {
    if (!this.id) {
      this.id = Math.guid();
    }
    this.newRecord = false;
    this.parent.records[this.id] = this.dup();
  },

  destroy: function() {
    delete this.parent.records[this.id];
  },

  update: function() {
    this.parent.records[this.id] = this.dup();
  },

  save: function() {
    this.newRecord ? this.create() : this.update();
  },

  dup: function() {
    return $.extend(true, {}, this);
  }
});

//Actually implementing find, pg 36.
//Chrome did not like Maccaw's throw syntax, so changed it a bit.
Model.extend({
  find: function(id) {
    if (this.records[id]) {
      return this.records[id].dup()
    }
    else {
      throw 'Unknown record.';
    }
  }
});

//Pg 46
Model.include({
  attributes: function() {
    var result = {};
    for (var i in this.parent.attributes) {
      var attr = this.parent.attributes[i];
      result[attr] = this[attr];
    }
    result.id = this.id;
    return result;
  }
});


//Pg 38
Model.extend({
  created: function() {
    this.records = {};
  }
});



var User = Model.create();
User.attributes = ['name'];

//page 48

Model.include({
  createRemote: function(url, callback) {
    $.ajax({
      url: url,
      method: 'POST',
      data: this.attributes()
    });
  }
})




var user = User.init({ poop: true });
user.name = 'Bob';
user.save();
user.createRemote('/api/user', function() { console.log('hello'); })

var user2 = User.init();
user2.name = 'Fred';
user2.save();

console.log('should be there', User.find(user2.id));

user2.destroy();

//Now this throws the error
//console.log(User.find(2));
