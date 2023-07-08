let rangeSlider = document.getElementById("myRange");

let changeSliderValue = () => {
  let value = Number(rangeSlider.value);

  rangeSlider.style.background = `linear-gradient(90deg, var(--c) ${
    value + 0.5 + "%"
  }, transparent ${value + 0.5 + "%"})`;
};

rangeSlider.addEventListener("input", changeSliderValue);

changeSliderValue();
