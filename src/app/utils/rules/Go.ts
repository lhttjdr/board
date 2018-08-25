import { SUICIDE, KO, FORBIDDEN, MOVE } from '../base/define';
import Point from '../base/Point';
import GameState from '../base/GameState';
import Move from '../base/Move';
import Rule from '../base/Rule';
import GameStateStack from '../base/GameStateStack';
import BoardPlay from '../base/moves/BoardPlay';
import GameTree from '../base/GameTree';

export default class Go extends Rule {
    private sucide: SUICIDE;
    private ko: KO;

    constructor(sucide = SUICIDE.Forbidden, ko = KO.BasicKo) {
        super();
        this.sucide = sucide;
        this.ko = ko;
    }

    public play(states: GameStateStack, m: Move): [GameState | null, FORBIDDEN] {
        const next = states.current().clone();
        next.move(m); // support no dead

        if (states.size < 2) {
            return [next, FORBIDDEN.None];
        }
        if (m instanceof BoardPlay) {
            // 1, BFS, find possible killed
            const [possibleKilled, block, possibleSuicide] = this.find(next, m);
            // 2, BFS, remove killed
            this.clean(next, possibleKilled);
            // 3, check suicide
            if (possibleSuicide === true) {
                let suicide = true;
                for (const p of possibleKilled) {
                    if (next.at(p) === null) {
                        suicide = false;
                        break;
                    }
                }
                if (suicide === true) {
                    if (this.sucide === SUICIDE.Forbidden) {
                        return [null, FORBIDDEN.Suicide];
                    } else if (this.sucide === SUICIDE.MoreThanOne) {
                        if (block.length > 1) {
                            this.clean(next, block);
                            return [next, FORBIDDEN.None];
                        } else {
                            return [null, FORBIDDEN.Suicide];
                        }
                    }
                }
            }
            // 4, check ko
            if (this.breakKoRule(states.current().tree, next)) {
                return [null, FORBIDDEN.Repetition];
            }
        }
        return [next, FORBIDDEN.None];
    }
    // remove stones
    private clean(game: GameState, possible: Point[]): void {
        const size = game.size;
        const searched: boolean[][] = Array(size).fill(0).map(() => Array(size).fill(false));
        for (const q of possible) { // from a position with possibly dead stone
            // (adjacent positions to the block containing last move)
            if (searched[q.x][q.y] === true) {
                continue;
            }
            const s = game.at(q);
            if (s === null) { // no stone
                continue;
            }
            const [bound, block, tight] = this.find(game, s);
            if (tight === true) {
                for (const o of block) {
                    game.tree.lastNodeRef().boardRef().removeDead(o);
                }
            }
        }
    }

    private breakKoRule(tree: GameTree, game: GameState): boolean {
        const nodes = tree.getPath(tree.getLastPtr());
        if (nodes.length < 2) {
            return false;
        }
        if (this.ko === KO.BasicKo) {
            return nodes[nodes.length - 2].boardRef().isSame(game.tree.lastNodeRef().boardRef());
        } else if (this.ko === KO.PositionalSuperko) {
            for (const g of nodes) {
                if (g.boardRef().isSame(game.tree.lastNodeRef().boardRef())) {
                    return true;
                }
            }
            return false;
        } else if (this.ko === KO.SituationalSuperko) {
            for (let i = nodes.length - 2; i >= 0; i -= 2) {
                if (nodes[i].boardRef().isSame(game.tree.lastNodeRef().boardRef())) {
                    return true;
                }
            }
            return false;
        } else if (this.ko === KO.NaturalSituationalSuperko) {
            for (let i = nodes.length - 2; i >= 0; i -= 2) {
                if (nodes[i].moveRef() instanceof BoardPlay) {
                    if (nodes[i].boardRef().isSame(game.tree.lastNodeRef().boardRef())) {
                        return true;
                    }
                }
            }
            return false;
        }
        return false;
    }

    private find(g: GameState, m: BoardPlay): [Point[], Point[], boolean] {
        const size = g.size;
        const searched: boolean[][] = Array(size).fill(0).map(() => Array(size).fill(false));
        const bound: Point[] = [];
        let tight = true;
        const Q: Point[] = [m.position];
        let head = 0;
        while (head < Q.length) {
            const q = Q[head++];
            for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                const x = q.x + dx;
                const y = q.y + dy;
                if (x < 0 || x >= size || y < 0 || y >= size) {
                    continue;
                }
                if (searched[x][y] !== true) {
                    const t = g.at(new Point(x, y));
                    if (t === null) {
                        tight = false;
                    } else {
                        if (t.player === m.player) {
                            Q.push(new Point(x, y));
                        } else {
                            bound.push(new Point(x, y));
                        }
                    }
                    searched[x][y] = true;
                }
            }
        }
        return [bound, Q, tight];
    }
}
