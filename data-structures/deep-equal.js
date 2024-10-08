/***********************************************************************
Deep Comparison
https://eloquentjavascript.net/04_data.html#i-IJBU+aXOIC

Write a function deepEqual that takes two values and returns true only
if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a
recursive call to deepEqual.

To find out whether values should be compared directly (using the ===
operator for that) or have their properties compared, you can use the
typeof operator. If it produces "object" for both values, you should do
a deep comparison. But you have to take one silly exception into
account: because of a historical accident, typeof null also produces
"object".
***********************************************************************/
export default function deepEqual(value1, value2) {
  const isPrimitive = !(value1 instanceof Object);
  if (isPrimitive) return Object.is(value1, value2) || value1 === value2;

  const value1Keys = Object.keys(value1),
    value2Keys = Object.keys(value2);

  if (value1Keys.length !== value2Keys.length) return false;

  if (Array.isArray(value1)) {
    return (
      Array.isArray(value2) &&
      value1.every((val, i) => deepEqual(val, value2[i]))
    );
  }

  return (
    Object.getPrototypeOf(value1) === Object.getPrototypeOf(value2) &&
    Object.entries(value1).every(([key, val]) => deepEqual(val, value2[key]))
  );
}
