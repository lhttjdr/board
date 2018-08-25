import Command from '../base/Command';
import Point from '../base/Point';
import Indicator from '../base/moves/Indicator';
import BoardTool from '../canvas/BoardTool';
import GameStateStack from '../base/GameStateStack';
import BoardPlay from '../base/moves/BoardPlay';
import { FORBIDDEN } from '../base/define';

export default class MouseUpdate extends Command {
    public allowUndo = false;
    public subCommand = false;
    private states: GameStateStack;
    private position: Point;
    constructor(states: GameStateStack, p: Point) {
        super();
        this.states = states;
        this.position = p;
    }
    public execute(): void {
        const current = this.states.current();
        const player = current.nextPlayer();
        if (current.isOutBoard(this.position)) {
            // out of board, no indicator
            current.indicator = null;
        } else if (current.at(this.position) !== null) {
            // over a stone, no indicator
            current.indicator = new Indicator(this.position, player, FORBIDDEN.Overlap);
        } else {
            if (current.indicator !== null) {
                // no need update
                if (current.indicator.position.equal(this.position)) {
                    return;
                }
            }
            // update indicator
            const m = new BoardPlay(this.position, player, current.nextStep());
            current.indicator = new Indicator(this.position, player, this.states.forbiddenMove(m));
        }
    }
    public undo(): void {
        throw new Error('Mouse Event need not a backup!');
    }
    public redo(): void {
        throw new Error('Mouse Event need not a backup!');
    }
}
