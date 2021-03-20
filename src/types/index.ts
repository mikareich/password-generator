import React from "react";

interface IStrength {
  description: string;
  color: string;
  icon: React.ReactNode;
}

interface IRule {
  description: string;
  // eslint-disable-next-line no-unused-vars
  test: (password: string) => boolean;
  range: string[] | null;
}

export type { IStrength, IRule };
