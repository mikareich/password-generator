import { testPassword } from "..";

test("Test for the following password: !A9t13zy44gfd", () => {
  const password = "!A9t13zy44gfd";
  const passedTests = testPassword(password);

  expect(passedTests.length).toBe(5);
});

test("Test for the following password: Aa!11111", () => {
  const password = "Aa!11111";
  const passedTests = testPassword(password);

  expect(passedTests.length).toBe(5);
});

test("Test for the following password: #J89@kd&9", () => {
  const password = "#J89@kd&9";
  const passedTests = testPassword(password);

  expect(passedTests.length).toBe(5);
});
