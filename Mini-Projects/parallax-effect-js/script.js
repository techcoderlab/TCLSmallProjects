function parallax() {
  /* wait variable prevents the parallax function from being 
    called more often than every 14 milliseconds. */
  const wait = 14;
  /* You can adjust the 0.4 between (0-1) to change the speed */
  const speed = 0.4;

  function throttle(fn, wait) {
    let time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
  function parallax() {
    const scrolled = window.scrollY;
    const parallax = document.querySelector(".parallax");
    const coords = scrolled * speed + "px";
    parallax.style.transform = "translateY(" + coords + ")";
  }

  window.addEventListener("scroll", throttle(parallax, wait));
}

parallax();
