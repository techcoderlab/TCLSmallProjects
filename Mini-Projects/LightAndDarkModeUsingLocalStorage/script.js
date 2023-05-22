// Check if dark mode preference is saved in local storage
const isDarkMode = localStorage.getItem("darkMode") === "true";
const heading = document.querySelector(".heading");

// Apply the saved mode (light/dark) on page load
if (isDarkMode) {
  enableDarkMode();
} else {
  enableLightMode();
}

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "true");
  heading.textContent = 'Dark Mode: ON'
}

// Function to enable light mode
function enableLightMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
  heading.textContent = "Dark Mode: OFF";
}

// Toggle mode when the button is clicked
document.getElementById("mode-toggle").addEventListener("click", function () {
  if (localStorage.getItem("darkMode") === "true") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});
