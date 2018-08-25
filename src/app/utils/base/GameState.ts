import { RULE, BACKGROUND, MODE, PLAYER } from '../base/define';
import Layout from '../canvas/Layout';
import Point from '../base/Point';
import Move from '../base/Move';
import Indicator from './moves/Indicator';
import BoardPlay from './moves/BoardPlay';
import Pass from './moves/Pass';
import GameTree from './GameTree';

export default class GameState {
    // basic info
    public size: number;
    public rule: RULE;
    public start: PLAYER;
    // board info
    public indicator: Indicator | null = null;
    public background: BACKGROUND = BACKGROUND.Wood;
    public showCursor = true;
    public showStepLimit = -1; // -1 for all, 0 for none
    // history info
    public tree: GameTree; // game record
    //
    public mode: MODE = MODE.Play;

    constructor(size: number, rule: RULE, start: PLAYER) {
        this.size = size;
        this.rule = rule;
        this.start = start;
        this.tree = new GameTree(size);

    }

    public isOutBoard(p: Point): boolean {
        return p.x < 0 || p.x >= this.size || p.y < 0 || p.y >= this.size;
    }

    public clone(): GameState {
        const gs = new GameState(this.size, this.rule, this.start);
        gs.indicator = null;
        gs.background = this.background;
        gs.showStepLimit = this.showStepLimit;
        gs.showCursor = this.showCursor;
        gs.mode = this.mode;
        gs.tree = this.tree.clone();
        return gs;
    }

    public move(m: Move): void {
        const next = this.tree.findNextMove(m);
        if (next.length === 0) {
            this.tree.addNextMove(m);
        } else {
            this.tree.setLastPtr(next[0]);
        }
    }
    public undoLastMove(): void {
        const last = this.tree.getLastPtr();
        const parent = this.tree.lastNodeRef().getParentPtr();
        this.tree.setLastPtr(parent);
        this.tree.removeNode(last);
    }

    public at(p: Point): BoardPlay | null {
        return this.tree.lastNodeRef().boardRef().at(p);
    }

    public nextPlayer(): PLAYER {
        const lastMoveRef = this.tree.lastNodeRef().moveRef();
        if (lastMoveRef instanceof BoardPlay || lastMoveRef instanceof Pass) {
            return lastMoveRef.player === PLAYER.Black ? PLAYER.White : PLAYER.Black;
        }
        return this.start;
    }
    public nextStep(): number {
        const lastMoveRef = this.tree.lastNodeRef().moveRef();
        if (lastMoveRef instanceof BoardPlay || lastMoveRef instanceof Pass) {
            return lastMoveRef.step + 1;
        }
        return 1; // default from 1
    }
    public isPositionPlayer(p: Point, player: PLAYER): boolean {
        const move = this.at(p);
        if (move !== null) {
            return move.player === player;
        }
        return false;
    }
    public isPositionEmpty(p: Point): boolean {
        const move = this.at(p);
        return move === null;
    }
}
