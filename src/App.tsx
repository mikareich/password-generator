import React from "react";
import PasswordGenerator from "./PasswordGenerator";
import { passwordRules } from "./utils";

function App() {
  return (
    <div className="w-full bg-white mt-48 sm:p-12 sm:pt-24 p-6 pt-20 relative">
      <div className="absolute w-full top-0 left-0 transform -translate-y-2/4 flex justify-center">
        <PasswordGenerator />
      </div>
      <article className="prose">
        <h2>Password Generator</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius
          numquam.
        </p>
        <ul>
          {passwordRules.map((rule) => (
            <li>{rule.description}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default App;
