/***********************************************************************
Range
https://eloquentjavascript.net/04_data.html#i-8ZspxiCEC/

Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to and
including end.

Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the example program and see whether it
does indeed return 55.

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used when building the
array. If no step is given, the elements should go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9]. Make sure this also works with negative
step values so that range(5, 2, -1) produces [5, 4, 3, 2].
***********************************************************************/
export default function (start, end, step = 1) {
  const diff = step > 0 ? end - start : start - end;
  const length = Math.ceil((diff + 1) / Math.abs(step));
  return Array.from({ length }, (_, i) => start + step * i);
}

export function sum(array) {
  if (!array.length) return 0;
  const [curr, ...rest] = array;
  return curr + sum(rest);
}
