// Get the element where the result will be displayed
const resultElement = document.getElementById("result");

// Function to handle the change event
function handleRadioChange(event) {
  const selectedValue = event.target.value;
  resultElement.textContent =
    selectedValue + " Star"+(selectedValue > 1 ? "s" : "");
}

// Add event listener to the radio button group
document.getElementsByName("rate").forEach(function (radioButton) {
  radioButton.addEventListener("change", handleRadioChange);
});
