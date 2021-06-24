import chai from 'chai';
import spies from 'chai-spies';
import { fib } from './fib';
import { shuffle } from './shuffle';

chai.use(spies);

const { expect } = chai;

describe('fib', () => {
  it('should do fibonacci', () => {
    const r = fib(10);
    expect(r).to.equal(1548008755920);
  });
});

describe.only('shuffle', () => {
  it('should shuffle the array', () => {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const b = [...a];
    shuffle(b);
    const bStringifiedSorted = JSON.stringify(b.sort((a, b) => a - b));
    expect(b.length).to.equal(a.length);
    expect(bStringifiedSorted).to.equal(JSON.stringify(a));
  });
});
