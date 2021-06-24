export const shuffle = <T>(arr: T[]): T[] => {
  const { length } = arr;
  for (let i = 0; i < length - 1; i += 1) {
    const r = Math.floor(Math.random() * (length - i));
    [arr[i], arr[i + r]] = [arr[i + r], arr[i]];
  }

  return arr;
};
