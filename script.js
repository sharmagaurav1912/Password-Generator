const passBox = document.getElementById("input");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "@#$%^&*(){}[]|\_-<,>./=";

const allChars = upperCase + lowerCase + number + special;

function generatePassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passBox.value = password;

    let copyIcon = document.querySelector('#copy-icon');

document.getElementById('copy-btn')
.addEventListener("click", () => {

    if (passBox.value) {
        navigator.clipboard.writeText(passBox.value);

        // passBox.setAttribute("Placeholder", "Text copied to Clipboard");

        // passBox.value = "Text copied to Clipboard";
        copyIcon.src = 'img/check.png';

        setTimeout(() => {
            passBox.value = "";
            copyIcon.src = 'img/R2ac5155460db535e7dc649ec9f5afdee.png';
        },2000);
    } 

});

};


