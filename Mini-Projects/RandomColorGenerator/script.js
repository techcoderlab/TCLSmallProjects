
var changeColorButton = document.querySelector(".change-color-button");
var countdownInterval;
changeColorButton.addEventListener("click", function (event) {

    color = getRandomHexColorCode();
    document.querySelector(".color-code-label").textContent = color;
    document.querySelector(".display-area").style.background = color;

});

function getRandomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
