const codes = document.querySelectorAll(".code");
const messageBox = document.querySelector(".info");
codes[0].focus();
codes.forEach((code, idx) =>
  code.addEventListener("keydown", (e) => {
    checkCodesLogic(idx, e.key);
  })
);

function checkCodesLogic(idx, key) {
  if (key >= "0" && key <= "9") {
    codes[idx].value = "";
    setTimeout(function () {
      codes[idx + 1]?.focus();
      if (Array.from(codes).every((code) => code.value != "")) {
        messageBox.style.opacity = 1;
        messageBox.style.height = "auto";
      }
    }, 10);
  } else if (key === "Backspace") {
    setTimeout(function () {
      codes[idx - 1]?.focus();
      if (Array.from(codes).some((code) => code.value === "")) {
        messageBox.style.opacity = 0;
        messageBox.style.height = "0";
      }
    }, 10);
  }
}
