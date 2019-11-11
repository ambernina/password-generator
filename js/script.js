var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArr = [1,2,3,4,5,6,7,8,9,0];
var specCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "="];

var result = document.getElementById("result");


function prompts() {
    var length = prompt("How long would you like your password to be between 8 and 128 characters?");
    var lowerPrompt = confirm("Would you like to include lower case letters?");
    var upperPrompt = confirm("Would you like to include upper case letters?");
    var numPrompt = confirm("Would you like to include numbers?");
    var specCharPrompt = confirm("Would you like to include special characters?");
    
    length = parseInt(length);
    var userPassArr = [];
    
    if (lowerPrompt === true) {
        userPassArr.push(lowerCaseArr);
    }
    if (upperPrompt === true) {
        userPassArr.push(upperCaseArr);
    }
    if (numPrompt === true) {
        userPassArr.push(numArr);
    }
    if (specCharPrompt === true) {
        userPassArr.push(specCharArr);
    }

    return {
        length: length,
        passArr: userPassArr.flat()
    }

}

var passValues = prompts();
console.log(passValues);


function password(length, specifiedCharacters) {
    
    for (var i = 0; i < length.value; i++) {
        userGeneratedPassword += passValues.charAt(Math.floor(Math.random() * passValues.length));
        // userGeneratedPassword.push(passValues[i]);
        console.log(userGeneratedPassword);
        result.textContent = userGeneratedPassword;
    }
    
    // var userGeneratedPassword = [];
}

password(passValues.length, passValues.passArr);
console.log(password);







// if (lowerPrompt === "yes" && upperPrompt === "yes" && numPrompt === "yes" && specCharPrompt === "yes") {
//     getRandomLower();
//     getRandomUpper();
//     getRandomNumber();
//     getRandomSymbol(); 
// }


// function getRandomLower() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// console.log(getRandomLower());

// function getRandomUpper() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// console.log(getRandomUpper());

// function getRandomNumber() {
// 	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// console.log(getRandomNumber());

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*_-=~'
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomSymbol());







