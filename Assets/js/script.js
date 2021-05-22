// Global variables as individual strings
var specialChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var numberChars = "0123456789";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = lowercaseChars.toUpperCase();

var combinedChars = [specialChars,numberChars,lowercaseChars,uppercaseChars];
var criteriaNames = ["SPECIAL", "NUMBER", "LOWERCASE", "UPPERCASE"]

// ////

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

// /////

//First prompt asking to enter a valid value.
function askPasswordLength() {
  var length = prompt("Please enter a value between 8 and 128.");
  return length;
}
//Second, third, forth, and fifth prompt asking if user wants to include:
//special, number, lowercase, and/or uppercase to generator.
function promptCriterias(numberOfCriterias) {
  var userCriteriaChoices = [];
  for ( var i=0; i <numberOfCriterias; i++){
    userCriteriaChoices = confirm("OK to include " + criteriaNames[i] + " characters." 
    + "\r\nCANCEL to exclude.")
  }
  return usersCriteriaChoices;
}




function generatePassword() {

  var passwordLength = askPasswordLength();
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("The value entered was invalid. Please try again.");
    return generatePassword();
    }

  promptCriterias(criteriaNames.length); 
}

