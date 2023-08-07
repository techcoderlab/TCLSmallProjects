const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const color3Input = document.getElementById("color3");
const percentage1Input = document.getElementById("percentage1");
const percentage2Input = document.getElementById("percentage2");
const percentage3Input = document.getElementById("percentage3");
const rotateDegInput = document.getElementById("rotateDeg");
const gradientBox = document.getElementById("gradient");
const display = document.getElementById("display");

// Add event listeners to color inputs
color1Input.addEventListener("input", updateGradient);
color2Input.addEventListener("input", updateGradient);
color3Input.addEventListener("input", updateGradient);
percentage1Input.addEventListener("input", updateGradient);
percentage2Input.addEventListener("input", updateGradient);
percentage3Input.addEventListener("input", updateGradient);
rotateDegInput.addEventListener("input", updateGradient);

document
  .getElementById("generate-button")
  .addEventListener("click", (event) => {
    updateGradient();
  });

// Initialize the gradient on page load
updateGradient();


// Function to update the gradient when colors change
function updateGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const color3 = color3Input.value;
  const percentage1 = percentage1Input.value;
  const percentage2 = percentage2Input.value;
  const percentage3 = percentage3Input.value;
  const rotateDeg = rotateDegInput.value;

  gradientString = `linear-gradient(${rotateDeg}deg, ${color1} ${percentage1}%, ${color2} ${percentage2}%, ${color3} ${percentage3}% )`;
  
  display.textContent = gradientString;
  gradientBox.style.background = gradientString;
}


