/***********************************************************************
Flattening
https://eloquentjavascript.net/05_higher_order.html#i-aIOczlLyX1

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the
original arrays.
***********************************************************************/
export default function flatten(arr) {
  return arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
}
