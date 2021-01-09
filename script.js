var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start");
var questionsPlaceholder = document.querySelector(".questionsGoHere");
var index = 0

var secondsLeft = 60;
// WHEN I click the start button
// THEN a timer starts

var timerInterval;

var questions = [
    {
        question: "Who killed Ned Stark?",
        choices: ["the executioner", "Joffrey Baratheon", "Cersei Lannister", "his sense of morality"],
        answer: 4
    },
    {
        question: "Who killed Ramsay Bolton?",
        choices: "the Queen of the North",
        answer: 1
    },
    {
        question: "Who did NOT get killed by Arya Stark?",
        choices: ["Cersei Lannister", "the Night King", "Walder Frey", "Petyr Baelish"],
        answer: 1
    },
    {
        question: "Who carried out righteous justice on Stannis Baratheon?",
        choices: ["Robert Baratheon", "Brienne of Tarth", "Cersei Lannister", "Jon Snow"],
        answer: 2
    },
    {

        question: "SPOILER ALERT: Who killed Daenerys Targaryen?",
        choices: ["Jon Snow", "David Benioff", "D.B. Weiss", "all of the above"],
        answer: 4
    }

];

startEl.addEventListener("click", onStart)

function timeLeft() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // alert("game over");
        }
    }, 1000);
}
// AND I am presented with a question


function newQuest() {
    if (index < questions.length) {
        questionsPlaceholder.textContent = questions[index].question;
        for (let i = 0; i < questions[index].choices.length; i++) {
            var btn = document.createElement("button");
            questionsPlaceholder.appendChild(btn);
            btn.textContent = questions[index].choices[i];
        }
    }
    index++
}






function onStart() {
    timeLeft();
    newQuest();
}


// WHEN I answer a question
    //create something that looks like buttons 
    //put options in buttons (create a data element for options)
    //create event listener for when button is clicked 
    //compare chosen value with correct answer 
// THEN I am presented with another question
    //change textcontent 
    //use a trigger 
// WHEN I answer a question incorrectly
    //compare chosen value with correct answer
// THEN time is subtracted from the clock
    // if values are not equal, secondsleft-=10
// WHEN all questions are answered or the timer reaches 0

// THEN the game is over
    //when last question is answered BEFORE clock runs out it needs to stop the clock
    //if statement "if question index is last then end game"
// WHEN the game is over
// THEN I can save my initials and score
    //
