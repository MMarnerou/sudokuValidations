const goodSudoku1 = [
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],
  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],
  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
];

const checkRows = (sudokouBoard) => {
  let result = true;
  for (let row of sudokouBoard) {
    result = row.every((number) => {
      return number === parseInt(number);
    });
    if (!result) break;
  }
  return result;
};

const checkColumns = (sudokouBoard, n) => {
  let result = true;
  sudokouBoard.forEach((row) => {
    for (let i = 0; i < n; i++) {
      result = row[i] === parseInt(row[i]);
    }
  });
  return result;
};

const checkSquares = (sudokouBoard, n) => {
  let result = true;
  let squareRoot = Math.sqrt(n);
  for (let i = 0; i < n; i += squareRoot) {
    for (let j = 0; j < n; j += squareRoot) {
      // Box validation
      for (let k = i; k < i + squareRoot; k++) {
        // k row
        for (let l = j; l < j + squareRoot; l++) {
          //l column
          let num = sudokouBoard[k][l];
          result = num === parseInt(num);
        }
      }
    }
  }
  return result;
};

const assert = function (n, sudokouBoard) {
  return (
    checkRows(sudokouBoard) &&
    checkColumns(sudokouBoard, n) &&
    checkSquares(sudokouBoard, n) &&
    n > 0 &&
    Math.sqrt(n) === parseInt(Math.sqrt(n))
  );
};

console.log(assert(goodSudoku1[0].length, goodSudoku1));