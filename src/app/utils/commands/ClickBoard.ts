import Command from '../base/Command';
import BoardTool from '../canvas/BoardTool';
import GameStateStack from '../base/GameStateStack';
import Point from '../base/Point';
import { MODE, FORBIDDEN } from '../base/define';
import GameState from '../base/GameState';
import BoardPlay from '../base/moves/BoardPlay';

export default class ClickBoard extends Command {
    public subCommand = false;
    public allowUndo = true;
    private states: GameStateStack;
    private nextState: GameState | null = null;
    constructor(states: GameStateStack, p: Point) {
        super();
        this.states = states;
        this.nextState = this.getNext(p);
    }
    public execute(): void {
        if (this.nextState !== null) {
            this.states.push(this.nextState);
        }
    }
    public undo(): void {
        if (this.nextState !== null) {
            this.states.pop();
        }
    }
    public redo(): void {
        if (this.nextState !== null) {
            this.states.push(this.nextState);
        }
    }

    private getNext(p: Point): GameState | null {
        const current = this.states.current();

        if (current.mode === MODE.Play) {
            if (current.isOutBoard(p)) {
                return null;
            } else if (current.at(p) !== null) {
                return null;
            } else {
                const player = current.nextPlayer();
                const move = new BoardPlay(p, player, current.nextStep());
                const [g, f] = this.states.checker.play(this.states, move);
                if (f !== FORBIDDEN.None || g === null) {
                    return null;
                } else {
                    return g;
                }
            }
        }
        return null;
    }
}
