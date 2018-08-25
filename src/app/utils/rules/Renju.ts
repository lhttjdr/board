import { FORBIDDEN, SHAPE, OPEN3, PLAYER } from '../base/define';
import Point from '../base/Point';
import Move from '../base/Move';
import Rule from '../base/Rule';
import GameStateStack from '../base/GameStateStack';
import GameState from '../base/GameState';
import BoardPlay from '../base/moves/BoardPlay';

const enum PATTERN {
    Three,
    Four,
}

export default class Renju extends Rule {
    private open3: OPEN3 = OPEN3.RIF;

    constructor(open3 = OPEN3.RIF) {
        super();
        this.open3 = open3;
    }

    public play(games: GameStateStack, m: Move): [GameState | null, FORBIDDEN] {
        if (m instanceof BoardPlay) {
            const game = games.current().clone();
            let f = FORBIDDEN.None;
            if (m.player === PLAYER.Black) {
                f = this.test(game, m.position);
                if (f === FORBIDDEN.Five) {
                    f = FORBIDDEN.None;
                }
            }
            if (f === FORBIDDEN.None) {
                const g = games.current().clone();
                g.move(m);
                return [g, f];
            }
            return [null, f];
        }
        return [null, FORBIDDEN.None];
    }


    private test(game: GameState | null, p: Point): FORBIDDEN {
        if (game === null) {
            return FORBIDDEN.None;
        }
        const adjSame: number[] = Array(8).fill(0);
        const adjEmpty: number[] = Array(8).fill(0);
        const jumpSame: number[] = Array(8).fill(0);
        const jumpEmpty: number[] = Array(8).fill(0);
        const jumpJumpSame: number[] = Array(8).fill(0);
        const d = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
        const size = game.size;
        for (let dir = 0; dir < 8; dir++) {
            const [dx, dy] = d[dir];
            let q = new Point(p.x + dx, p.y + dy);
            while (!this.outBoard(q, size) && game.isPositionPlayer(q, PLAYER.Black)) {
                adjSame[dir] += 1;
                q = new Point(q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionEmpty(q)) {
                adjEmpty[dir] += 1;
                q = new Point(q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionPlayer(q, PLAYER.Black)) {
                jumpSame[dir] += 1;
                q = new Point(q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionEmpty(q)) {
                jumpEmpty[dir] += 1;
                q = new Point(q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionPlayer(q, PLAYER.Black)) {
                jumpJumpSame[dir] += 1;
                q = new Point(q.x + dx, q.y + dy);
            }
        }
        // five
        for (let dir = 0; dir < 4; dir++) {
            if (adjSame[dir] + adjSame[dir + 4] === 4) {
                return FORBIDDEN.Five;
            }
        }

        let three = 0;
        let four = 0;
        for (let dir = 0; dir < 4; dir++) {
            const row = adjSame[dir] + 1 + adjSame[dir + 4];
            // overline?
            if (row > 5) {
                return FORBIDDEN.Overline;
            }
            if (row === 4) { // .oooo.
                // open four? (two side empty)
                // half open four? (one side empty)
                let isFour = false;
                if (adjEmpty[dir] > 0) { // left, ?oooO. / ?ooOo.
                    if (this.check(game, p, d[dir].map((a) => a * (adjSame[dir] + 1)), PATTERN.Four)) {
                        isFour = true;
                    }
                }
                if (adjEmpty[dir + 4] > 0) { // right, .oooo?
                    if (this.check(game, p, d[dir + 4].map((a) => a * (adjSame[dir + 4] + 1)), PATTERN.Four)) {
                        isFour = true;
                    }
                }
                if (isFour) {
                    four += 1;
                }
            } else if (row === 3) { // .ooo.
                // half open four?
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 1) { // left, .o?oOo. / .o?ooO.
                    if (this.check(game, p, d[dir].map((a) => a * (adjSame[dir] + 1)), PATTERN.Four)) {
                        four += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 1) { // right, .ooo?o.
                    if (this.check(game, p, d[dir + 4].map((a) => a * (adjSame[dir + 4] + 1)), PATTERN.Four)) {
                        four += 1;
                    }
                }
                // open three?
                let isThree = false;
                if ((adjEmpty[dir] > 2 // left open, ...ooo.
                    || adjEmpty[dir] === 2 && jumpSame[dir] === 0) // left open, x.?ooo.
                    && (adjEmpty[dir + 4] > 1 // right open, .ooo...
                        || adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 0)) { // right open, ?ooo.x
                    if (this.check(game, p, d[dir].map((a) => a * (adjSame[dir] + 1)), PATTERN.Three)) {
                        isThree = true;
                    }
                }
                if ((adjEmpty[dir + 4] > 2 // right open, .ooo?..
                    || adjEmpty[dir + 4] === 2 && jumpSame[dir + 4] === 0) // right open, .ooo?.x
                    && (adjEmpty[dir] > 1 // left open, ...ooo.
                        || adjEmpty[dir] === 1 && jumpSame[dir] === 0)) { // left open, x.ooo?
                    if (this.check(game, p, d[dir + 4].map((a) => a * (adjSame[dir + 4] + 1)), PATTERN.Three)) {
                        isThree = true;
                    }
                }
                if (isThree) {
                    three += 1;
                }
            } else if (row === 2) { // .oo.
                // four?
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 2) { // xoo?oO. or .oo?oO.
                    if (this.check(game, p, d[dir].map((a) => a * (adjSame[dir] + 1)), PATTERN.Four)) {
                        four += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 2) { // .Oo?oox or .Oo?oo.
                    if (this.check(game, p, d[dir + 4].map((a) => a * (adjSame[dir + 4] + 1)), PATTERN.Four)) {
                        four += 1;
                    }
                }
                // three
                // .?o.oO..
                // x?o.oO..
                // .?o.oO.x
                //  x?o.oO.x
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 1 &&
                    (jumpEmpty[dir] > 1 || jumpEmpty[dir] === 1 && jumpJumpSame[dir] === 0) &&
                    (adjEmpty[dir + 4] > 1 || adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 0)) {
                    if (this.check(game, p, d[dir].map((a) => a * (adjSame[dir] + 1)), PATTERN.Three)) {
                        three += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 1 &&
                    (jumpEmpty[dir + 4] > 1 || jumpEmpty[dir + 4] === 1 && jumpJumpSame[dir + 4] === 0) &&
                    (adjEmpty[dir] > 1 || adjEmpty[dir] === 1 && jumpSame[dir] === 0)) {
                    if (this.check(game, p, d[dir + 4].map((a) => a * (adjSame[dir + 4] + 1)), PATTERN.Three)) {
                        three += 1;
                    }
                }
            } else if (row === 1) { // .o.
                // four
                if (jumpEmpty[dir] === 1 && jumpSame[dir] === 3) { // xooo?O. or .ooo?O.
                    if (this.check(game, p, d[dir], PATTERN.Four)) {
                        four += 1;
                    }
                }
                if (jumpEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 3) { // xooo?O. or .ooo?O.
                    if (this.check(game, p, d[dir + 4], PATTERN.Four)) {
                        four += 1;
                    }
                }
                // three
                // .oo.o.
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 2 &&
                    (jumpEmpty[dir] > 1 || jumpEmpty[dir] === 1 && jumpJumpSame[dir] === 0) &&
                    (adjEmpty[dir + 4] > 1 || adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 0)) {
                    if (this.check(game, p, d[dir], PATTERN.Three)) {
                        three += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 2 &&
                    (jumpEmpty[dir + 4] > 1 || jumpEmpty[dir + 4] === 1 && jumpJumpSame[dir + 4] === 0) &&
                    (adjEmpty[dir] > 1 || adjEmpty[dir] === 1 && jumpSame[dir] === 0)) {
                    if (this.check(game, p, d[dir + 4], PATTERN.Three)) {
                        three += 1;
                    }
                }
            }
        }
        if (four > 1) {
            return FORBIDDEN.DoubleFour;
        }
        if (three > 1) {
            return FORBIDDEN.DoubleThree;
        }
        return FORBIDDEN.None;
    }
    private outBoard(p: Point, size: number): boolean {
        return p.x < 0 || p.x >= size || p.y < 0 || p.y >= size;
    }
    private check(game: GameState, p: Point, d: number[], checkfor: PATTERN): boolean {
        const m = new BoardPlay(p, PLAYER.Black, game.nextStep());
        game.move(m);
        const [dx, dy] = d;
        const result = this.test(game, new Point(p.x + dx, p.y + dy));
        game.undoLastMove();
        if (this.open3 === OPEN3.RIF) {
            if (checkfor === PATTERN.Three) {
                return result === FORBIDDEN.None || result !== FORBIDDEN.Five;
            }
            return result === FORBIDDEN.None || result === FORBIDDEN.Five;
        }
        return result === FORBIDDEN.None || result === FORBIDDEN.Five;
    }
}
