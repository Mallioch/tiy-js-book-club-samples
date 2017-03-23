if (window.Quiz === undefined) window.Quiz = {};

(function() {

  function generateQuestion() {
    var first = Math.ceil(Math.random() * 10);
    var second = Math.ceil(Math.random() * 10);

    return {
      first: first,
      second: second
    }
  }

  var QuizController = Controller.create({

    template: $('#quiz-template').html(),

    events: {
      'click button': 'submit'
    },

    submit: function() {
      var input = $('input', this.el);
      var answer = this.question.first + this.question.second;
      if (answer === Number(input.val())) {
        this.render();
        Quiz.StateMachine.correct();
      }
      else {
        this.render();
        Quiz.StateMachine.incorrect();
      }
    },

    render: function() {

      this.question = generateQuestion();
      var html = Mustache.render(this.template, this.question);
      this.el.html(html);
      $('input', this.el).focus();
    }
  });

  Quiz.QuizController = QuizController;
})();
