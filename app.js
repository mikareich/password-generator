// init HTML
const passwordInput = document.querySelector("#createdPassword");

const passwordLengthInput = document.querySelector("#password-length");
const uppercaseInput = document.querySelector("#uppercase");
const lowercaseInput = document.querySelector("#lowercase");
const numbersInput = document.querySelector("#numbers");
const specialCharactersInput = document.querySelector("#specialCharacters");

const newPasswordBTN = document.querySelector("#newPassword");
const copyPasswordBTN = document.querySelector("#copyPassword");
newPasswordBTN.addEventListener("click", render);
copyPasswordBTN.addEventListener("click", copy);

// define characters
const characters = {
  special: ["!", "*", "$", "&", "%", "?", "_", ".", "@", "#"],
  lowercase: [
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
  ],
  uppercase: [
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
  ],
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function createPassword(rules, length) {
  console.log(length, rules);
  // add different character types based on given preferences
  const usedCharacters = [];
  if (rules.uppercase) usedCharacters.push(...characters.uppercase);
  if (rules.lowercase) usedCharacters.push(...characters.lowercase);
  if (rules.numbers) usedCharacters.push(...characters.number);
  if (rules.specialCharacters) usedCharacters.push(...characters.special);

  // create password
  let password = new Array(length).fill(null).map(function () {
    // return shuffled character
    return usedCharacters[~~(Math.random() * usedCharacters.length)];
  });

  return password.join("");
}

function render() {
  // apply changes and preferences
  const length = parseInt(passwordLengthInput.value) || 8;
  const uppercase = uppercaseInput.checked;
  const lowercase = lowercaseInput.checked;
  const numbers = numbersInput.checked;
  const specialCharacters = specialCharactersInput.checked;

  const password = createPassword(
    { uppercase, lowercase, numbers, specialCharacters },
    length
  );

  passwordInput.value = password;
}

function copy() {
  passwordInput.select();
  document.execCommand("copy");
}

render();
