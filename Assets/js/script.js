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


function generatePassword() {
  var specialChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var splitSpecial = specialChars.split("");
  //Special character array is now split
  var numericChars = "0123456789";
  var splitNumeric = numericChars.split("");
  //Numeric array is now split
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var splitLowercase = lowercaseChars.split("");
  //Lowercase array is now split
  var uppercaseChars = lowercaseChars.toUpperCase();
  var splitUppercase = uppercaseChars.split("");
  //Uppercase array is now split
  var random = 0;
  // Starting point for randomly generated Numerics
  var chosenCriterias = [];
  // Array containing which criterias were selected
  var passwordArray = [];
  // Places all random integers from criterias selected into array.
  var password = "";
  // Starting point for what's going to be in the password string.

// initialPrompt;
  passwordLength = Math.floor(prompt("Please enter a value between 8 and 128."));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("The value entered was invalid. Please try again.");
    return "";
  }

// promptCriterias;
  var wantSpecialChars = confirm("Would you like SPECIAL characters in your password?\n\nCANCEL for NO || OK for YES")
  var wantNumericChars = confirm("Would you like NUMERIC characters in your password?\n\nCANCEL for NO || OK for YES")
  var wantLowercaseChars = confirm("Would you like LOWERCASE characters in your password?\n\nCANCEL for NO || OK for YES")
  var wantUppercaseChars = confirm("Would you like UPPERCASE characters in your password?\n\nCANCEL for NO || OK for YES")
    if (!wantSpecialChars && !wantNumericChars && !wantLowercaseChars && !wantUppercaseChars) {
      alert("Please select atleast 1 of the given criterias."); //If no criterias were chosen, error appears
      return"";
    }

// criteriasSelected;
  if (wantSpecialChars) {
    random = Math.floor(Math.random() * splitSpecial.length);
    //Math.floor allows you to return random integers from the array. Called splitSpecial.length, making the array into an integers.
    passwordArray.push(splitSpecial[random]);
    //adds a random SPECIAL character from the split SPECIAL character list into password array.
    chosenCriterias = chosenCriterias.concat(splitSpecial);
    //Adds splitSpecial array into chosenCriterias
  }
  if (wantNumericChars) {
    random = Math.floor(Math.random() * splitNumeric.length);
    //Math.floor allows you to return random integers from the array. Called splitNumeric.length, making the array into an integers.
    passwordArray.push(splitNumeric[random]);
    //adds a random Numeric character from the split Numeric character list into password array.
    chosenCriterias = chosenCriterias.concat(splitNumeric);
    //Adds splitNumeric array into chosenCriterias
  }
  if (wantLowercaseChars) {
    random = Math.floor(Math.random() * splitLowercase.length);
    //Math.floor allows you to return random integers from the array. Called splitLowercase.length, making the array into an integers.
    passwordArray.push(splitLowercase[random]);
    //adds a random LOWERCASE character from the split LOWERCASE character list into password array.
    chosenCriterias = chosenCriterias.concat(splitLowercase);
    //Adds splitLowercase array into chosenCriterias
  }
  if (wantUppercaseChars) {
    random = Math.floor(Math.random() * splitUppercase.length);
    //Math.floor allows you to return random integers from the array. Called splitUppercase.length, making the array into an integers.
    passwordArray.push(splitUppercase[random]);
    //adds a random UPPERCASE character from the split UPPERCASE character list into password array.
    chosenCriterias = chosenCriterias.concat(splitUppercase);
    //Adds splitUppercase array into chosenCriterias
  }

// ForLoop
  for (var i=0; i < (passwordLength); i++) { 
  // Loop that takes random characters from the chosenCriteria array and puts them into the passwordArray, equaling inputted value.
    random = Math.floor(Math.random() * chosenCriterias.length);
    passwordArray.push(chosenCriterias[random]);
  }
  for (var i=0; i < (passwordLength); i++) {
  // Loop that takes new updated array from previous loop and put it into password string.
    random = Math.floor(Math.random() * passwordArray.length);
    password += passwordArray[random]; // adds random character into password string.
    passwordArray.splice(random, 1); //This removes the 1st character in the passwordArray index to insure that the generated password is indeed random.
  }
  
  return password;
}