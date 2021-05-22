// Global variables as individual strings
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numberChar = "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = lowercaseChar.toUpperCase();

var combinedChars = [specialChar,numberChar,lowercaseChar,uppercaseChar];



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


function askPasswordLength() {
  var length = prompt("Please enter a value between 8 and 128.");
  return length;
}
function generatePassword() {

  var passwordLength = askPasswordLength();
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("The value entered was invalid. Please try again.");
    return askPasswordLength();
    }
}

