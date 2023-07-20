// Create a variable which stores all character data

const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

// Set password length - develop this to let user select length

let passwordLength = 12;

// Grab the output HTML elements

const pass1 = document.getElementById("output1");
const pass2 = document.getElementById("output2");
const pass3 = document.getElementById("output3");
const pass4 = document.getElementById("output4");

// Create a function that will generate a random password containing number characters from passwordLength

function generate() {
  // Declare a variable "password and assign an empty string to it's value"
  let password = " ";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // Add the random characters to the empty password string
    password += characters[randomIndex];
  }
  return password;
}

// Creates a function outputPasswords() that adds the generated passwords to the HTML elements when clicking Generate Passwords <button>

generatePassword.addEventListener("click", function () {
  pass1.textContent = generate();
  pass2.textContent = generate();
  pass3.textContent = generate();
  pass4.textContent = generate();
});

// function outputPasswords() {
//   // Display the output in the HTML outputDisplay
//   pass1.textContent = generate();
//   pass2.textContent = generate();
//   pass3.textContent = generate();
//   pass4.textContent = generate();
// }

// Version 2 - Add a function that will copy the text on click

// Invoke function
// console.log(generate());
