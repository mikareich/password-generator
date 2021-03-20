import { IRule } from "../types";
import {
  alphabetLowercase,
  alphabetUppercase,
  numbers,
  specialCharacters,
} from "./characters";

/**
 * Rule that checks that the password contains capital letters.
 */
export const uppercaseContained: IRule = {
  description: "Password should contain at least one capital letter.",
  test: (password): boolean =>
    password.split("").some((letter) => alphabetUppercase.includes(letter)),
  range: alphabetUppercase,
};

/**
 * Rule that checks that the password contains lower case letters.
 */
export const lowercaseContained: IRule = {
  description: "Password should contain at least one lowercase letter",
  test: (password) =>
    password.split("").some((letter) => alphabetLowercase.includes(letter)),
  range: alphabetLowercase,
};

/**
 * Rule that checks that the password contains special characters.
 */
export const specialCharacterContained: IRule = {
  description: "Password should contain at least one special character",
  test: (password) =>
    password.split("").some((letter) => specialCharacters.includes(letter)),
  range: specialCharacters,
};

/**
 * Rule that checks that the password contains numbers.
 */
export const numberContained: IRule = {
  description: "Password should contain at least one number",
  test: (password) =>
    password.split("").some((letter) => numbers.includes(letter)),
  range: numbers,
};

/**
 * Rule that checks that the password contains at least 8 characters.
 */
export const minimumLength: IRule = {
  description: "Password should contain at least eight characters",
  test: (password) => password.length >= 8,
  range: null,
};

export default [
  uppercaseContained,
  lowercaseContained,
  specialCharacterContained,
  numberContained,
  minimumLength,
];
