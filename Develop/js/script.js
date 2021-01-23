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
  
  

  function lengthInput() {
  
    passwordLength = prompt("How many characters would you like your password?");
  
    if ((passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLength) === true)) {
      alert("Please enter a number between 8-128")
      lengthInput()
    }
  }
  
  function typeInput() {

    
    num = confirm("Would you like to add Numbers?")
    lowCase = confirm("Would you like to add Lowercase Letters?")
    upCase = confirm("Would you like to add Uppercase Letters?")
    spChar = confirm("Would you like to add Special Characters?")
  
    
    if ((num === false) && (lowCase === false) && (upCase === false) && (spChar === false)) {
      alert("Please choose at least one character type")
      typeInput();
    }
  
    if (num === true) {
      types.push(1)
    }
    if (lowCase === true) {
      types.push(2)
    }
    if (upCase === true) {
      types.push(3)
    }
    if (spChar === true) {
      types.push(4)
    }
  }