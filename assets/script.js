// Assignment code here
// Created arrays for lowercase letters, uppercase letters, numbers, and special characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

var lowercaseAsk = confirm("Would you like to include lowercase letters?")
// console.log(lowercaseAsk)
var uppercaseAsk = confirm("Would you like to include uppercase letters?")
// console.log(uppercaseAsk)
var numberAsk = confirm("Would you like to include numbers?")
// console.log(numberAsk)
var specialAsk = confirm("Would you like to include special characters?")
// console.log(lowercaseAsk)
var lengthAsk = prompt("How many characters would you like the password to be?")

if (typeof lengthAsk != number) {
  var lengthAsk = prompt("That is not a number. Please enter a number between 8 and 128.")
}
else if (lengthAsk < 8 || lengthAsk > 128) {
  var lengthAsk = prompt("Password must be between 8 and 128 characters. Please try again.")
}

var passwordArray = []
function generatePassword() {
  if (lowercaseAsk) {
    passwordArray.concat(lowercase)
  }
  if (uppercaseAsk) {
    passwordArray.concat(uppercase)
  }
  if (numberAsk) {
    passwordArray.concat(number)
  }
  if (specialAsk) {
    passwordArray.concat(special)
  }
var password = ""
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
