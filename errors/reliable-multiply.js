export class MultiplicateUnitFailure extends Error {}
/***********************************************************************
Retry

Say you have a function primitiveMultiply that in 20 percent of cases
multiplies two numbers and in the other 80 percent of cases raises an
exception of type MultiplicatorUnitFailure. Write a function that wraps
this clunky function and just keeps trying until a call succeeds, after
which it returns the result.

Make sure you handle only the exceptions you are trying to handle.
***********************************************************************/
export function primitiveMultiply(a, b) {
  if (Math.random() <= 0.2) {
    throw new MultiplicateUnitFailure('Klunk');
  }
  return a * b;
}

export default function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch {
    return reliableMultiply(a, b);
  }
}
