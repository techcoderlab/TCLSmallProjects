setInterval(() => {
  let timeString = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.querySelector(".display #time").textContent = timeString;
});
