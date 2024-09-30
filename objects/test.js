import { describe, expect, it } from '@jest/globals';
import { Vector } from '.';

describe('A Vector Type', () => {
  describe('constructor fn', () => {
    it('Should takes x and y parameters (numbers), that it saves to properties of the same name', () => {
      const result = new Vector(1, 2);
      const { x, y } = result;
      expect(result).toHaveProperty('x');
      expect(result).toHaveProperty('y');
      expect(x).toBe(1);
      expect(y).toBe(2);
    });
  });

  describe('plus method', () => {
    it('Should take another vector as a parameter and return a new vector that has the sum of the two vectors', () => {
      const vector1 = new Vector(1, 2);
      const vector2 = new Vector(2, 3);
      const result = vector1.plus(vector2);
      expect(result).toEqual(new Vector(3, 5));
      expect(result).toBeInstanceOf(Vector);
    });
  });

  describe('minus method', () => {
    it('Should take another vector as a parameter and return a new vector that has the difference of the two vectors', () => {
      const vector1 = new Vector(1, 2);
      const vector2 = new Vector(2, 3);
      const result = vector1.minus(vector2);
      expect(result).toEqual(new Vector(-1, -1));
      expect(result).toBeInstanceOf(Vector);
    });
  });

  describe('length', () => {
    it('Should computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0)', () => {
      const result = new Vector(3, 4).length;
      expect(result).toBe(5);
    });
  });
});
