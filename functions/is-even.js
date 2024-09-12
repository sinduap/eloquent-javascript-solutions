/***********************************************************************
Recursion
https://eloquentjavascript.net/03_functions.html#i-jxl1p970Fy

We’ve seen that we can use % (the remainder operator) to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or
odd:
    * Zero is even.
    * One is odd.
    * For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
***********************************************************************/
export default function isEven(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError('Must be an integer');
  }
  if (number < 0) return isEven(Math.abs(number));
  if (number === 0) return true;
  if (number === 1) return false;
  return isEven(number - 2);
}
