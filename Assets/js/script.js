// Global variables
var specialChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var splitSpecial = specialChars.split("");

var numberChars = "0123456789";
var splitNumber = numberChars.split("");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var splitLowercase = lowercaseChars.split("");

var uppercaseChars = lowercaseChars.toUpperCase();
var splitUppercase = uppercaseChars.split("");

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


//First prompt asking to enter a valid value.
function askPasswordLength() {
  var length = Math.floor(prompt("Please enter a value between 8 and 128."));
  return length;
}
//Following prompts asking for clarification on which criteria user would like to use.
//User has to pick atleast one criteria otherwise error would appear.
function promptCriterias(){
  var wantSpecialChars = confirm("Would you like SPECIAL characters in your password?\n\nCANCEL for NO || OK for YES")
  var wantNumberChars = confirm("Would you like NUMBER characters in your password?\n\nCANCEL for NO || OK for YES")
  var wantLowercaseChars = confirm("Would you like LOWERCASE characters in your password?\n\nCANCEL for NO || OK for YES")
  var wantUppercaseChars = confirm("Would you like UPPERCASE characters in your password?\n\nCANCEL for NO || OK for YES")
    if (!wantSpecialChars && !wantNumberChars && !wantLowercaseChars && !wantUppercaseChars) {
      alert("Please select 1 of the given criterias.");
    }
  return "";
}




function generatePassword() {

  var passwordLength = askPasswordLength();
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("The value entered was invalid. Please try again.");
      return "";
    }

  promptCriterias();


    

    

}