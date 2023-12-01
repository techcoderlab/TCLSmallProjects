// Get the input elements
const input1 = document.getElementById("input-circle1");
const input2 = document.getElementById("input-circle2");
const input3 = document.getElementById("input-circle3");

// Get the circle elements
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");

// Add event listener to all input fields
input1.addEventListener("change", changeProperty);
input2.addEventListener("change", changeProperty);
input3.addEventListener("change", changeProperty);

// Event handler for keydown event
function changeProperty() {
  const selectedInputName = this.name;
  // Get the values from the input fields
  const value = parseInt(this.value);

  // Set the z-index values for the circles
  if (selectedInputName == "input-circle1") {
    circle1.style.zIndex = value;
    circle1.textContent = "z-index = " + value;
  }
  if (selectedInputName == "input-circle2") {
    circle2.style.zIndex = value;
    circle2.textContent = "z-index = " + value;
  }
  if (selectedInputName == "input-circle3") {
    circle3.style.zIndex = value;
    circle3.textContent = "z-index = " + value;
  }
}
