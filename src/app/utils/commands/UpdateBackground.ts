import Command from '../base/Command';
import { BACKGROUND } from '../base/define';
import GameState from '../base/GameState';
import GameStateStack from '../base/GameStateStack';
import BoardTool from '../canvas/BoardTool';

export default class UpdateBackground extends Command {
    public subCommand = false;
    public allowUndo = true;
    private background: BACKGROUND;
    private states: GameStateStack;
    private old: BACKGROUND; // instead of create a new GameState
    constructor(states: GameStateStack, bg: BACKGROUND) {
        super();
        this.background = bg;
        this.states = states;
        this.old = this.states.current().background;
    }
    public execute(): void {
        this.states.current().background = this.background;
    }
    public undo(): void {
        this.states.current().background = this.old;
    }
    public redo(): void {
        this.states.current().background = this.background;
    }
}
