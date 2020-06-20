var viewModel = function () {
  
  //declare variables
  var self = this;
  self.answered = ko.observable(false);
  self.index = ko.observable(0);
  self.selection = ko.observableArray();
  self.userAnswers = ko.observableArray();
  self.score = ko.observable("");
  let isCurrentSelection = false;
<<<<<<< Updated upstream
  //let didAnswer = false;
  //let selection = []; //placeholder for user selection
  //let userAnswers = [];
=======
>>>>>>> Stashed changes

  //object array for storing all questions, answers, amd correctAnswers
  self.questions = ko.observableArray([{
      qNumber: 1,
      question: 'What is JavaScript?',
      answers: [
        'JavaScript is a programming/scripting language that allows the user to manipulate web',
        'JavaScript is a coffee project for teaching a foreign language',
        'JavaScript is a new technological achievement that is being researched by NASA',
        'JavaScript is a form of music practiced by the ancients of history.'
      ],
      correctAnswer: 'JavaScript is a programming/scripting language that allows the user to manipulate web',
    },
    {
      qNumber: 2,
      question: 'What are functions?',
      answers: [
        'A block of JavaScript code that is defined once but may be executed, or invoked, any number of times.',
        'A block of JavaScript code that is mentioned in passing via secret meetings',
        'A block of JavaScript code that is used to create disruptions in the system',
        'A block of JavaScript code that is known as “the coffee break”'
      ],
      correctAnswer: 'A block of JavaScript code that is defined once but may be executed, or invoked, any number of times.'
    },
    {
      qNumber: 3,
      question: 'True or False: Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations?',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True'
    },
    {
      qNumber: 4,
      question: 'Select an example of an array',
      answers: [
        'function array(design) { return design*design};',
        'var array = 1;',
        'var array = ‘array’;',
        'var array = [1, 2, 3];'
      ],
      correctAnswer: 'var array = [1, 2, 3];'
    },
    {
      qNumber: 5,
      question: 'A variable can be made up of…',
      answers: [
        'Strings and headsets',
        'Numbers and keys',
        'Strings and Numbers',
        'Keys and Headsets'
      ],
      correctAnswer: 'Strings and Numbers'
    },
    {
      qNumber: 6,
      question: 'True or False: JavaScript code can be implemented into html using the <script> tag',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True'
    },
    {
      qNumber: 7,
      question: 'Which of the following is an object?',
      answers: [
        'var controller = “steel”',
        'var controller = {material: “steel”}',
        'var controller = 5',
        'function controller(steel, rubber) {return steel + rubber};'
      ],
      correctAnswer: 'function controller(steel, rubber) {return steel + rubber};'
    },
    {
      qNumber: 8,
      question: 'What is a comment in relation to JavaScript?',
      answers: [
        'Text that isn’t part of the code but can be used to explain sections of the program',
        'Text that isn’t part of the code but can be used to improve readability',
        'Text that isn’t part of the code but can be used to test alternative code',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      qNumber: 9,
      question: ' True or False: Any collection of strings can be used as a variable name',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'False'
    },
    {
      qNumber: 10,
      question: 'Select an example of comment syntax in relation to a JavaScript program ONLY',
      answers: [
        '<!- -Insert Comment Here - - > ',
        '// Insert Comment Here',
        '/* Insert Comment Here ! - - >',
        '* Insert Comment Here *'
      ],
      correctAnswer: '// Insert Comment Here'
    },
  ]);

  //set currentQuestion determined by current page index, invoked by text binding for question title
  self.currentQuestion = ko.observable(self.questions()[0]);

  self.next = function () {
<<<<<<< Updated upstream
    //go to next question if user answered current question
=======
    //go to next question if user has answered current question
>>>>>>> Stashed changes
    if (self.answered() === true || self.userAnswers()[self.index()]) {

      for (let i = 0; i < self.questions()[self.index()].answers.length; i++) {
        if (self.selection()[self.selection().length - 1] === self.questions()[self.index()].answers[i]) {
          isCurrentSelection = true;
          break;
        }
      }

<<<<<<< Updated upstream
      //if (self.questions()[self.index() - 1].correctAnswer === selection[selection.length - 1]) {
      //push last answer from user selection to userAnswers array
=======
      //push last answer from user selection to userAnswers array if most recent selection is from current page
>>>>>>> Stashed changes
      if (isCurrentSelection === true) {
        if (self.userAnswers()[self.index()]) {
          self.userAnswers.replace(self.userAnswers()[self.index()], self.selection()[self.selection().length - 1]);
        } else {
          self.userAnswers().push(self.selection()[self.selection().length - 1]);
        }
      }

      isCurrentSelection = false;
<<<<<<< Updated upstream
      //};

=======

      //dont increment page index or refresh questions if on final page
>>>>>>> Stashed changes
      if(self.index() < 9) {
        self.index(self.index() + 1);
        self.currentQuestion(self.questions()[self.index()]);
        self.answered(false);
      }

<<<<<<< Updated upstream
      console.log(self.userAnswers());

=======
      //for debugging
      console.log(self.userAnswers());
    
    //if user didn't answer question, prompt them to do so
>>>>>>> Stashed changes
    } else {
      alert('Please answer the question before moving on');
    };
  };

  //go to previous question
  self.prev = function () {
    self.index(self.index() - 1);
    self.currentQuestion(self.questions()[self.index()]);
  };

  //save selected user answer, invoked when answer is clicked in UI
  self.selected = function (userSelection) {

    //save each answer selected by user to selection array and toggle answered boolean to true
    this.userSelection = userSelection;
    self.selection().push(userSelection);
    self.answered(true);
<<<<<<< Updated upstream
    self.index(self.index() + 1);
    self.index(self.index() - 1);
    console.log(self.selection());
  };

  self.buttonClass = function (buttonText) {
    this.buttonText = buttonText;
    if (buttonText === self.userAnswers()[self.index()]) {
      return "ans-sel";
    } else if (buttonText === self.selection()[self.selection().length - 1]) {
    console.log("true");
    return "cur-sel";
    }
=======

    //toggle observable index to force rechecking of conditionals for class binding
    self.index(self.index() + 1);
    self.index(self.index() - 1);

    //for debugging
    console.log(self.selection());
>>>>>>> Stashed changes
  };

  //function for assigning a class to previously chosen answers and one to the most recent selection for visual feedback, invoked by class bindings
  self.buttonClass = function (buttonText) {
    this.buttonText = buttonText;
    if (buttonText === self.userAnswers()[self.index()]) {
      return "ans-sel";
    } else if (buttonText === self.selection()[self.selection().length - 1]) {
    console.log("true");
    return "cur-sel";
    }
  };

  //finish quiz (invoked when user clicks "Submit")
  self.finishQuiz = function () {
<<<<<<< Updated upstream
    //grade last question since next is disabled
    //if correct answer matches user input push answer to userAnswers array
    //if (selection[selection.length - 1] === self.currentQuestion().correctAnswer) {
    //self.userAnswers.push(selection[selection.length - 1])
    //};
    /*
    if (didAnswer === true) {

      for (i = 0; i < self.questions()[self.index()].answers.length; i++) {
        if (selection[selection.length - 1] === self.questions()[self.index()].answers[i]) {
          isCurrentSelection = true;
        }
      }

      if (isCurrentSelection === true) {
        answer = self.userAnswers()[self.index()];
        self.userAnswers().replace(answer, selection[selection.length - 1]);
      }

      isCurrentSelection = false;

    } else {
        alert('Please answer the question before moving on');
    }
    */

=======
    
    //invoke next() function to save final answer to userAnswers array before scoring
>>>>>>> Stashed changes
    self.next();

    console.log('last question');

<<<<<<< Updated upstream
    //calculate score
    //calcScore = self.userAnswers().length / self.questions().length * 100;
=======
    //calculate score by iterating through userAnswers and checking against correctAnswer
>>>>>>> Stashed changes
    calcScore = 0;
    for (i = 0; i < 10; i++) {
      if(self.questions()[i].correctAnswer === self.userAnswers()[i]) {
        calcScore += 10;
      }
    }

<<<<<<< Updated upstream
=======
    //for debugging
>>>>>>> Stashed changes
    if (self.index() === 9) {
      console.log('test')
    };
    console.log(self.userAnswers());

    //grade score
    if (calcScore >= 80) {
      self.score(calcScore + '% You are a JavaScript expert');
      alert(self.score());
    } else if (calcScore < 60) {
      self.score(calcScore + '% You are a beginner');
      alert(self.score());
    } else {
      self.score(calcScore + '% You are a novice');
      alert(self.score());
    }
  };

  //resets the quiz, empties userAnswers and selection arrays and changes index and current question to zero index
  self.reset = function () {
    self.currentQuestion(self.questions()[0]);
    self.index(0);
    self.selection([]);
    self.userAnswers([]);

    //for debugging
    console.log(self.currentQuestion());
    console.log(self.index());
    console.log(self.userAnswers());
  };
};

ko.applyBindings(new viewModel());
