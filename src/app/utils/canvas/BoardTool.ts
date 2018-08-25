import { RULE, FORBIDDEN, BACKGROUND } from '../base/define';
import Point from '../base/Point';
import GameState from '../base/GameState';
import Layout from './Layout';
import MoveTool from '../canvas/MoveTool';
import ColorTool from '../canvas/ColorTool';
import Indicator from '../base/moves/Indicator';
import BoardPlay from '../base/moves/BoardPlay';
import BoardMap from '../base/BoardMap';
import GameTree from '../base/GameTree';
import {Node} from '../base/Node';

export default class BoardTool {
    public static getMousePsosition(canvas: HTMLCanvasElement, e: MouseEvent, state: GameState): Point {
        const rc = canvas.getBoundingClientRect();
        const real: Point = new Point(
            e.clientX - rc.left,
            e.clientY - rc.top);
        const layout = new Layout(state.size, state.rule, canvas);
        return layout.real2board(real);
    }
    public static render(canvas: HTMLCanvasElement , state: GameState): void {
            const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
            if (ctx === null) {
                return;
            }
            const layout = new Layout(state.size, state.rule, canvas);
            BoardTool.drawBackground(ctx, state.background, canvas.width, canvas.height);
            BoardTool.drawGrid(ctx, layout, state.size);
            BoardTool.drawCoor(ctx, layout, state.size);
            BoardTool.drawExtra(ctx, layout, state.size, state.rule);
            const minStep = state.showStepLimit < 0 ? state.showStepLimit : state.nextStep() - state.showStepLimit;
            BoardTool.drawStones(ctx, state.tree.lastNodeRef().boardRef(), layout, state.size, minStep);
            BoardTool.drawNextMoves(ctx, state.tree, layout, state.background);
            if (state.showCursor === true && state.indicator !== null) {
                BoardTool.drawIndicator(ctx, state.indicator, layout);
            }
    }
    private static drawBackground(ctx: CanvasRenderingContext2D, bg: BACKGROUND, width: number, height: number): void {
        const color = ColorTool.background(bg);
        if (color === 'transparent') {
            ctx.clearRect(0, 0, width, height);
        } else {
            ctx.save();
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }
    }
    private static drawGrid(ctx: CanvasRenderingContext2D, layout: Layout, size: number): void {
        ctx.beginPath();
        for (let i = 0; i < size; i++) {
            ctx.moveTo(layout.padding, layout.padding + i * layout.grid);
            ctx.lineTo(layout.padding + layout.height, layout.padding + i * layout.grid);

            ctx.moveTo(layout.padding + i * layout.grid, layout.padding);
            ctx.lineTo(layout.padding + i * layout.grid, layout.padding + layout.width);
        }
        ctx.closePath();
        ctx.stroke();
    }

    private static drawCoor(ctx: CanvasRenderingContext2D, layout: Layout, size: number): void {
        ctx.save();
        ctx.font = Math.floor(layout.grid * 0.618) + 'px Arial';
        ctx.fillStyle = '#000';
        ctx.strokeStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < size; i++) {
            ctx.fillText(String.fromCharCode(i + 65), layout.padding + i * layout.grid, layout.grid);
            ctx.fillText((size - i).toString(), layout.grid, layout.padding + i * layout.grid);
            ctx.fillText(String.fromCharCode(i + 65),
                layout.padding + i * layout.grid,
                layout.padding + layout.height + layout.grid);
            ctx.fillText((size - i).toString(),
                layout.padding + layout.width + layout.grid,
                layout.padding + i * layout.grid);
        }
        ctx.restore();
    }

    private static drawPoint(ctx: CanvasRenderingContext2D, layout: Layout, p: Point): void {
        ctx.save();
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(layout.padding + (p.x - 1) * layout.grid,
            layout.padding + (p.y - 1) * layout.grid,
            0.1 * layout.grid,
            0,
            Math.PI * 2.0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    private static drawExtra(ctx: CanvasRenderingContext2D, layout: Layout, size: number, rule: RULE) {
        switch (rule) {
            case RULE.GO:
                switch (size) {
                    case 19:
                        [4, 10, 16].forEach((x, i, a) =>
                            a.forEach((y) => BoardTool.drawPoint(ctx, layout, new Point(x, y))));
                        break;
                    case 13:
                        [4, 7, 10].forEach((x, i, a) =>
                            a.forEach((y) => BoardTool.drawPoint(ctx, layout, new Point(x, y))));
                        break;
                    case 9:
                        [3, 7].forEach((x, i, a) =>
                            a.forEach((y) => BoardTool.drawPoint(ctx, layout, new Point(x, y))));
                        BoardTool.drawPoint(ctx, layout, new Point(5, 5));
                        break;
                    default:
                }
                break;
            case RULE.Renju:
                // fall through
            case RULE.Gomuku:
                switch (size) {
                    case 15:
                        [4, 12].forEach((x, i, a) => a.forEach((y) =>
                            BoardTool.drawPoint(ctx, layout, new Point(x, y))));
                        BoardTool.drawPoint(ctx, layout, new Point(8, 8));
                        break;
                    default:
                }
                break;
            default:
        }
    }

    private static drawStones(ctx: CanvasRenderingContext2D,
        board: BoardMap,
        layout: Layout,
        size: number,
        minStep: number): void {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const p = new Point(i, j);
                const move = board.at(p);
                const centre = layout.board2real(p);
                if (null !== move) {
                    MoveTool.render(ctx, centre, layout.radius, move, board.isLast(p), move.step >= minStep);
                }
            }
        }
    }

    private static drawNextMoves(ctx: CanvasRenderingContext2D,
        tree: GameTree,
        layout: Layout,
        bg: BACKGROUND): void {
        const childrenPtr = tree.lastNodeRef().getChildrenPtr();
        const player = tree.lastNodeRef().moveRef().player;
        for (let i = 0; i < childrenPtr.length; i++) {
            const move = tree.findPtr(childrenPtr[i]).moveRef();
            if (move instanceof BoardPlay) {
                const position = move.position;
                if (position !== null) {
                    const centre = layout.board2real(position);
                    const width = layout.radius * 1.414;
                    const height = layout.radius * 1.414;
                    const color = ColorTool.background(bg);

                    if (color === 'transparent') {
                        ctx.clearRect(centre.x - width * 0.5, centre.y - height * 0.5, width, height);
                    } else {
                        ctx.save();
                        ctx.fillStyle = color;
                        ctx.fillRect(centre.x - width * 0.5, centre.y - height * 0.5, width, height);
                        ctx.restore();
                    }
                    MoveTool.drawText(ctx, centre, layout.radius, String.fromCharCode(65 + i), player);
                }
            }
        }
    }

    private static drawIndicator(ctx: CanvasRenderingContext2D,
        indicator: Indicator,
        layout: Layout): void {
        if (indicator.type === FORBIDDEN.Overlap) {
            return;
        }
        if (indicator.type === FORBIDDEN.None) {
            ctx.save();
            // style
            ctx.fillStyle = ColorTool.indicator(indicator.player);
            // position
            const centre = layout.board2real(indicator.position);
            ctx.beginPath();
            ctx.arc(centre.x,
                centre.y,
                layout.radius,
                0,
                Math.PI * 2.0);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        } else {
            BoardTool.drawForbidden(ctx, indicator.position, layout);
        }
    }

    private static drawForbidden(ctx: CanvasRenderingContext2D,
        p: Point,
        layout: Layout): void {
        const centre = layout.board2real(p);
        const half = 1.414 * layout.radius * 0.5;
        ctx.save();
        ctx.strokeStyle = '#f00';
        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(centre.x - half, centre.y - half);
        ctx.lineTo(centre.x + half, centre.y + half);
        ctx.moveTo(centre.x + half, centre.y - half);
        ctx.lineTo(centre.x - half, centre.y + half);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}
