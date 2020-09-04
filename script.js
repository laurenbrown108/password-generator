//Assignment Code
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

    // Define variables for possible password combinations
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    //Prompt user to choose length
    var lengthChoice = prompt("Welcome to Password Generator! Please specify the amount of characters you would like to use. (Note: Password must be between 8-128 characters.");
    if ((lengthChoice) < 8 || lengthChoice > 128) {
        alert("Error: Must be between 8-128 characters!");
    }
    //Prompt user to choose character combination
    else {
        var confirmSymbol = confirm("Would you like to include special characters?");
        var confirmUpper = confirm("Would you like to include uppercase letters?");
        var confirmLower = confirm("Would you like to include lowercase letters?");
        var confirmNum = confirm("Would you like to include numbers?");
        //Generate combos based off user input
        var randomPass = [];
        if (!confirmSymbol && !confirmUpper && !confirmLower && !confirmNum) {
            alert("Password must contain at least one character.")
        }
        if (confirmSymbol) {
            randomPass = randomPass.concat(symbol)
        }

        if (confirmUpper) {
            randomPass = randomPass.concat(cap)
        }

        if (confirmLower) {
            randomPass = randomPass.concat(lower)
        }

        if (confirmNum) {
            randomPass = randomPass.concat(num)
        }
        //Loop password
        var password = "";

        for (var i = 0; i < lengthChoice; i++) {
            password = password + randomPass[Math.floor(Math.random() * randomPass.length)];
        }
        //Display password
        return password
    }
}