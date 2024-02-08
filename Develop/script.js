// Assignment Code
var generateBtn = document.querySelector("#generate");

//make function for password 

//check if password is long enough

//confirm if the charcters needed are included

//check if at least one character type is selected

//string variables containing the possible characters

//var to store the characters

//append character based on the user input

//var to store the password

//loop to generate the password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
