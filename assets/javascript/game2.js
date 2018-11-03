//global vaariables
var wins = 0;
var losses = 0;
var totalPoints = 0;
var randomNumber;
var crystals;

function resetGame() {
    totalPoints = 0;
    randomNumber;
    // here we need to assign randomCrystals to crystals variable
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    randomNumberText.textContent = "Score to get: " + randomNumber;
};
//connect text with variables 
var randomNumberText = document.getElementById("randomNumberText")
var winsText = document.getElementById("winsText")
var lossesText = document.getElementById("lossesText")
var yourTotalScoreText = document.getElementById("yourTotalScoreText")

//when the page is loaded I need scoreToGet to show a randomNumber between 19-120
//function on load
$(document).ready(function () {
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    randomNumberText.textContent = "Score to get: " + randomNumber;
});

//We have a new crystal with __ color and __ points randomly given before 
//i need a function that brings a new object each time with a picture and points 

// { red: {points: 1}}
function randomCrystals() {
    return {
        red: {
            points: Math.random(0, 1)
        }
    }
}

// four different click handlers, one for each crystal

function addClickedValues(clickedCrystal) {
     //show new points total on screen
     totalPoints += clickedCrystal.points
    //check if won or lost
    checkWin();
    //console log total
}

$('#red').on('click', function(){
    addClickedValues(crystals.red);
}) 

function renderCrystals() {
    // loop through crystals OBJECT *look up for loop to iterate over objects*
    // create a div
    //create image element
    //append image to div
    //append div to DOM
}


//switch buscar para hacer mas eficiente, if it works use case instead of ifs. 


//when we click on a crystal, the crystal gives out their points to Your Total Score and adds it with the next clicks
function checkWin() {
    yourTotalScoreText.textContent = "Your total score is: " + totalPoints;

    //if your total score is equal to score to get then win=1
    if (totalPoints === randomNumber) {
        wins++;
        alert("You won!")
        //reset game, but missing to reset crystals 
        resetGame();
      
    }
    // your total score is bigger than score to get then loss=1
    if (totalPoints > randomNumber) {
        losses++;
        alert("You lost! :(")
        //reset game, but missing to reset crystals  
        resetGame();
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

}    //place value on yourTotalScoreText


