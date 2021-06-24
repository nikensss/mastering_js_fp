export const fib = (n: number, a = 0, b = 1): number => {
  console.log({ n, a, b });
  return n === 0 ? a : fib(n - 1, b, a + b);
};
