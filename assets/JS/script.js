var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("questions-container");
var quest = document.getElementById("question");
var secondsLeft = 60;
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var endGame = document.getElementById("end-game")
let index = 0;
var rightorWrong = document.querySelector(".right-or-wrong");
var scoreCounter = 0;
var saveButton = document.getElementById("add-score")
var nameEl = document.getElementById("name");

startButton.addEventListener("click", onStart);
nextButton.addEventListener("click", function () {
    index++
    newQuest()
    rightorWrong.classList.add("hide")
})



function timeLeft() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameEnd()
        }
    }, 1000);
}

function newQuest() {
    questionContainer.classList.remove("hide");
    nextButton.classList.remove("hide");
    startButton.classList.add("hide");
    if (index < questions.length) {
        var answerValue;

        quest.textContent = questions[index].question;
        for (let i = 0; i < questions[index].choices.length; i++) {
            var btn = document.createElement("button");
            btn.setAttribute("data-value", i);
            btn.classList.add("btn-grid", "btn");
            quest.appendChild(btn);
            btn.textContent = questions[index].choices[i];

            btn.addEventListener("click", function (event) {
                answerValue = parseInt(this.getAttribute("data-value"));
                checkAnswer(answerValue, index)
            })
        }
    } else {gameEnd()}
}

function checkAnswer(answerValue, questionsindex) {
    rightorWrong.classList.remove("hide")
    if (answerValue == questions[questionsindex].answer) {
        rightorWrong.textContent = "Correct!"
        scoreCounter ++ 

    } else { rightorWrong.textContent = "Wrong!";
            secondsLeft = secondsLeft -10 }
}

function gameEnd() {
    endGame.classList.remove("hide");
    nextButton.classList.add("hide")
    questionContainer.classList.add("hide");
    score.textContent = scoreCounter;
    saveHighscore()
    
}

function saveHighscore() {
    // get value of input box
     var name = nameEl.value.trim();
  
    // make sure value wasn't empty
    if (name !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newScore = {
        score: scoreCounter,
        name: nameEl
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "score.html";
    }
  }

function onStart() {
    timeLeft();
    newQuest();
}



var questions = [
    {
        question: "Who killed Ned Stark?",
        choices: ["the executioner", "Joffrey Baratheon", "his sense of morality", "Cersei Lannister"],
        answer: 2
    },
    {
        question: "Who killed Ramsay Bolton?",
        choices: ["this is NOT the answer", "and it wasn't Jon Snow", "so the answer should be obvious now", "Sansa. It was Sansa."],
        answer: 3
    },
    {
        question: "Who did NOT get killed by Arya Stark?",
        choices: ["Cersei Lannister", "the Night King", "Walder Frey", "Petyr Baelish"],
        answer: 0
    },
    {
        question: "Who carried out righteous justice on Stannis Baratheon?",
        choices: ["Robert Baratheon", "Brienne of Tarth", "Cersei Lannister", "Jon Snow"],
        answer: 1
    },
    {
        question: "SPOILER ALERT: Who killed Daenerys Targaryen?",
        choices: ["Jon Snow", "David Benioff", "D.B. Weiss", "all of the above"],
        answer: 3
    }

];