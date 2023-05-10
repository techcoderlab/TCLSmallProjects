var startButton = document.querySelector("#time-button");
var countdownInterval;
startButton.addEventListener("click", function (event) {
  countdownTimer(
    document.querySelector("#time-input").value * 60, // Convert minutes to seconds
    document.querySelector("#time-remaining")
  );
});

/* Countdown Timer */
function countdownTimer(duration, displayElement) {
  var timer = duration;
  var maxValue = duration; // Maximum value is the initial duration
  resetCountDown();
  function updateDisplay() {
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    doAnimate();
    displayElement.textContent = minutes + ":" + seconds;
  }
  function doAnimate(event) {
    // Get current duration in percentage
    var currentPersentage = (timer / maxValue) * 100;

    // currentPersentage should be within 0 and 100
    currentPersentage = Math.min(100, Math.max(0, currentPersentage));

    var circle = document.querySelector(".svg #bar");
    var c = Math.PI * circle.getAttribute("r") * 2;

    // Calculate the pixcels of the svg dasharray length
    var pixcels = ((100 - currentPersentage) / 100) * c;

    // Set progress stroke length in CSS
    circle.style.strokeDashoffset = pixcels + "px";
  }

  countdownInterval = setInterval(function () {
    if (!(--timer < 0)) updateDisplay();
    else
      document.querySelector(".svg #bar").style.strokeDashoffset = "0px";
  }, 1000);

  function resetCountDown() {
    if (countdownInterval != null) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      document.querySelector(".svg #bar").style.strokeDashoffset = "0px";
      displayElement.textContent = "00:00";
    }
  }
}
