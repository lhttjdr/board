import Move from '../Move';
import { PLAYER } from '../define';

export default class Ready extends Move {
    public player: PLAYER;
    public comment: string;
    constructor() {
        super();
        this.comment = 'Ready';
    }
    public clone(): Ready {
        return new Ready();
    }
    public equal(m: Ready): boolean {
        throw new Error('Method not implemented.');
    }
    public show(): string {
        return 'Ready';
    }
}
