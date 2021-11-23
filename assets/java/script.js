const gameButton = document.querySelector("#startGameButton");
const questionDisplay = document.getElementById("mainbox");
const timer = document.getElementById("timer");
const theQuestion = document.getElementById("firstQuestion");
const firstQuestion = document.getElementById("questionOne");
const secondQuestion = document.getElementById("questionTwo");
const thirdQuestion = document.getElementById("questionThree");
const fourthQuestion = document.getElementById("questionFour");

gameButton.addEventListener("click", startGame);

function startGame() {
  let randomQuestion = getRandomQuestion();
  theQuestion.textContent = randomQuestion.question;

  firstQuestion.textContent = randomQuestion.choices[0].text;
  secondQuestion.textContent = randomQuestion.choices[1].text;
  thirdQuestion.textContent = randomQuestion.choices[2].text;
  fourthQuestion.textContent = randomQuestion.choices[3].text;
  questionDisplay.setAttribute("style", "visibility: visible");
  console.log(firstQuestion);
  totalTime();
}

const questionsArray = [
  {
    question: "Which symbol signifies that you're using an ID in javascript?",
    choices: [{ text: "#" }, { text: "*" }, { text: "!" }, { text: "@" }],
  },
  {
    question: "When was SQL developed?",
    choices: [
      { text: "1974 by Edgar Codd" },
      { text: "1972 by Alan Kay" },
      { text: "1979 by Oracle" },
      { text: "1975 by Guy Steele and Gerry Sussman" },
    ],
  },
  {
    question: "What is the symbol for calling a function?",
    choices: [{ text: "()" }, { text: "++" }, { text: "&&" }, { text: "${}" }],
  },
];

// const questionList = [questionOne, questionTwo, questionThree];
let time = 75;

function totalTime() {
  var timerInterval = setInterval(function () {
    time--;
    timer.textContent = time;

    if (time === 0) {
      clearInterval(timerInterval);
      time = 0;
      timer.textContent = time;
      quizOver();
    }
  }, 1000);
}

function quizOver() {
  questionDisplay.setAttribute("visibility: hidden");
  pageTwo.textContent = "Game Over";
}

function getRandomQuestion() {
  const index = Math.floor(Math.random() * questionsArray.length);
  const randomQuestion = questionsArray[index];
  console.log(randomQuestion);
  return randomQuestion;
}

// activity 22//

// storing as an array is storing objects is one way to create question storage

// 1 question, four answers, one correct answer

// form, creates a submit event

// Crud, create, read, update, display.  Make a function for it

// span to add items in succession (activity 24 has example in 04) element.matches/todo-list/

// but

// document.addEventListener('keydown', function(event){
//     if(event.keycode === right)
//     return win

// function start cloc

// start the quiz
