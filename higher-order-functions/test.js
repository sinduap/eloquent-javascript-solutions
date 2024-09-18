import { describe, it, expect, jest } from '@jest/globals';
import { flatten } from '.';

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
