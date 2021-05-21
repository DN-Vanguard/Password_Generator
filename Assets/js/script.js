// Global variables
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numberChar = "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = lowercaseChar.toUpperCase();

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


