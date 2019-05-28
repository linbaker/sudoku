import { Game } from './../src/sudoku.js';

describe('Game', function() {
  console.log("hey");

  it('should output an array of nine zeroes' , function() {
    var game = new Game();
    console.log(game.row(7));
    var arr = game.row(7);
    expect(arr[8]).toEqual(0);
    expect(arr.length)).toEqual(9);
    // expect(romanIn(1)).not.toEqual("X");
  });


});
