import { ArbitraryFunction } from "./utils"

export const once = (fn: ArbitraryFunction) => {
  let done = false
  return (...args: unknown[]) => {
    if (!done) {
      done = true
      fn(...args)
    }
  }
}
