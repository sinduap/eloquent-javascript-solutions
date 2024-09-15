/***********************************************************************
A List
https://eloquentjavascript.net/04_data.html#i-nSTX34CM1M

Write a function arrayToList that builds up a list structure like the
one shown when given [1, 2, 3] as argument. Also write a listToArray
function that produces an array from a list. Add the helper functions
prepend, which takes an element and a list and creates a new list that
adds the element to the front of the input list, and nth, which takes a
list and a number and returns the element at the given position in the
list (with zero referring to the first element) or undefined when there
is no such element.
***********************************************************************/
export function fromArray(array) {
  const [value, ...rest] = array;
  if (rest.length === 0) return { value, next: null };
  return { value, next: fromArray(rest) };
}

export function toArray(list) {
  const { value, next } = list;
  if (next) return [value, ...toArray(next)];
  return [value];
}

export const prepend = (value, list = null) => ({ value, next: list });

export function nth(list, n) {
  if (n === 0) return list?.value;
  return nth(list.next, n - 1);
}

export default { fromArray, toArray, prepend, nth };
