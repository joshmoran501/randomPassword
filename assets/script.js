// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character lists. I have included every number and symbol twice make them appear more frequently. There are a lot more letters and it felt a little nonrandom without artificially increasing the amount of numbers and symbols that could appear
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "01234567890123456789"
var symbols = "!@#$%^&*_-+=!@#$%^&*_-+="

// Write password to the #password input

// Password requirements: 
// choose length 8-128 characters
// choose character types (uppercase, lowercase, numeric, and/or special)

function writePassword() {
  // determine password length
  var lengthPrompt = (window.prompt("Choose password length (Between 8 and 128 characters)", ""))
  while (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)) {
  lengthPrompt = (window.prompt("Password must be 8-128 characters long", ""))
  }
  console.log(lengthPrompt)

  // Determine which characters to include
  var lowerPrompt = window.confirm("Include lowercase letters?")
  console.log("lowercase= " + lowerPrompt)

  var upperPrompt = window.confirm("Include uppercase letters?", "")
  console.log("uppercase= " + upperPrompt)

  var numberPrompt = window.confirm("Include numbers?", "")
  console.log("numbers= " + numberPrompt)

  var symbolPrompt = window.confirm("Include special characters?")
  console.log("symbols= " + symbolPrompt)

  var characters = ""
  
  // combine included characters into 1 string
  if (lowerPrompt === true) {characters += lower};
  if (upperPrompt === true) {characters += upper};
  if (numberPrompt === true) {characters += numbers};
  if (symbolPrompt === true) {characters += symbols};
  console.log("included characters: " + characters)

  // Set initial password as empty string
  var password = ""

  // Generate password by adding to empty string using iterations
  function generatePassword() {
    for (var i = 0; i < lengthPrompt; i++) { 
    var stringPosition = Math.floor(Math.random() * characters.length)
    password += characters[stringPosition]
  } 
  return password
  }
  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

