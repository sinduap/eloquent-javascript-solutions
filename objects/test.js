import { describe, expect, it, jest } from '@jest/globals';
import { Vector, Group } from '.';

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

describe('Groups', () => {
  describe('constructor fn', () => {
    it('Should creates an empty group', () => {
      const result = new Group().size;
      expect(result).toBe(0);
    });
  });

  describe('add method', () => {
    it("Should adds a value to the group (but only if it isn't already a member)", () => {
      const group = Group.from([10, 20]);
      group.add(20).add(30);
      const result1 = group.has(20);
      const result2 = group.has(30);
      expect(result1).toBe(true);
      expect(result2).toBe(true);
    });
  });

  describe('delete method', () => {
    it('Should removes its argument from the group (if it was a member)', () => {
      const group = Group.from([10, 20]);
      group.delete(20).delete(30);
      const result1 = group.has(20);
      const result2 = group.has(30);
      expect(result1).toBe(false);
      expect(result2).toBe(false);
    });
  });

  describe('has method', () => {
    it('Should returns a Boolean value indicating whether its argument is a member of the group', () => {
      const group = Group.from([10, 20]);
      const result1 = group.has(10);
      const result2 = group.has(30);
      expect(result1).toBe(true);
      expect(result2).toBe(false);
    });
  });

  describe('from static method', () => {
    it('Should takes an iterable object as its argument and creates a group that contains all the values produced by iterating over it', () => {
      const result1 = Group.from([10, 20]);
      expect(result1).toBeInstanceOf(Group);
      const result2 = result1.has(10);
      const result3 = result1.has(20);
      expect(result2).toBe(true);
      expect(result3).toBe(true);
    });
  });
});

describe('Iterable Groups', () => {
  it('Should be iterable', () => {
    console.log = jest.fn(console.log);
    for (const value of Group.from(['a', 'b', 'c'])) {
      console.log(value);
    }
    expect(console.log).toBeCalledTimes(3);
  });
});
