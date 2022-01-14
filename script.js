// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create the user input 
function getPasswordOptions(userNumCharacers){
  if (isNaN(userNumCharacers)){
    alert("Please enter a valid number !");
    return false;
  } else if(parseInt(userNumCharacers) < 8){
    alert("Password must be at least 8 characters !");
    return false;
  } else if(parseInt(userNumCharacers) >= 128){
    alert("Password must be less then 128 characters");
    return false;
  }
  return true;
}
// get random characters from each chosen character type
function getRandomElementFromArray(collection){
  return collection[Math.floor(Math.random())* collection.length];
}

//bulding the user input with promt functions 
function generatePassword(){
  var userNumCharacers= prompt(
    "How many character do you want in your password ?"
  );
  var passwordValid = getPasswordOptions(userNumCharacers);
  if (passwordValid){
    var hasSpecialCharacters = confirm(
      "Click OK to confirm special characters."
    );
    var hasNumbers= confirm("Click OK to confirm adding numbers.");
    var hasLowerCase= confirm("Click OK to confirm adding lower case characters");
    var hasUpperCase=confirm("Click OK to confirm adding upper case characters ");
  }

//conditional statement. Generator fails if  all 4 variables avaluate to false
if(
  [hasSpecialCharacters,hasNumbers,hasLowerCase,hasUpperCase].includes(
    true
  )
) 
// arrays to store typer of characters
  var chosenChar=[];
  var guaranteeedChar=[];

//conditional statements with random character picking
if(hasSpecialCharacters){
  chosenChar = chosenChar.concat(specialCharacter);
  guaranteeedChar.push(
    specialCharacter[
      Math.floor(Math.random()* specialCharacter.length)
    ]
  );
}

if (hasNumbers) {
  chosenChar = chosenChar.concat(numericCharacters);
  guaranteeedChar.push(
    numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
  );
}

if(hasLowerCase){
  chosenChar = chosenChar.concat(lowerCasedCharacters);
  guaranteeedChar.push(
    lowerCasedCharacters[
      Math.floor(Math.random()* lowerCasedCharacters.length)
    ]
  );
}
if(hasUpperCase){
  chosenChar = chosenChar.concat(upperCasedCharacters);
  guaranteeedChar.push(
    upperCasedCharacters[
      Math.floor(Math.random()* upperCasedCharacters.length)
    ]
  );
}
// adding a for loop to select random arrays in the password length
var randomChar = [];
for (var i = 0; i < userNumCharacers; i++) {
  var index = Math.floor(Math.random() * chosenChar.length);
  randomChar.push(chosenChar[index]);
}
var replacedPosition = {};
//While loop to ensure an index position that has already been replaced with a guaranteed character is not replaced with another guaranteed character.
while (guaranteeedChar.length > 0) {
  var replaceChar = Math.floor(Math.random() * randomChar.length);
  if (!replacedPosition[replaceChar]) {
    randomChar[replaceChar] = guaranteeedChar.pop();
    replacedPosition[replaceChar] = true;
  }
}
return randomChar.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  




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


