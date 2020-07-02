// Recorded myself with Audacity and searched Internet for how
// to include audio with javascript
var audio = new Audio("spinning.mp3");

// Animation function, gets result and uses according animation CSS class
// Also waits with the reveal of the result, until the wheel stopped spinning.
function animate(spinResult) {
  document.getElementById("wheel").style.animation =
    "spin-" + spinResult + " 5s ease forwards";
  document.getElementById("score").style.animation = "reveal 5s forwards";
}

function showScore(score) {
  document.getElementById("overlay").style.animation = "reveal 2s 4s forwards";
  document.getElementById("final_score").innerHTML = score;
}

// Points on the wheel. Starts with first left of orange center and continues
// counter-clockwise
var points = [80, 40, 30, 50, 10, 90, 20, 60];
var rounds = 0;
var totalScore = 0;

function play() {
  // Generating random result between 1 and 8 (wheel segments)
  var spinResult = Math.floor(Math.random() * 8) + 1;

  // Play spinning sound
  audio.play();

  // Spin animation according to the random number
  animate(spinResult);

  // Calculation of Points
  var spinPoints = points[spinResult - 1];
  if (rounds < 2) {
    totalScore += spinPoints;
    rounds++;
  } else if (rounds == 2) {
    totalScore += spinPoints;
    rounds++;
    showScore(totalScore);
  } else {
    totalScore = spinPoints;
    rounds = 1;
  }

  document.getElementById("roundIndicator").innerHTML = "Round #" + rounds;
  document.getElementById("score").innerHTML = totalScore;

  // FOR DEVELOPMENT
  document.getElementById("dev").innerHTML = spinResult;
}

// Used with active overlay to come back to the normal game
function reset() {
  document.getElementById("overlay").style.display = "none";
}
