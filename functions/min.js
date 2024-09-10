/***********************************************************************
Minimum
https://eloquentjavascript.net/03_functions.html#h-TcUD2vzyMe

The previous chapter introduced the standard function Math.min that
returns its smallest argument. We can write a function like that
ourselves now. Define the function min that takes two arguments and
returns their minimum.
***********************************************************************/
export default function (...numbers) {
  return numbers.sort((a, b) => a - b).at(0);
}
