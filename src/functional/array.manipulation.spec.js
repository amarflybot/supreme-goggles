import { maxValue } from './array.manipulation';

describe('MaxValue test', () => {
  it('should return max value from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(maxValue(arr)).toBe(5);
  });

  it('should return 0 value from a empty array', () => {
    const arr = [];
    expect(maxValue(arr)).toBe(0);
  });
});

describe('Sum test', () => {
  it('should return 15 an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(maxValue(arr)).toBe(5);
  });

  it('should return 0 value from a empty array', () => {
    const arr = [];
    expect(maxValue(arr)).toBe(0);
  });
});
