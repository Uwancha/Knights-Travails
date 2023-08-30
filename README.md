

# Knight's Tour

This project is a JavaScript implementation of the Knight's Tour problem. completed as part of The Odin Project's curriculum for full-stack web development.

The Knight's Tour is a chess puzzle where the task is to find a sequence of moves for a knight piece on a chessboard such that it visits every square exactly once.

The project consists of three main components:
- **Board**: Represents the chessboard and provides functionality to mark squares and print the board.
- **Knight**: Defines the knight piece and generates possible moves for the knight.
- **knightsMoves**: Implements the algorithm to find the Knight's Tour path from a starting square to a target square.

## Usage

To run the Knight's Tour algorithm, you can execute the provided code in a JavaScript environment. The starting square and target square can be customized by modifying the `start` and `target` variables at the end of the code.

```javascript
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
```

The `knightsMoves` function takes two parameters: `start` and `target`, which represent the starting and target squares on the chessboard, respectively. It returns an array representing the path of the knight's moves from the starting square to the target square. If the target square is not reachable, it returns `null`.

## Contributing

Contributions to this project are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


