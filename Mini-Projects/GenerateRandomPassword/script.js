class RandomPasswordGenerator {
  constructor() {
    this.vowels = "aeiou";
    this.consonants = "bcdfghjklmnpqrstvwxyz";
    this.specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";
    this.numbers = "1234567890";

    this.isUseSpecialChars = false;
    this.isUseNumbers = false;
    this.isUseUpperCase = false;
    this.specialCharsLength = 0;
    this.numberLength = 0;
    this.UpperCaseLength = 0;
  }

  /**
   * Generate the password based on filter parameters
   *
   * @param {number} length
   * @return {string}
   */
  generatePassword(length = 8) {
    let passwordArray = [];

    if (this.isUseNumbers && length >= this.numberLength) {
      length -= this.numberLength;
    } else {
      this.isUseNumbers = false;
    }

    if (this.isUseSpecialChars && length >= this.specialCharsLength) {
      length -= this.specialCharsLength;
    } else {
      this.isUseSpecialChars = false;
    }

    if (this.isUseUpperCase && length >= this.UpperCaseLength) {
      length -= this.UpperCaseLength;
    } else {
      this.isUseUpperCase = false;
    }

    for (let count = 0; count < length; count++) {
      passwordArray.push(
        this.generateRandomChar(this.vowels + this.consonants)
      );
    }

    if (this.isUseSpecialChars) {
      for (let count = 0; count < this.specialCharsLength; count++) {
        passwordArray.push(this.generateRandomChar(this.specialChars));
      }
    }

    if (this.isUseUpperCase) {
      const characters = (this.vowels + this.consonants).toUpperCase();
      for (let count = 0; count < this.UpperCaseLength; count++) {
        passwordArray.push(this.generateRandomChar(characters));
      }
    }

    if (this.isUseNumbers) {
      for (let count = 0; count < this.numberLength; count++) {
        passwordArray.push(this.generateRandomChar(this.numbers));
      }
    }

    return passwordArray.sort(() => Math.random() - 0.5).join("");
  }

  /**
   * Set the length of number set and set active the isUseNumbers flag
   *
   * @param {number} length
   * @return {RandomPasswordGenerator}
   */
  useNumbers(length = 2) {
    this.numberLength = length;
    this.isUseNumbers = true;

    return this;
  }
  /**
   * Set the length of Special Chars set and set active the isUseSpecialChars flag
   *
   * @param {number} length
   * @return {RandomPasswordGenerator}
   */
  useSpecialChars(length = 1) {
    this.specialCharsLength = length;
    this.isUseSpecialChars = true;

    return this;
  }
  /**
   * Set the length of Uppercase Chars set and set active the isUseUpperCase flag
   *
   * @param {number} length
   * @return {RandomPasswordGenerator}
   */
  useUpperCase(length = 1) {
    this.UpperCaseLength = length;
    this.isUseUpperCase = true;

    return this;
  }

  /**
   * Internal function
   * It returns a random character
   *
   * @return {string}
   */
  generateRandomChar(characters = null) {
    // const characters = this.vowels + this.consonants;
    if (characters === null) return null;

    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }
}

document.getElementById("passwordGeneratorForm").onsubmit = function (event) {
  event.preventDefault();

  const passwordDisplay = document.getElementById("passwordDisplay");
  const passwordLength = parseInt(
    document.getElementById("passwordLength").value
  );
  const includeSpecialChars = document.getElementById(
    "includeSpecialChars"
  ).checked;
  const specialCharsLength = parseInt(
    document.getElementById("specialCharsLength").value
  );
  const includeDigits = document.getElementById("includeDigits").checked;
  const digitsLength = parseInt(document.getElementById("digitsLength").value);
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const uppercaseLength = parseInt(
    document.getElementById("uppercaseLength").value
  );

  const password = generatePassword(
    passwordLength,
    includeSpecialChars,
    specialCharsLength,
    includeDigits,
    digitsLength,
    includeUppercase,
    uppercaseLength
  );
  passwordDisplay.value = password;
};

function generatePassword(
  length,
  includeSpecialChars, specialCharsLength,
  includeDigits, digitsLength,
  includeUppercase, uppercaseLength
) {
  let password = new RandomPasswordGenerator();

  if (includeSpecialChars)
    password = password.useSpecialChars(specialCharsLength);
  if (includeDigits) 
    password = password.useNumbers(digitsLength);
  if (includeUppercase) 
    password = password.useUpperCase(uppercaseLength);

  return password.generatePassword(length);
}
