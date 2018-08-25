import BoardPlay from './moves/BoardPlay';
import Point from './Point';

export default class BoardMap {
    private board: Array<Array<BoardPlay | null>>;
    private last: Point | null;
    constructor(size: number) {
        this.board = Array(size).fill(0).map(() => Array(size).fill(null));
        this.last = null;
    }

    public clone(): BoardMap {
        const size = this.board.length;
        const boardMap = new BoardMap(size);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (this.board[i][j] !== null) {
                    boardMap.board[i][j] = this.board[i][j].clone();
                }
            }
        }
        if (this.last) {
            boardMap.last = this.last.clone();
        }
        return boardMap;
    }

    public isSame(b: BoardMap): boolean {
        const size = this.board.length;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (this.board[i][j] === null && b.board[i][j] !== null) {
                    return false;
                }
                if (this.board[i][j] !== null && b.board[i][j] === null) {
                    return false;
                }
                if (this.board[i][j] !== null && b.board[i][j] !== null) {
                    if (this.board[i][j].player !== b.board[i][j].player) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    at(p: Point): BoardPlay | null {
        return this.board[p.x][p.y];
    }

    isLast(p: Point): boolean {
        return this.last.equal(p);
    }

    put(m: BoardPlay): void {
        this.board[m.position.x][m.position.y] = m.clone();
        this.last = m.position.clone();
    }

    removeDead(p: Point): void {
        this.board[p.x][p.y] = null;
    }

    removeLast(m: BoardPlay, last: Point | null): void {
        this.board[m.position.x][m.position.y] = null;
        this.last = null;
        if (last !== null) {
            this.last = last.clone();
        }
    }
}
