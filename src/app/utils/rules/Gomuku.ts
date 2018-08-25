import { FORBIDDEN, SHAPE, OPEN3, PLAYER } from '../base/define';
import Point from '../base/Point';
import Move from '../base/Move';
import Rule from '../base/Rule';
import GameStateStack from '../base/GameStateStack';
import GameState from '../base/GameState';
import BoardPlay from '../base/moves/BoardPlay';

export default class Gomuku extends Rule {

    constructor() {
        super();
    }

    public play(games: GameStateStack, m: Move): [GameState | null, FORBIDDEN] {
        if (m instanceof BoardPlay) {
            const g = games.current().clone();
            g.move(m);
            return [g, FORBIDDEN.None];
        }
        return [null, FORBIDDEN.None];
    }
}
