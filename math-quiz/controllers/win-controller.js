if (window.Quiz === undefined) window.Quiz = {};

(function() {

  var WinController = Controller.create({
    render: function() {
      this.el.html('<div class="win">win</a>');
    }
  });

  Quiz.WinController = WinController;

})();
