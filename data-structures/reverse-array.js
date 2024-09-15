/***********************************************************************
Reversing an Array
https://eloquentjavascript.net/04_data.html#i-6xTmjj4Rf5

Arrays have a reverse method that changes the array by inverting the
order in which its elements appear. For this exercise, write two
functions, reverseArray and reverseArrayInPlace. The first, reverseArray
, should take an array as its argument and produce a new array that has
the same elements in the inverse order. The second, reverseArrayInPlace,
should do what the reverse method does: modify the array given as its
argument by reversing its elements. Neither may use the standard reverse
method.
***********************************************************************/
export default function (array) {
  const newArray = [];
  for (const element of array) {
    newArray.unshift(element);
  }
  return newArray;
}

export function reverseArrayInPlace(array) {
  const copyArray = Array.from(array);
  for (const element of copyArray) {
    array.pop();
    array.unshift(element);
  }
}
