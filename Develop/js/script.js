var generateBtn = document.querySelector("#generate");

var types = [];
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var spChars = "`! @#$%^&*()_-+={[}]|:;'<,>.?/~"
var numbers = "0123456789"

function getRandomCharacter(characterType) {
    return characterType[Math.floor(Math.random() * Math.floor(characterType.length))];
  }
  
  function getRandomCharacter(characterType) {
    return characterType[Math.floor(Math.random() * Math.floor(characterType.length))];
  }
  
  
  // Gather user input for the length of password
  function lengthInput() {
  
    passwordLength = prompt("How many characters would you like your password?");
  
    if ((passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLength) === true)) {
      alert("Please enter a number between 8-128")
      lengthInput()
    }
  }
  