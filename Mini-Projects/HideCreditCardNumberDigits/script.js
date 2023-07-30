let hideCreditCardDigits = (creditCardNumber) => {
  const lastFourDigits = creditCardNumber.slice(-4);
  const hiddenNumber = lastFourDigits.padStart(creditCardNumber.length, "•");
  return hiddenNumber;
};

creditCardNumber = "2453145357289345";

document.querySelector(".display").innerHTML =
  hideCreditCardDigits(creditCardNumber);
