import { describe, expect, it } from '@jest/globals';
import {
  randomRobot,
  routeRobot,
  efficientRobot,
  goalRobot,
  compareRobots,
  PersistentGroup,
} from '.';

describe('Measuring a Robot', () => {
  it('Should output the average number of steps each robot took per task', () => {
    const result = compareRobots([
      randomRobot,
      routeRobot,
      goalRobot,
      efficientRobot,
    ]);
    expect(result[0]).toEqual(expect.any(Number));
    expect(result[1]).toEqual(expect.any(Number));
    expect(result[2]).toEqual(expect.any(Number));
    expect(result[3]).toEqual(expect.any(Number));
  });
});

describe('Efficient Robot', () => {
  it('Should be more efficient than the Goal Robot', () => {
    const [result1, result2] = compareRobots([goalRobot, efficientRobot]);
    expect(result2 < result1).toBe(true);
  });
});

describe('Persistent Group', () => {
  it('Should has add, delete, and has methods', () => {
    const result = PersistentGroup.empty;
    expect(result).toHaveProperty('add');
    expect(result).toHaveProperty('delete');
    expect(result).toHaveProperty('has');
  });

  describe('Add method', () => {
    it('Should return a new PersistentGroup instance with the given member added and leave the old one unchanged', () => {
      const result1 = PersistentGroup.empty.add('a');
      const result2 = result1.add('b');
      expect(result2).toBeInstanceOf(PersistentGroup);
      expect(result2.has('b')).toBe(true);
      expect(result1.has('b')).toBe(false);
    });
  });

  describe('Delete method', () => {
    it('Should return a new PersistentGroup instance with the given member deleted and leave the old one unchanged', () => {
      const result1 = PersistentGroup.empty.add('a');
      const result2 = result1.add('b');
      const result3 = result2.delete('a');
      expect(result3.has('b')).toBe(true);
      expect(result3.has('a')).toBe(false);
    });
  });

  it('Should work for values of any type, not just strings', () => {
    const car = {
      model: 'Nissan',
      price: 4000,
      colors: ['Blue', 'Black', 'White'],
      available: false,
    };
    const persistentGroup = PersistentGroup.empty.add(car);
    const result = persistentGroup.has({
      model: 'Nissan',
      price: 4000,
      colors: ['Blue', 'Black', 'White'],
      available: false,
    });
    expect(result).toBe(true);
  });
});
