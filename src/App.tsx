import React from "react";
import PasswordGenerator from "./PasswordGenerator";
import { passwordRules } from "./utils";
import { ReactComponent as UndrawImage } from "./undraw_image.svg";
import { ReactComponent as GithubIcon } from "./github_icon.svg";

function App() {
  return (
    <>
      <a
        href="http://github.com/mikareich/"
        className="absolute right-6 top-6 flex gap-2"
      >
        <GithubIcon width={20} />
        Mika Reich
      </a>
      <div className="w-full bg-white mt-48 sm:p-12 sm:pt-24 p-6 pt-20 relative ">
        <div className="absolute w-full top-0 left-0 transform -translate-y-2/4 flex justify-center">
          <PasswordGenerator />
        </div>
        <article className="prose w-2/3">
          <h2>Password Generator</h2>
          <p className="text-gray-500">
            Check or create a secure password and surf safely through any
            network. Pay attention to the following rules:
          </p>
          <ul>
            {passwordRules.map((rule) => (
              <li key={rule.description}>{rule.description}</li>
            ))}
          </ul>
        </article>
        <UndrawImage className="hidden lg:block absolute  h-96 w-1/3 bottom-6 right-6" />
      </div>
    </>
  );
}

export default App;
