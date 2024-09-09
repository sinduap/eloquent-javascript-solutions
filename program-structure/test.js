import { describe, it, expect, afterEach, jest } from '@jest/globals';
import { printTriangle, printFizzBuzz } from '.';

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

describe('Fizz Buzz', () => {
  it('Should be invoked 100 times', () => {
    printFizzBuzz();
    expect(logSpy).toHaveBeenCalledTimes(100);
  });

  it('Should be invoked with a correct argument', () => {
    printFizzBuzz();
    expect(logSpy).nthCalledWith(1, 1);
    expect(logSpy).nthCalledWith(11, 11);
    expect(logSpy).nthCalledWith(21, 'Fizz');
    expect(logSpy).nthCalledWith(50, 'Buzz');
    expect(logSpy).nthCalledWith(75, 'FizzBuzz');
    expect(logSpy).nthCalledWith(98, 98);
    expect(logSpy).nthCalledWith(100, 'Buzz');
  });
});
