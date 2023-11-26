const onVisibilitychange = () => {
  return document.hidden
    ? console.log("Please comeback!")
    : console.log("Glad to see you back again!");
};

document.addEventListener("visibilitychange", onVisibilitychange);
