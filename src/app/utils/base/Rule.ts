import GameState from '../base/GameState';
import Move from '../base/Move';
import { FORBIDDEN } from '../base/define';
import GameStateStack from '../base/GameStateStack';

export default abstract class Rule {
    public abstract play(games: GameStateStack, m: Move): [GameState | null, FORBIDDEN];
}
