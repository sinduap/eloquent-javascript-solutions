import { describe, it, expect, afterEach, jest } from '@jest/globals';
import { range, sum } from '.';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Range', () => {
  describe('range fn', () => {
    it('Should returns an array containing all the numbers from start up to and including end.', () => {
      const result1 = range(1, 10);
      expect(result1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      const result2 = range(1, 10, 3);
      expect(result2).toEqual([1, 4, 7, 10]);
    });

    it('Should also works with negative step values', () => {
      const result = range(5, 2, -1);
      expect(result).toEqual([5, 4, 3, 2]);
    });
  });

  describe('sum fn', () => {
    it('Should takes an array of numbers and returns the sum of these numbers', () => {
      const result = sum(range(1, 10));
      expect(result).toBe(55);
    });
  });
});
