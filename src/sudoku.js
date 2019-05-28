export function Game(){
  this.board = this.createBoard();
}

Game.prototype.createBoard = function()
{
  var arr = [];
  for(var i = 0; i < 9; i++){
    arr.push([0,0,0,0,0,0,0,0,0]);
  }
  return arr;
}

Game.prototype.column = function(x)
{
  var arr = [];
  for(var i = 0; i < 9; i++){
    arr.push(this.board[x][i]);
  }
  return arr;
}

Game.prototype.row = function(y) {
  var arr = [];
  for(var i = 0; i < 9; i++){
    arr.push(this.board[i][y]);
  }
  return arr;
}

Game.prototype.square = function(x, y) {
  var arr = [];
  while(x % 3 != 0) {
    x--;
  }
  while(y % 3 != 0) {
    y--;
  }
  for(var i = x; i <= x+2;i++){
      arr.push(this.board[i][y]);
      arr.push(this.board[i][y+1]);
      arr.push(this.board[i][y+2]);
  }
  return arr;
}

//exports.gameModule = Game;
