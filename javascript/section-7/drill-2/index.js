class Chessboard {
    constructor() {
        this.board = [
            ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C'],
            ['\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659'],
            ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656']
        ];
    }

    printBoard() {
        for (let r of this.board) {
            console.log(r.join(' | '));
        }
    }

    move(currRow, currColumn, destRow, destColumn) {
        const src = this.board[currRow][currColumn];
        const dest = this.board[destRow][destColumn];

        if (!this.isOpposite(src, dest)) {
            console.log('Invalid move: Pieces are not of opposite colors.');
            return;
        } else {
            this.kill(destRow, destColumn);
        }
        console.log('Move successful');
        this.board[destRow][destColumn] = src;
        this.board[currRow][currColumn] = ' ';
    }

    kill(destRow, destColumn) {
        this.board[destRow][destColumn] = ' ';
    }

    isOpposite(src, dest) {
        const isBlack = piece => piece >= '\u265A' && piece <= '\u265F';
        const isWhite = piece => piece >= '\u2654' && piece <= '\u2659';
        return (isBlack(src) && isWhite(dest)) || (isWhite(src) && isBlack(dest));
    }
}

const chessboard = new Chessboard();
chessboard.printBoard();

chessboard.move(6, 0, 0, 6);
chessboard.printBoard();
