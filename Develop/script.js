// Assignment Code
var generateBtn = document.querySelector("#generate");

//make function for password 
function generatePassword() { 
  var passwordLength = prompt("How many characters do you want your password to be? (8-32 characters)");
//check if password is long enough
if (isNaN(passwordLength) || passwordLength <8 || passwordLength > 32){
  alert ("Please make a password between 8 and 32 characters.");
  return "";
}
//confirm if the charcters use wants to use 
var includeLowercase = confirm("Do you want to include lowercase letters?");
var includeUppercase = confirm("Do you want to include Uppercase letters?");
var includeNumbers = confirm("Do you want to include numeric letters?");
var includeSpecial = confirm("Do you want to include special letters?");

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
