import { describe, it, expect, jest } from '@jest/globals';
import { flatten, loop } from '.';

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
