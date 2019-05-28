import { Game } from './../src/sudoku.js';

describe('Game', function() {
  console.log("hey");

  it('should output an array of nine zeroes' , function() {
    var game = new Game();
    console.log(game.row(7));
    var arr = game.row(7);
    expect(arr[8]).toEqual(0);
    expect(arr.length).toEqual(9);
    // expect(romanIn(1)).not.toEqual("X");
  });

  it('should return true for no match', function() {
    var game = new Game();
    game.board[4][7] = 7;
    expect(game.check(3,7,6)).toEqual(true);
    expect(game.check(3,7,7)).toEqual(false);
    expect(game.check(4,8,7)).toEqual(false);
    expect(game.check(3,6,7)).toEqual(false);
  });


});
