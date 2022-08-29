// Assignment Code


const Length = 8;
const choice = []
const specialChar = ["!","@","#","$","%","&","*","_","-","+",]
const lowerCase = ['a','B','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const generateBtn = document.querySelector("#generate")

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Generator function
function getRandomLower() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97 );

}

function getRandomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65 );

}

function getRandomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48 );

}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()?+-~';
  return symbols[Math.floor(Math.random() * symbols.length)]

}

console.log(getRandomLower())

//this 

