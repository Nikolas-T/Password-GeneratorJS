// Assignment Code

var choice = []
var Length = 8;
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "+",]
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function popup() {
  choice = [];
  Length = parseInt(prompt("How many characters do you want your password to be? (must be at least 8 characters)"));

  if (isNaN(Length) || Length < 8 || Length > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Try again.")
    return false;
  }
  if (confirm("Do you want uppercase letters?")) {
    choice = choice.concat(upperCase);
  }
  if (confirm("Do you want lowercase letters in your password?")) {
    choice = choice.concat(lowerCase);
  }
  if (confirm("Do you want special characters?")) {
    choice = choice.concat(specialChar);
  }

  if (confirm("Do you want numbers?")) {
    choice = choice.concat(numbers);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var usablePassword = popup()
  var passwordText = document.querySelector("#password");

  if (usablePassword) {
    var genPassword = generatePassword();
    passwordText.value = genPassword;
  }
}



// Generator function
function generatePassword() {
  var password = " ";
  for (var i = 0; i < Length; i++) {
    var randomize = Math.floor(Math.random() * choice.length);
    password = password + choice[randomize];
  }
  return password;
}



//this 
