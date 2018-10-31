//global vaariables
var wins = 0;
var losses = 0;
var totalPoints = 0;
var randomNumber;

function resetGame() {
    totalPoints = 0;
    randomNumber;
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

//buttons have to be like the constructor
class Crystal {
    constructor(color) {
        this.color = color;
        //they also have their math function
        this.points = Math.floor(Math.random() * (12 - 1)) + 1;
    }
    //this is adding the points to the previous points
    incrementPoints() {
        console.log(`It's ${this.color}`);
        totalPoints += this.points;
    }
}
//We have a new crystal with __ color and __ points randomly given before 
var crystalOne = new Crystal("blue");
console.log(crystalOne);
console.log(crystalOne.color);
console.log(crystalOne.points);

var crystalTwo = new Crystal("brown");
console.log(crystalTwo);
console.log(crystalTwo.color);
console.log(crystalTwo.points);

var crystalThree = new Crystal("purple");
console.log(crystalThree);
console.log(crystalThree.color);
console.log(crystalThree.points);

var crystalFour = new Crystal("yellow");
console.log(crystalFour);
console.log(crystalFour.color);
console.log(crystalFour.points);

//switch buscar para hacer mas eficiente
//when we click on a crystal, the crystal gives out their points to Your Total Score and adds it with the next clicks
$(".crystal").on("click", function () {
    if ($(this).hasClass(crystalOne.color)) {
        crystalOne.incrementPoints();
        //switch(crystal) {case "crystalOne.color": crystalOne.incrementPoints();}
    }
    if ($(this).hasClass(crystalTwo.color)) {
        crystalTwo.incrementPoints();
    }
    if ($(this).hasClass(crystalThree.color)) {
        crystalThree.incrementPoints();
    }
    if ($(this).hasClass(crystalFour.color)) {
        crystalFour.incrementPoints();
    }
    //place value on yourTotalScoreText
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

});


