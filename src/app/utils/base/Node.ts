import Move from './Move';
import BoardMap from './BoardMap';

export type Ptr = number;
export const Nil = -1;

export class Node {
    private parent: Ptr;
    private move: Move;
    private board: BoardMap;  // board state after move
    private children: Ptr[] = [];

    constructor(m: Move, board: BoardMap) {
        this.move = m.clone();
        this.board = board.clone();
    }

    public boardRef(): BoardMap {
        return this.board;
    }

    public isRoot(): boolean {
        return this.parent === Nil;
    }

    public isLeaf(): boolean {
        return this.children.length === 0;
    }

    public isSame(m: Move): boolean {
        return this.move.equal(m);
    }

    public addChildPtr(t: Ptr): void {
        this.children.push(t);
    }

    public getChildrenPtr(): Ptr[] {
        return this.children;
    }

    public setParentPtr(t: Ptr): void {
        this.parent = t;
    }

    public getParentPtr(): Ptr {
        return this.parent;
    }

    public removeChildPtr(t: Ptr): void {
        this.children = this.children.filter(s => s !== t);
    }

    public clone(): Node {
        const node = new Node(this.move, this.board);
        node.parent = this.parent;
        node.children = this.children.slice();
        return node;
    }

    public moveRef(): Move {
        return this.move;
    }
}
