// let board = document.getElementById("cg-board");

let board = document.querySelector("cg-container");
for (var a = [], i = 0; i < 64; ++i) a[i] = i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

const field = shuffle(a);

const fieldSize = board.clientHeight / 8;

const createCell = (x, y, inhalt) => {
  var cell = document.createElement("div");
  cell.innerHTML = inhalt;
  cell.style.border = "0px solid blue";
  cell.style.position = "absolute";
  cell.style.height = fieldSize + "px";
  cell.style.width = fieldSize + "px";
  cell.style.top = x * fieldSize + "px";
  cell.style.left = y * fieldSize + 5 + "px";
  cell.style.fontSize = "20px";

  return cell;
};

var new_array = field.map((item, key) => {
  board.appendChild(createCell(Math.floor(key / 8), key % 8, item));
});
