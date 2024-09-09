/***********************************************************************
 Chess Board
 https://eloquentjavascript.net/02_program_structure.html#i-umoXp9u0e7

 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

 Passing this string to console.log should show something like this:

  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
# # # #
***********************************************************************/
export default function (size = 8) {
  const contents = ' #';
  for (let i = 0; i < size; i++) {
    let line = '';
    for (let j = 0; j < size; j++) {
      const cell = contents.at((i + j) % 2);
      line += cell;
    }
    console.log(line);
  }
}
