import { describe, it, expect } from '@jest/globals';
import { min, isEven } from '.';

describe('Minimum', () => {
  it('Should takes two arguments and returns their minimum', () => {
    const result1 = min(3, 7);
    expect(result1).toBe(3);
    const result2 = min(-10, -21);
    expect(result2).toBe(-21);
  });
});

describe('Recursion', () => {
  it('Should throw a TypeError if the argument is not an integer', () => {
    const throwError = () => isEven(1.2);
    expect(throwError).toThrow(TypeError);
  });

  it('Should return the correct Boolean corresponding to the given argument', () => {
    const result1 = isEven(50);
    expect(result1).toBe(true);
    expect(result1).toEqual(expect.any(Boolean));
    const result2 = isEven(75);
    expect(result2).toBe(false);
    expect(result2).toEqual(expect.any(Boolean));
    const result3 = isEven(-8);
    expect(result3).toBe(true);
    expect(result3).toEqual(expect.any(Boolean));
  });
});
