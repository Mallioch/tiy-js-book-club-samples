(function() {

  //Frameworky Stuff

  var Model = {

    prototype: {
      init: function() {}
    },

    create: function() {
      var object = Object.create(this);
      object.prototype = Object.create(this.prototype);
      return object;
    },

    init: function() {
      var instance = Object.create(this.prototype);
      instance.parent = this;
      instance.id = Math.guid();
      return instance;
    },

    extend: function(o) {
      $.extend(this, o);
    },

    include: function(o) {
      $.extend(this.prototype, o);
    }
  };

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

  Model.include({
    createRemote: function(url, callback) {
      $.ajax({
        url: url,
        method: 'POST',
        data: this.attributes()
      })
      .done(() => {
        console.log('AJAX call complete.');
      });
    }
  })



  //Using frameworky stuff

  var User = Model.create();
  User.attributes = ['name'];


  var user = User.init();
  user.name = 'Bob';
  user.createRemote('/api/user', function() {
    console.log('hello');
  });


})();
