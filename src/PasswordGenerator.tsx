import React, { useEffect, useState } from "react";
import {
  Refresh,
  ShieldCheckOutline,
  ShieldExclamationOutline,
} from "heroicons-react";
import { passwordRules, generatePassword, testPassword } from "./utils";
import { IStrength, IRule } from "./types";

const allStrengths: IStrength[] = [
  {
    color: "bg-red-500",
    icon: (
      <ShieldExclamationOutline className="text-red-500 transition-colors" />
    ),
  },
  {
    color: "bg-yellow-500",
    icon: (
      <ShieldExclamationOutline className="text-yellow-500 transition-colors" />
    ),
  },
  {
    color: "bg-green-500",
    icon: <ShieldCheckOutline className="text-green-500 transition-colors" />,
  },
];

function PasswordGenerator() {
  const [password, setPassword] = useState(generatePassword());
  const [passwordStrength, setPasswordStrength] = useState(allStrengths[0]);
  const [passedTests, setPassedTests] = useState<IRule[]>([]);
  const [helperText, setHelperText] = useState<string | React.ReactNode>("");

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setHelperText("Password copied 👌");
  };

  const CopyButton = () => (
    <button
      type="button"
      className="underline truncate max-w-full text-left"
      onClick={copyPassword}
    >
      Want to copy password?
    </button>
  );

  useEffect(() => {
    const currentPassedTests = testPassword(password);
    const failedTests = passwordRules.filter(
      (rule) => !currentPassedTests.includes(rule)
    );
    setHelperText(failedTests[0]?.description || <CopyButton />);

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
    <div className="flex items-center gap-4 w-full m-2 sm:w-3/4 sm:px-6 sm:py-3 p-4 rounded-md  bg-white dark:bg-gray-600 shadow-md focus-within:shadow-lg transition-shadow max-w-2xl">
      <div className="w-24px">{passwordStrength.icon}</div>
      <div className="w-full overflow-hidden">
        <input
          autoFocus
          className="sm:text-xl text-sm font-medium box-border w-full bg-transparent dark:text-gray-200"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-2 h-1 bg-gray-300 rounded">
          <div
            className={`h-1 ${passwordStrength.color} rounded transition-all`}
            style={{ width: `${(passedTests.length / 5 || 1) * 100}%` }}
          />
        </div>
        <div className="truncate text-gray-600 dark:text-gray-300 text-sm w-full">
          {helperText}
        </div>
      </div>
      <button
        className="bg-gray-200 hover:bg-gray-300 rounded p-2 transition-colors dark:bg-gray-700 dark:hover:bg-gray-500 "
        type="button"
        onClick={() => setPassword(generatePassword())}
        aria-label="Refresh"
      >
        <Refresh className="text-gray-500 dark:text-gray-300" />
      </button>
    </div>
  );
}

export default PasswordGenerator;
