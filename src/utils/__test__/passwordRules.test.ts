import { uppercaseContained } from "../passwordRules";

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
