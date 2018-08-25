import Move from '../Move';
import { PLAYER, MOVE } from '../define';
import Point from '../Point';

export default class BoardPlay extends Move {
    public position: Point;
    public player: PLAYER;
    public comment;
    public step: number;

    constructor(p: Point, player: PLAYER, step: number, comment: string = '') {
        super();
        this.position = p.clone();
        this.player = player;
        this.step = step;
        this.comment = comment;
    }

    public clone(): BoardPlay {
        return new BoardPlay(this.position, this.player, this.step, this.comment);
    }

    public isOverlap(m: BoardPlay): boolean {
        return this.position.equal(m.position);
    }

    public equal(m: BoardPlay): boolean {
        return this.position.equal(m.position) && this.player === m.player && this.step === m.step;
    }

    public show(): string {
        return String.fromCharCode(this.position.x + 65) + (this.position.y + 1).toString();
    }
}
