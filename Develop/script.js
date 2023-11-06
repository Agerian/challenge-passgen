// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_-+=<>?";

var incLowercase = confirm("Include lowercase letters?");
var incUppercase = confirm("Include uppercase letters?");
var incNumber = confirm("Include numbers?");
var incSpecial = confirm("Include special characters?");
var passwordLength = prompt("Enter the length of the password (8 - 20):");
passwordLength = Number(passwordLength);

if (passwordLength !== number) {
  alert("Password is not a number");
  return "";
}

if (passwordLength < 8 || passwordLength > 20) {
  alert("Password length must be between 8 and 20 charcters.");
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
