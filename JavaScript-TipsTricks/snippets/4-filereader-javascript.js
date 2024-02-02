const readFile = () => {
  const fileReader = new FileReader();

  /* onloadend event fires when file reading is completed */
  fileReader.onloadend = (event) => console.log(event.target.result);

  fileReader.readAsDataURL(file_input.files[0]); /* For reading image file */

  fileReader.readAsText(file_input.files[0]); /* For reading text file */
};

const file_input = document.getElementById("file-input");
file_input.addEventListener("input", readFile);
