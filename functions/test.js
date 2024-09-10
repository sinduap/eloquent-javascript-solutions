import { describe, it, expect } from '@jest/globals';
import { min } from '.';

describe('Minimum', () => {
  it('Should takes two arguments and returns their minimum', () => {
    const result1 = min(3, 7);
    expect(result1).toBe(3);
    const result2 = min(-10, -21);
    expect(result2).toBe(-21);
  });
});
