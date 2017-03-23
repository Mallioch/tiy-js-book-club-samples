if (window.Quiz === undefined) window.Quiz = {};

(function() {

  var sm = {

    registerControllers: function(start, quiz, win, fail) {
      this.startController = start;
      this.quizController = quiz;
      this.winController = win;
      this.failController = fail;

      this.start();
    },

    start: function() {
      this.startController.render();
      this.state = 'start';
      this.correctCount = 0;
      this.incorrectCount = 0;
    },

    advance: function() {

      switch (sm.state) {
        case 'start':
          this.quizController.render();
          this.state = 'quiz';
          break;
        case 'quiz':

          if (this.correctCount > this.incorrectCount) {
            this.winController.render();
            this.state = 'win';
          }
          else {
            this.failController.render();
            this.state = 'fail';
          }
          break;
      }


      if (this.state === 'start') {
        this.startController.render();
      }
    },

    correct: function() {
      this.correctCount += 1;
      console.log('correct count', this.correctCount);

      if (this.correctCount === 5) {
        this.advance();
      }
    },

    incorrect: function() {
      this.incorrectCount += 1;
      console.log('incorrect count', this.incorrectCount);

      if (this.incorrectCount === 5) {
        this.advance();
      }
    }
  };

  window.Quiz.StateMachine = sm;

})();
