import { describe, it, expect, jest } from '@jest/globals';
import { flatten, loop, every } from '.';

describe('Flattening', () => {
  const arrays = [[1, 2, 3], [4, 5], [6]];

  it('Should flatten an array of arrays into a single array that has all the elements of the original arrays', () => {
    const result = flatten(arrays);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should implemented using the Array#reduce method in combination with the Array#concat method', () => {
    const arrayReduceSpy = jest.spyOn(Array.prototype, 'reduce');
    const arrayConcatSpy = jest.spyOn(Array.prototype, 'concat');

    flatten(arrays);

    expect(arrayReduceSpy).toBeCalled();
    expect(arrayConcatSpy).toBeCalled();

    jest.clearAllMocks();
  });
});

describe('Your Own Loop', () => {
  it('Should take a value, a test function, an update function, and a body function. Each iteration', () => {
    const n = 3;
    let condition = n => n > 0;
    let update = n => n - 1;
    let body = console.log;

    condition = jest.fn(condition);
    update = jest.fn(update);
    body = jest.fn(body);

    loop(n, condition, update, body);

    expect(condition).toBeCalledTimes(n + 1); // 4th -> false
    expect(update).toBeCalledTimes(n);
    expect(body).toBeCalledTimes(n);
  });
});

describe('Everything', () => {
  describe('Use loop', () => {
    it('Should returns true when the given function returns true for every element in the array', () => {
      let predicate = n => n < 10;
      const arr1 = [1, 3, 5];
      const arr2 = [2, 4, 16];
      const arr3 = [];

      predicate = jest.fn(predicate);
      const result1 = every.useLoop(arr1, predicate);
      const result2 = every.useLoop(arr2, predicate);
      const result3 = every.useLoop(arr3, predicate);
      expect(result1).toBe(true);
      expect(result2).toBe(false);
      expect(result3).toBe(true);
    });

    it('Should not use the standard Array#every method', () => {
      const predicate = n => n < 10;
      const arr = [1, 3, 5];
      const everySpy = jest.fn(Array.prototype.every);
      every.useLoop(arr, predicate);
      expect(everySpy).not.toHaveBeenCalled();
    });
  });

  describe('Use some', () => {
    it('Should returns true when the given function returns true for every element in the array', () => {
      let predicate = n => n < 10;
      const arr1 = [1, 3, 5];
      const arr2 = [2, 4, 16];
      const arr3 = [];

      predicate = jest.fn(predicate);
      const result1 = every.useSome(arr1, predicate);
      const result2 = every.useSome(arr2, predicate);
      const result3 = every.useSome(arr3, predicate);
      expect(result1).toBe(true);
      expect(result2).toBe(false);
      expect(result3).toBe(true);
    });

    it('Should not use the standard Array#every method', () => {
      const predicate = n => n < 10;
      const arr = [1, 3, 5];
      const everySpy = jest.fn(Array.prototype.every);
      every.useLoop(arr, predicate);
      expect(everySpy).not.toHaveBeenCalled();
    });
  });
});
