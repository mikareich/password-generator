import React from "react";

/**
 * Describes strength of a password
 */
interface IStrength {
  color: string;
  icon: React.ReactNode;
}

/**
 * Describes how a rule is structured
 */
interface IRule {
  description: string;
  // eslint-disable-next-line no-unused-vars
  test: (password: string) => boolean;
  range: string[] | null;
}

export type { IStrength, IRule };
