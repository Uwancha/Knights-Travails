
function Board(size) {
    return {
        size: size,
        board: Array.from(Array(size), () => Array(size).fill('_')),
    
  
        markSquare(row, col, mark) {
            this.board[row][col] = mark;
        },
  
        print() {
            for (let row = 0; row < this.size; row++) {
            console.log(this.board[row].join(' '));
            }
        }
  }
}


function Knight() {
    return {
        moves: [
            { row: -2, col: -1 },
            { row: -2, col: 1 },
            { row: -1, col: -2 },
            { row: -1, col: 2 },
            { row: 1, col: -2 },
            { row: 1, col: 2 },
            { row: 2, col: -1 },
            { row: 2, col: 1 }
        ],

        generateMoves(row, col) {
            const possibleMoves = [];
            for (const move of this.moves) {
              const newRow = row + move.row;
              const newCol = col + move.col;
              possibleMoves.push({ row: newRow, col: newCol });
            }
            return possibleMoves;
        }
    };
}

function knightsMoves (start, target) {
    const knight = Knight();
    const queue = [];
    const visited = new Set();
    const board = Board(8);

    queue.push({ square: start, path: [start] });
    visited.add(start.toString());

    while (queue.length > 0) {
        const { square, path } = queue.shift();
        const [row, col] = square;


        if (row === target[0] && col === target[1]) {
            return path;
        };

        const moves = knight.generateMoves(row, col);

        for (const move of moves) {
            const newRow = move.row;
            const newCol = move.col;

            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                const newSquare = [newRow, newCol];
                const newPath = [...path, newSquare];

                if (!visited.has(newSquare.toString())) {
                    visited.add(newSquare.toString());
                    queue.push({ square: newSquare, path: newPath });
                    board.markSquare(newRow, newCol, 'X');
                };
            };
        };
    };

    return null;
};

const start = [3, 3];
const target = [4, 3];
const path = knightsMoves(start, target);

if (path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  const board = Board(8);
  for (const [row, col] of path) {
    board.markSquare(row, col, 'X');
  }
  board.print();
} else {
  console.log("The target square is not reachable.");
}

