const passwordBox = document.getElementById('PassWord');
const pass_length = document.getElementById("length");
var error = document.getElementById("msg");

const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]></-=";

const allchars = upperCase + lowerCase + number + symbols;

function createpassword() {
    if (pass_length.value == "" ) {
        console.log("inside block")
        document.querySelector(".show").style.display = "block";
    } 
    else {
        document.querySelector(".show").style.display = "none";
        const length = parseInt(pass_length.value);
        if(length ==NaN){
            document.querySelector(".show").style.display = "block";
            return;
        }
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while (length > password.length) {
            password += allchars[Math.floor(Math.random() * allchars.length)];
        }
        passwordBox.value = password;
    }
}

const button = document.getElementById("btn");

button.addEventListener("click", createpassword);