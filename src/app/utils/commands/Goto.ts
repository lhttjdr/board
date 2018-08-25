import Command from '../base/Command';
import GameStateStack from '../base/GameStateStack';
import { Ptr } from '../base/Node';

export default class Goto extends Command {
    public subCommand = false;
    public allowUndo = true;
    private states: GameStateStack;
    private current: Ptr;
    constructor(states: GameStateStack, ptr: Ptr) {
        super();
        this.states = states;
        this.current = ptr;
    }
    public execute(): void {
        const s = this.states.current().clone();
        s.tree.setLastPtr(this.current);
        this.states.push(s);
    }

    public undo(): void {
        this.states.pop();
    }
    public redo(): void {
        this.execute();
    }
}
