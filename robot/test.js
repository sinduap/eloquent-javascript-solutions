import { describe, expect, it } from '@jest/globals';
import {
  randomRobot,
  routeRobot,
  efficientRobot,
  goalRobot,
  compareRobots,
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
