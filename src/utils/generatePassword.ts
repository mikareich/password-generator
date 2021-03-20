import generateRandomNumber from "./generateRandomNumber";
import {
  lowercaseContained,
  numberContained,
  specialCharacterContained,
  uppercaseContained,
} from "./passwordRules";
import testPassword from "./testPassword";

/**
 * Generates a strong password
 * @returns Generated password
 */
function generatePassword(): string {
  const allRules = [
    lowercaseContained,
    uppercaseContained,
    specialCharacterContained,
    numberContained,
  ];
  const length = Math.floor(Math.random() * 9) + 8;
  let password = "";

  for (let i = 0; i < length; i += 1) {
    const passedRules = testPassword(password, ...allRules);
    const failedRules = allRules.filter((rule) => !passedRules.includes(rule));
    const rulesToFulfill = failedRules.length > 0 ? failedRules : allRules; // look out for any rule when all rules have been fulfilled
    const rule =
      rulesToFulfill[generateRandomNumber(0, rulesToFulfill.length - 1)]; // random rule from rules to fulfill
    const character = rule.range![
      generateRandomNumber(0, rule.range!.length - 1)
    ];

    password += character;
  }

  return password;
}

export default generatePassword;
