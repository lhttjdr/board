import Command from '../base/Command';
import GameStateStack from '../base/GameStateStack';

export default class ChangeStepLimit extends Command {
    public subCommand = false;
    public allowUndo = true;
    private limit: number;
    private states: GameStateStack;
    private old: number; // instead of create a new GameState
    constructor(states: GameStateStack, limit: number) {
        super();
        this.limit = limit;
        this.states = states;
        this.old = this.states.current().showStepLimit;
    }
    public execute(): void {
        this.states.current().showStepLimit = this.limit;
    }
    public undo(): void {
        this.states.current().showStepLimit = this.old;
    }
    public redo(): void {
        this.states.current().showStepLimit = this.limit;
    }
}
