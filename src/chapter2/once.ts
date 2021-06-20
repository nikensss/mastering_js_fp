import { ArbitraryFunction } from './utils';

export const once = (fn: ArbitraryFunction): VoidFunction => {
  let done = false;
  return (...args: unknown[]) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};
