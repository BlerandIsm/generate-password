// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create the user input 
function getPasswordOptions(userNumCharacers){
  if (isNaN(userNumCharacers)){
    alert("Please enter a valid number from 8-128 !");
    return false;
  }
}
//arrey of special characters
var specialCharacter=[
  ",",
  "#",
  ",",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
//arrey of uppercase letters 
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//arrey of lowercase letters 
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//arrey of number characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];





























var passwordLength = 

function generatePassword(){
  //ask for user input









  return " pasword will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
