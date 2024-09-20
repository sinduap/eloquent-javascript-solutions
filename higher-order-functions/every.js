/************************************************************************
Everything
https://eloquentjavascript.net/05_higher_order.html#i-SmbRSAd5GA

Arrays also have an every method analogous to the some method. This
method returns true when the given function returns true for every
element in the array. In a way, some is a version of the || operator
that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate
function as parameters. Write two versions, one using a loop and one
using the some method.
************************************************************************/
export function useLoop(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr.at(i), i, arr)) return false;
  }
  return true;
}

export function useSome(arr, predicate) {
  const notPredicate = not(predicate);
  return !arr.some(notPredicate);
}

// helper
const not =
  fn =>
  (...args) =>
    !fn(...args);
