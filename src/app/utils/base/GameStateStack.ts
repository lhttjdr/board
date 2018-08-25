import Stack from '../base/Stack';
import GameState from '../base/GameState';
import { RULE, FORBIDDEN, PLAYER } from '../base/define';
import Move from '../base/Move';
import Rule from '../base/Rule';
import Go from '../rules/Go';
import Renju from '../rules/Renju';
import Gomuku from '../rules/Gomuku';

export default class GameStateStack {

    public checker: Rule;
    private states: Stack<GameState> = new Stack<GameState>();
    constructor(initial: GameState) {
        this.states.push(initial);
        this.checker = this.ruleChecker(initial.rule);
    }

    get size(): number {
        return this.states.size;
    }

    public push(s: GameState): void {
        this.states.push(s);
    }

    public pop(): GameState {
        const top = this.current();
        if (this.size > 1) {
            this.states.pop();
        }
        return top;
    }

    public current(): GameState {
        const cur = this.states.top();
        if (cur === null) {
            throw Error('Game State Stack is not initialized!');
        }
        return cur;
    }

    public boards(): GameState[] {
        return this.states.vaules();
    }

    public forbiddenMove(m: Move): FORBIDDEN {
        const [g, f] = this.checker.play(this, m);
        return f;
    }

    private ruleChecker(rule: RULE): Rule {
        switch (rule) {
            case RULE.GO:
                return new Go();
            case RULE.Renju:
                return new Renju();
            case RULE.Gomuku:
                return new Gomuku();
        }
        throw Error('No rule specified!');
    }
}
