(function() {

  //Frameworky stuff

  class Model {

    constructor() {
      if (!this.id) {
        this.id = Math.guid();
      }
    }

    createRemote(url, callback) {
      $.ajax({
        url: this.url,
        method: 'POST',
        data: this.attributes()
      })
      .done(() => {
        console.log('AJAX call complete.');
      });
    }

    attributes() {
      var result = {};
      for (var i in this.attrs) {
        var attr = this.attrs[i];
        result[attr] = this[attr];
      }
      result.id = this.id;
      return result;
    }
  }

  //Using frameworky stuff

  class User extends Model {
    constructor() {
      super();
      this.attrs = ['name'];
      this.url = '/api/user'
    }
  }

  var user = new User();
  user.name = 'Bob';
  user.createRemote(function() {
    console.log('hello');
  })



})();
