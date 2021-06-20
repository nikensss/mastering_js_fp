import { ArbitraryFunction } from "./utils";

export const alternate = (f: ArbitraryFunction, g: ArbitraryFunction): ((...args: unknown[]) => void) => {
  let [a, b] = [f, g];
  return (...args: unknown[]) => {
    a(...args);
    [a, b] = [b, a];
  };
};
