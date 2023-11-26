const generateOTP = () => {
  const digits = "0123456789";
  const length = 6;
  return Array.from({ length }, (_, i) => i + 1).reduce((initialValue) => {
    const randomIndex = Math.floor(Math.random() * digits.length);
    return (initialValue += digits[randomIndex]);
  }, "");
};
console.log(generateOTP());
