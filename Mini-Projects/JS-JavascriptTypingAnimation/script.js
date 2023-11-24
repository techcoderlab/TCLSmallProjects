// Set the time intervals for typing each character and erasing the previous character in milliseconds
const typeNextCharAfter = 90;
const erasePreviousCharAfter = 40;
const cursorStartsTypingAfter = 1000;
const cursorStartsErasingAfter = 2000;

// Array of strings to be displayed one at a time
const textArray = [
  "Hello Friends !",
  "If you find this post Useful !",
  "Please Follow For more... Thanks !",
];

// Select the HTML elements for the typed text and cursor
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

// Initialize indices for tracking the current string and character position
let textArrayIndex = 0;
let charIndex = 0;

// Function to erase the typed text
const erase = () => {
  if (charIndex > 0) {
    // Remove cursor blink
    cursor.classList.remove("blink");
    // Update typed text with one less character
    typedText.textContent = textArray[textArrayIndex].slice(0, --charIndex);
    // Set a timeout for the next character erasure
    setTimeout(erase, erasePreviousCharAfter);
  } else {
    // Add cursor blink
    cursor.classList.add("blink");
    // Move to the next string in the array (cycling back to the beginning if needed)
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    // Set a timeout for the next string typing
    setTimeout(type, cursorStartsTypingAfter);
  }
};

// Function to type the next character
const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    // Remove cursor blink
    cursor.classList.remove("blink");
    // Add the next character to the typed text
    typedText.textContent += textArray[textArrayIndex][charIndex++];
    // Set a timeout for typing the next character
    setTimeout(type, typeNextCharAfter);
  } else {
    // Add cursor blink
    cursor.classList.add("blink");
    // Set a timeout for starting the erasure of the current string
    setTimeout(erase, cursorStartsErasingAfter);
  }
};

// Call the initial typing functionality
type();
