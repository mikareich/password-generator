import {
  lowercaseContained,
  numberContained,
  specialCharacterContained,
  uppercaseContained,
} from "../passwordRules";

test("Test uppercase rule for the following password: d{G5-SH[(<O", () => {
  const password = "d{G5-SH[(<O";
  const containsUppercase = uppercaseContained.test(password);

  expect(containsUppercase).toBe(true);
});

test("Test uppercase rule for the following password: d{g5-sh[(<o", () => {
  const password = "d{g5-sh[(<o";
  const containsUppercase = uppercaseContained.test(password);

  expect(containsUppercase).toBe(false);
});

test("Test lowercase rule for the following password: 5m;A'eyS10)QK", () => {
  const password = "5m;A'eyS10)QK";
  const containsLowercase = lowercaseContained.test(password);

  expect(containsLowercase).toBe(true);
});

test("Test lowecase rule for the following password: 5M;A'EYS10)QK", () => {
  const password = "5M;A'EYS10)QK";
  const containsLowercase = lowercaseContained.test(password);

  expect(containsLowercase).toBe(false);
});

test("Test special characters rule for the following password: 4Jw)UF^HIJB", () => {
  const password = "4Jw)UF^HIJB";
  const containsSpecialCharacters = specialCharacterContained.test(password);

  expect(containsSpecialCharacters).toBe(true);
});

test("Test special characters rule for the following password: 4JwUFHIJB", () => {
  const password = "4JwUFHIJB";
  const containsSpecialCharacters = specialCharacterContained.test(password);

  expect(containsSpecialCharacters).toBe(false);
});

test("Test number rule for the following password: B:c4O%=HK3?", () => {
  const password = "B:c4O%=HK3?";
  const containsNumber = numberContained.test(password);

  expect(containsNumber).toBe(true);
});

test("Test number rule for the following password: B:cO%=HK?", () => {
  const password = "B:cO%=HK?";
  const containsNumber = numberContained.test(password);

  expect(containsNumber).toBe(false);
});
