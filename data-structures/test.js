import { describe, it, expect, afterEach, jest } from '@jest/globals';
import { range, sum, reverseArray, reverseArrayInPlace, List } from '.';

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

describe('Reversing an Array', () => {
  const arrayReverseSpy = jest.spyOn(Array.prototype, 'reverse');

  describe('reverseArray fn', () => {
    it('Should take an array as its argument and produce a new array that has the same elements in the inverse order', () => {
      const array = ['A', 'B', 'C'];
      const result = reverseArray(array);
      expect(result).toEqual(['C', 'B', 'A']);
      expect(result).not.toBe(array);
    });

    it('Should not use the standard Array#reverse method', () => {
      expect(arrayReverseSpy).not.toHaveBeenCalled();
    });
  });

  describe('reverseArrayInPlace fn', () => {
    it('Should modify the array given as its argument by reversing its elements', () => {
      const array = [1, 2, 3, 4, 5];
      reverseArrayInPlace(array);
      expect(array).toEqual([5, 4, 3, 2, 1]);
    });

    it('Should not use the standard Array#reverse method', () => {
      expect(arrayReverseSpy).not.toHaveBeenCalled();
    });
  });
});

describe('A List', () => {
  describe('List.fromArray fn', () => {
    it('Should take an array as its argument return a list', () => {
      const array = [1, 2, 3];
      const list = {
        value: 1,
        next: { value: 2, next: { value: 3, next: null } },
      };

      const result = List.fromArray(array);
      expect(result).toEqual(list);
    });
  });

  describe('List.toArray fn', () => {
    it('Should take a list as its argument return an array', () => {
      const list = {
        value: 10,
        next: { value: 20, next: { value: 30, next: null } },
      };

      const result = List.toArray(list);
      expect(result).toEqual([10, 20, 30]);
    });
  });

  describe('List.prepend fn', () => {
    it('Should takes an element and a list and creates a new list that adds the element to the front of the input list', () => {
      const result = List.prepend(10, List.prepend(20, List.prepend(30)));
      expect(result).toEqual({
        value: 10,
        next: { value: 20, next: { value: 30, next: null } },
      });
    });
  });

  describe('List.nth fn', () => {
    it('Should takes a list and a number and returns the element at the given position in the list', () => {
      const list = {
        value: 10,
        next: { value: 20, next: { value: 30, next: null } },
      };
      const result1 = List.nth(list, 0);
      const result2 = List.nth(list, 1);
      const result3 = List.nth(list, 2);
      expect(result1).toBe(10);
      expect(result2).toBe(20);
      expect(result3).toBe(30);
    });
  });
});
