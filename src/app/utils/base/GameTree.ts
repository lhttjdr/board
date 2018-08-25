import { Node, Ptr, Nil } from './Node';
import Ready from './moves/Ready';
import BoardMap from './BoardMap';
import Move from './Move';
import BoardPlay from './moves/BoardPlay';

export default class GameTree {
    private buff: Node[];
    private last: Ptr;

    constructor(size: number);
    // tslint:disable-next-line:unified-signatures
    constructor(tree: GameTree);
    constructor(sizeOrTree: number | GameTree) {
        if (typeof sizeOrTree === 'number') {
            const size = sizeOrTree;
            const emptyMove = new Ready();
            const emptyBoard = new BoardMap(size);
            const superRoot = new Node(emptyMove, emptyBoard);
            superRoot.setParentPtr(Nil);
            this.buff = [superRoot];
            this.last = 0; // address of root is always 0
        } else {
            const tree = sizeOrTree;
            this.buff = new Array(tree.buff.length);
            for (let i = 0; i < tree.buff.length; i++) {
                this.buff[i] = tree.buff[i].clone();
            }
            this.last = tree.last;
        }
    }

    addNextMove(m: Move): void {
        const current = this.buff[this.last];
        const addr = this.buff.length;
        if (m instanceof BoardPlay) {
            const newBoard = current.boardRef().clone();
            newBoard.put(m);
            this.buff.push(new Node(m, newBoard));
        } else {
            this.buff.push(new Node(m, current.boardRef()));
        }
        current.addChildPtr(addr);
        this.buff[addr].setParentPtr(this.last);
        this.last = addr;
    }

    findNextMove(m: Move): Ptr[] {
        const current = this.buff[this.last];
        const children = current.getChildrenPtr();
        return children.filter((x) => this.buff[x].isSame(m));
    }

    removeNode(ptr: Ptr): void { // NOTICE: lastPtr need fix after call this function
        const parent = this.buff[ptr].getParentPtr();
        this.buff[parent].removeChildPtr(ptr);
        this.buff[ptr] = null;
    }

    clone(): GameTree {
        return new GameTree(this);
    }

    lastNodeRef(): Node {
        return this.buff[this.last];
    }

    findPtr(t: Ptr): Node {
        return this.buff[t];
    }

    getPath(t: Ptr): Node[] {
        let p = this.buff[t];
        const path = [];
        while (p.isRoot() === false) {
            path.push(p);
            p = this.buff[p.getParentPtr()];
        }
        return path.reverse();
    }

    getLast(): Node {
        return this.buff[this.last];
    }

    getPathPtr(t: Ptr): Ptr[] {
        let p = t;
        const path = [];
        while (this.buff[p].isRoot() === false) {
            path.push(p);
            p = this.buff[p].getParentPtr();
        }
        return path.reverse();
    }

    getLastPtr(): Ptr {
        return this.last;
    }

    setLastPtr(t: Ptr) {
        this.last = t;
    }

    forwardPtr(steps?: number): Ptr {
        let ptr = this.last;
        let children = this.buff[ptr].getChildrenPtr();
        if (steps) {
            while (children.length > 0 && steps > 0) {
                ptr = children[0];
                children = this.buff[ptr].getChildrenPtr();
                steps -= 1;
            }
        } else {
            while (children.length > 0) {
                ptr = children[0];
                children = this.buff[ptr].getChildrenPtr();
            }
        }
        return ptr;
    }

    backwardPtr(steps?: number): Ptr {
        if (steps) {
            let ptr = this.last;
            let parent = this.buff[ptr].getParentPtr();
            while (parent !== Nil && steps > 0) {
                ptr = parent;
                parent = this.buff[ptr].getParentPtr();
                steps -= 1;
            }
            return ptr;
        } else {
            return 0;
        }
    }

    public leftMostPath(ptr: Ptr): Ptr[] {
        const previous = this.getPathPtr(ptr);
        let children = this.buff[ptr].getChildrenPtr();
        const following: Ptr[] = []; // does not include current ptr, because it's already in previous.
        while (children.length > 0) {
            ptr = children[0];
            following.push(ptr);
            children = this.buff[ptr].getChildrenPtr();
        }
        return [0].concat(previous).concat(following);
    }

    public firstLevel(): Ptr[] {
        // longest no branch path
        const res: Ptr[] = [];
        let children = this.buff[0].getChildrenPtr();
        if (children.length === 1) { // signle record
            while (children.length === 1) {
                res.push(children[0]);
                children = this.buff[children[0]].getChildrenPtr();
            }
            return res;
        } else {
            return children;
        }
    }

    public nextLevelOf(t: Ptr): Ptr[] {
        if (t === 0) { // super node
            const children = this.buff[0].getChildrenPtr();
            if (children.length > 1) { // multiple record
                return children;
            }
            return []; // single record
        } else { // general node
            const siblings = this.buff[this.buff[t].getParentPtr()].getChildrenPtr();
            let children = this.buff[t].getChildrenPtr();
            if (siblings.length === 1) {
                if (children.length === 1) { // chain
                    return [];
                } else { // a split point
                    return children;
                }
            } else { // siblings > 1
                if (children.length === 1) { // path
                    // longest no branch path
                    const res: Ptr[] = [];
                    while (children.length === 1) {
                        res.push(children[0]);
                        children = this.buff[children[0]].getChildrenPtr();
                    }
                    return res;
                } else { // a split point
                    return children;
                }
            }
        }
    }
}
