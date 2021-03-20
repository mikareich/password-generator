import React, { useEffect, useState } from "react";
import {
  Refresh,
  ShieldCheckOutline,
  ShieldExclamationOutline,
} from "heroicons-react";
import { passwordRules, generatePassword, testPassword } from "./utils";
import { IStrength, IRule } from "./types";

const allRules = Object.values(passwordRules);

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
    <button type="button" className="underline" onClick={copyPassword}>
      Want to copy password?
    </button>
  );

  useEffect(() => {
    const currentPassedTests = testPassword(password);
    const failedTests = allRules.filter(
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
    <div className="w-3/4 sm:px-6 sm:py-3 p-4 rounded-md flex gap-4 items-center bg-white shadow-md focus-within:shadow-lg transition-shadow max-w-2xl">
      <div className="w-24px">{passwordStrength.icon}</div>
      <div className="mr-auto w-full">
        <input
          autoFocus
          className="sm:text-xl text-sm font-medium w-full"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-2 h-1 bg-gray-300 rounded">
          <div
            className={`h-1 ${passwordStrength.color} ${"w-"
              .concat(passedTests.length.toString())
              .concat("/5")} rounded transition-all`}
          />
        </div>
        <div className="truncate text-gray-600 text-sm w-full">
          {helperText}
        </div>
      </div>
      <button
        className="bg-gray-200 hover:bg-gray-300 rounded p-2 transition-colors"
        type="button"
        onClick={() => setPassword(generatePassword())}
        aria-label="Refresh"
      >
        <Refresh className="text-gray-500" />
      </button>
    </div>
  );
}

export default PasswordGenerator;
