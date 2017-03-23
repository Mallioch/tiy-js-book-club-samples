if (window.Quiz === undefined) window.Quiz = {};

(function() {

  var FailController = Controller.create({
    render: function() {
      this.el.html('<div class="fail">fail</a>');
    }
  });

  Quiz.FailController = FailController;

})();
