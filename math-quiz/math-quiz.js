if (window.Quiz === undefined) window.Quiz = {};

(function() {
  console.log('hello');


  var startController = new Quiz.StartController({el: $("#app")});
  var quizController = new Quiz.QuizController({el: $("#app")});
  var winController = new Quiz.WinController({el: $("#app")});
  var failController = new Quiz.FailController({el: $("#app")});


  Quiz.StateMachine.registerControllers(startController, quizController, winController, failController);

})();
