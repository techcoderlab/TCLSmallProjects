function getOrientation() {
  const isPortrait = screen.orientation.type.startsWith("portrait");
  return isPortrait ? "portrait" : "landscape";
}
console.log(getOrientation());
