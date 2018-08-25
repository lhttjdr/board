import { MOVE, PLAYER } from '../base/define';

export default abstract class Move {
    public abstract player: PLAYER;
    public abstract comment: string;
    public abstract clone(): Move;
    public abstract equal(m: Move): boolean;
    public abstract show(): string;
}
