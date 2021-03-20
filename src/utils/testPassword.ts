import { IRule } from "../types";
import passwordRules from "./passwordRules";

const allRules = Object.values(passwordRules);

/**
 * Tests password against predefined rules
 * @param password Password to test
 * @param rules Rules to test password against
 * @returns Rules that the password passedc
 */
function testPassword(password: string, ...rules: IRule[]) {
  const rulesToTest = rules.length > 0 ? rules : allRules;
  const passedRules = rulesToTest.filter((rule) => rule.test(password));

  return passedRules;
}

export default testPassword;
