const startGame = startGame();
const gameButton = document.querySelector("#startGameButton");
const buttonAnswers = document.getElementById("#buttonAnswers");

function startGame() {
  buttonAnswers.setAttribute("visibility: visible");
  totalTime();
  presentNextQuestion(index);
  startButton.disabled = true;
}

const questionOne = {
  question: "Which symbol signifies that you're using an ID in javascript?",
  answer1: "#",
  answer2: "*",
  answer3: "!",
  answer4: "@",
};

const questionTwo = {
  question: "When was SQL developed?",
  answer1: "1974 by Edgar Codd",
  answer2: "1972 by Alan Kay",
  answer3: "1979 by Oracle",
  answer4: "1975 by Guy Steele and Gerry Sussman",
};
const questionThree = {
  question: "What is the symbol for calling a function?",
  answer1: "()",
  answer2: "++",
  answer3: "&&",
  answer4: "${}",
};

const questionList = [questionOne, questionTwo, questionThree];

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
