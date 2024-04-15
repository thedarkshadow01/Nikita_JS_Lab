const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Rome", "London"],
      correctAnswer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      correctAnswer: 0
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
      correctAnswer: 0
    }
  ];
  
  let score = 0;
  let currentQuestionIndex = 0;
  
  // DOM elements
  const questionElement = document.getElementById("question");
  const choiceElements = [document.getElementById("choice0"), document.getElementById("choice1"), document.getElementById("choice2"), document.getElementById("choice3")];
  const progressElement = document.getElementById("progress");
  
  // Function to display the current question
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, i) => {
      choiceElements[i].textContent = option;
    });
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  }
  
  // Function to check answer and update score
  function checkAnswer(userAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  }
  
  // Function to display the final score
  function displayScore() {
    const percentage = (score / quizQuestions.length) * 100;
    const scoreMessage = `Your score is: ${score}/${quizQuestions.length}. Percentage: ${percentage}%`;
    alert(scoreMessage);
  }
  
  // Event listeners for option buttons
  document.getElementById("btn0").addEventListener("click", function() {
    checkAnswer(0);
    nextQuestion();
  });
  document.getElementById("btn1").addEventListener("click", function() {
    checkAnswer(1);
    nextQuestion();
  });
  document.getElementById("btn2").addEventListener("click", function() {
    checkAnswer(2);
    nextQuestion();
  });
  document.getElementById("btn3").addEventListener("click", function() {
    checkAnswer(3);
    nextQuestion();
  });
  
  // Function to move to the next question or display score if quiz is finished
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
  
  // Start the quiz
  displayQuestion();
  