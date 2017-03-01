(function() {

  //Frameworky stuff

  function Model() {

  }

  Model.prototype = {
    init: function() {
      if (!this.id) {
        this.id = Math.guid();
      }
    },

    createRemote: function(callback) {
      $.ajax({
        url: this.url,
        method: 'POST',
        data: this.attributes()
      })
      .done(() => {
        console.log('AJAX call complete.');
      });
    },

    attributes: function() {
      var result = {};
      for (var i in this.attrs) {
        var attr = this.attrs[i];
        result[attr] = this[attr];
      }
      result.id = this.id;
      return result;
    }


  };


  //Using frameworky stuff

  function User() {
    this.init();
    this.attrs = ['name'];
    this.url = '/api/user';
  }
  User.prototype = new Model();


  var user = new User();
  user.name = 'Bob';
  user.createRemote(function() {
    console.log('hello');
  })

})();
