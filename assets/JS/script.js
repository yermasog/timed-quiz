var questionsContainer = document.getElementById("questions-container");
var timer = document.getElementById("timer");
var quest = document.getElementById("question");


var questions = [
    {
        question: "Who killed Ned Stark?",
        choices: ["the executioner","Joffrey Baratheon", "his sense of morality", "Cersei Lannister"],
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

startEl.addEventListener("click", onStart)

function timeLeft() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
}

function newQuest() {
    if (index < questions.length) {
        var answerEl = document.getElementById("answer");

        questionsPlaceholder.textContent = questions[index].question;
        for (let i = 0; i < questions[index].choices.length; i++) {
            var btn = document.createElement("button");
            btn.setAttribute("data-value", i);
            questionsPlaceholder.appendChild(btn);
            btn.textContent = questions[index].choices[i];

            btn.addEventListener("click", function (event) {
                answerEl.setAttribute("data", parseInt(this.getAttribute("data-value")))
            })
        }
    getSubmitbtn(answerEl)    
    }else{
        alert("you win!")
    }

}

function initializeSubmitBtn() {
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.setAttribute("id", "submit-btn");
    document.body.appendChild(submitBtn);
}

function getSubmitbtn(answerEl) {
    document.getElementById("submit-btn").addEventListener("click", function () {
        if (parseInt(answerEl.getAttribute("data"))==questions[index].answer) {
            index++
            questionsPlaceholder.innerHTML = "";
            newQuest();
        }
    })
}



function onStart() {
    timeLeft();
    initializeSubmitBtn()
    newQuest();
}