const displaySelectedText = () =>
  window.addEventListener("mouseup", () => {
    const text = window.getSelection();
    if (text && text.toString().length > 0) console.log(text.toString());
  });

displaySelectedText(); // Output: "with the For you feed"
