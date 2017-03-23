if (window.Quiz === undefined) window.Quiz = {};

(function() {

  var StartController = Controller.create({

    render: function() {
      this.el.html('<div class="start">click to start</div>');
    },

    events: {
      'click .start': 'clicky',
    },

    clicky: function() {
      console.log('clicky');
      Quiz.StateMachine.advance();
    }
  });

  Quiz.StartController = StartController;

})();
