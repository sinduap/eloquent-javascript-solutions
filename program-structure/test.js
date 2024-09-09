import { describe, it, expect, afterEach, jest } from '@jest/globals';
import { printTriangle } from '.';

const logSpy = jest.spyOn(console, 'log');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Loop Triangle', () => {
  it('Should be invoked 7 times', () => {
    printTriangle();
    expect(logSpy).toHaveBeenCalledTimes(7);
  });

  it('Should be invoked with a correct argument', () => {
    printTriangle();
    expect(logSpy).nthCalledWith(1, '#');
    expect(logSpy).nthCalledWith(2, '##');
    expect(logSpy).nthCalledWith(3, '###');
    expect(logSpy).nthCalledWith(4, '####');
    expect(logSpy).nthCalledWith(5, '#####');
    expect(logSpy).nthCalledWith(6, '######');
    expect(logSpy).nthCalledWith(7, '#######');
  });
});
