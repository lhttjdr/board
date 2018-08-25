import Move from '../Move';
import { PLAYER } from '../define';

export default class Pass extends Move {
    public player: PLAYER;
    public comment;
    public step: number;

    constructor(player: PLAYER, step: number, comment: string = '') {
        super();
        this.player = player;
        this.step = step;
        this.comment = comment;
    }

    public clone(): Pass {
        return new Pass(this.player, this.step, this.comment);
    }

    public equal(m: Pass): boolean {
        return this.player === m.player && this.step === m.step;
    }
    public show(): string {
        return 'PASS';
    }
}
