import React, { useEffect, useState } from "react";
import {
  Refresh,
  ShieldCheckOutline,
  ShieldExclamationOutline,
} from "heroicons-react";
import { passwordRules, generatePassword, testPassword } from "./utils";
import { IStrength, IRule } from "./types";

const iconSize = 24;

const allRules = Object.values(passwordRules);

const allStrengths: IStrength[] = [
  {
    description: "weak",
    color: "red-500",
    icon: <ShieldExclamationOutline size={iconSize} className="text-red-500" />,
  },
  {
    description: "medium",
    color: "yellow-500",
    icon: (
      <ShieldExclamationOutline size={iconSize} className="text-yellow-500" />
    ),
  },
  {
    description: "strong",
    color: "green-500",
    icon: <ShieldCheckOutline size={iconSize} className="text-green-500" />,
  },
];

function PasswordGenerator() {
  const [password, setPassword] = useState(generatePassword());
  const [passwordStrength, setPasswordStrength] = useState(allStrengths[0]);
  const [passedTests, setPassedTests] = useState<IRule[]>([]);
  const [failedTests, setFailedTests] = useState<IRule[]>([]);

  useEffect(() => {
    const currentPassedTests = testPassword(password);
    const currentFailedTests = allRules.filter(
      (rule) => !currentPassedTests.includes(rule)
    );
    setFailedTests(currentFailedTests);
    setPassedTests(currentPassedTests);
    if (currentPassedTests.length <= 1) {
      setPasswordStrength(allStrengths[0]);
    } else if (currentPassedTests.length > 1 && currentPassedTests.length < 5) {
      setPasswordStrength(allStrengths[1]);
    } else {
      setPasswordStrength(allStrengths[2]);
    }
  }, [password]);

  return (
    <div className="w-3/4 md:p-6 p-4 rounded-md flex gap-4 items-center bg-white shadow focus-within:shadow-lg transition-shadow">
      <div className={`width-${iconSize}px`}>{passwordStrength.icon}</div>
      <div className="min-w-0 w-full overflow-hidden mr-auto">
        <input
          className="md:text-xl text-base font-medium mr-auto outline-none box-border w-full"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-2 h-1 bg-gray-300 rounded">
          <div
            className={`h-1 bg-${passwordStrength.color} w-${passedTests.length}/5 rounded transition-all`}
          />
        </div>
        <span className="truncate overflow-hidden w-full text-gray-600 text-sm">
          {failedTests[0]?.description || "A perfect password 🎉🎉🎉"}
        </span>
      </div>
      <button
        className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        type="button"
        onClick={() => setPassword(generatePassword())}
      >
        <Refresh size={iconSize} className="text-gray-500" />
      </button>
    </div>
  );
}

export default PasswordGenerator;
