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

Game.prototype.check = function(x,y, input){
  var row = this.row(y);
  var column = this.column(x);
  var square = this.square(x,y);
  // row[x] = -1;
  // column[y] = -1;
  // var slicedRow;
  // if(x == 0){
  //   slicedRow = row.slice(1,8);
  // }else if(x == 8){
  //   slicedRow = row.slice(0,7);
  // }else{
  //   slicedRow = row.slice(0,x).concat(row.slice(x+1));
  // }
  if(row.includes(input))
  {
    return false;
  }
  if(column.includes(input))
  {
    return false;
  }
  if(square.includes(input))
  {
    return false;
  }
return true;
}
//exports.gameModule = Game;
