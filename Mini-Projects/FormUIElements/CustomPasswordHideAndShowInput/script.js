let togglePasswordVisibility = function() {
    let passwordInput = document.getElementById("passwordInput");
    let eyeIcon = document.getElementById("eyeIcon");
    let toggleButton = document.getElementById("eye-button");
  
    let type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    let text = type === "password" ? "••••••••••" : "password";
  
    passwordInput.setAttribute("type", type);
    passwordInput.setAttribute("placeholder", text);
  
    // Toggle the icon and add the animation class
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
  
    // Add the clicked class to the toggle button to trigger animations
    toggleButton.classList.toggle("clicked");
  
    // Remove the clicked class after a delay to allow animation to complete
    setTimeout(function() {
      toggleButton.classList.remove("clicked");
    }, 500);
  }
  
  document.getElementById("eye-button").addEventListener("click", togglePasswordVisibility);
  