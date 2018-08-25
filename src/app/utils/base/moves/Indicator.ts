import Point from '../Point';
import { FORBIDDEN, PLAYER } from '../define';
import Move from '../Move';

export default class Indicator extends Move {
    public player: PLAYER;
    public comment: string;
    public position: Point;
    public type: FORBIDDEN;

    constructor(p: Point, player: PLAYER, t: FORBIDDEN = FORBIDDEN.None) {
        super();
        this.position = p;
        this.player = player;
        this.type = t;
        this.comment = '';
    }

    public clone(): Move {
        return new Indicator(this.position, this.player, this.type);
    }
    public equal(m: Indicator): boolean {
        return this.position.equal(m.position) && this.type === m.type && this.player === m.player;
    }
    public show(): string {
        return String.fromCharCode(this.position.x + 65) + + (this.position.y + 1).toString();
    }
}
