const radioButtons = document.querySelectorAll('input[type="radio"]');
const parentDiv = document.getElementById("parent");
radioButtons.forEach(function (radio) {
  radio.addEventListener("change", function (event) {
    const selectedRadioButtonName = this.name;
    const selectedRadioButtonValue = this.value;

    if (selectedRadioButtonName === "flex-direction") {
      parentDiv.style.flexDirection = selectedRadioButtonValue;
    } else if (selectedRadioButtonName === "flex-wrap") {
      parentDiv.style.flexWrap = selectedRadioButtonValue;
    } else if (selectedRadioButtonName === "justify-content") {
      parentDiv.style.justifyContent = selectedRadioButtonValue;
    } else if (selectedRadioButtonName === "align-items") {
      parentDiv.style.alignItems = selectedRadioButtonValue;
    }
  });
});
