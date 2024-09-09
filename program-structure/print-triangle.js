/***********************************************************************
 Looping A Triangle
 https://eloquentjavascript.net/02_program_structure.html#i-umoXp9u0e7

 Write a loop that makes seven calls to console.log to output the
 following triangle:

 #
 ##
 ###
 ####
 #####
 ######
 #######
***********************************************************************/
export default function (n = 7, symbol = '#') {
  for (let i = 0; i < n; i++) {
    console.log(symbol.repeat(i + 1));
  }
}
