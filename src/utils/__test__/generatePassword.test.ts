import { generatePassword, testPassword } from "../index";

test("Generated password fulfilles all rules", () => {
  const password = generatePassword();
  const passedRules = testPassword(password);

  expect(passedRules.length).toBe(5);
});
