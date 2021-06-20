import { ArbitraryFunction } from "./utils";

export const callExactly = (fn: ArbitraryFunction, n = 1): ((...args: unknown[]) => void) => {
  return (...args: unknown[]): void => {
    if (n > 0) {
      n -= 1;
      fn(...args);
    }
  };
};
