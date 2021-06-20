import { ArbitraryFunction, VoidFunction } from './utils';

export const callExactly = (fn: ArbitraryFunction, n = 1): VoidFunction => {
  return (...args: unknown[]): void => {
    if (n > 0) {
      n -= 1;
      fn(...args);
    }
  };
};
