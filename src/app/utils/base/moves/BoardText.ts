import Move from '../Move';
import { PLAYER } from '../define';
import Point from '../Point';

export default class BoardText extends Move {
    public position: Point;
    public player: PLAYER;
    public comment;
    public text: string;

    constructor(p: Point, player: PLAYER, text: string, comment: string = '') {
        super();
        this.position = p.clone();
        this.player = player;
        this.text = text;
        this.comment = comment;
    }

    public clone(): BoardText {
        return new BoardText(this.position, this.player, this.text, this.comment);
    }

    public equal(m: BoardText) {
        return this.position.equal(m.position) && this.player === m.player;
    }
    public show(): string {
        return String.fromCharCode(this.position.x + 65) + + (this.position.y + 1).toString();
    }
}
