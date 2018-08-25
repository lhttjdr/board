import { COLOR, SHAPE, PLAYER } from '../base/define';
import Point from '../base/Point';
import Move from '../base/Move';
import ColorTool from '../canvas/ColorTool';
import BoardPlay from '../base/moves/BoardPlay';
import BoardText from '../base/moves/BoardText';

export default class MoveTool {

    public static render(ctx: CanvasRenderingContext2D,
        centre: Point,
        radius: number,
        move: Move,
        isLast: boolean,
        showStep = true): void {
        if (move instanceof BoardPlay) {
            MoveTool.drawCircle(ctx, centre, radius, move.player, isLast);
            if (showStep === true) {
                MoveTool.drawStep(ctx, centre, radius, move.step, move.player);
            }
        } else if (move instanceof BoardText) {
            MoveTool.drawText(ctx, centre, radius, move.text, move.player);
        }
    }

    private static drawCircle(ctx: CanvasRenderingContext2D,
        centre: Point,
        radius: number,
        player: PLAYER,
        isLast: boolean): void {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centre.x, centre.y, radius, 0, Math.PI * 2.0);
        ctx.fillStyle = ColorTool.stone(player);
        ctx.strokeStyle = '#000';
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (isLast === true) {
            ctx.beginPath();
            ctx.arc(centre.x, centre.y, 0.8 * radius, 0, Math.PI * 2.0);
            ctx.strokeStyle = ColorTool.text(player);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
    }

    private static drawSquare(ctx: CanvasRenderingContext2D, centre: Point, radius: number, player: PLAYER): void {
        ctx.save();
        ctx.fillStyle = ColorTool.stone(player);
        ctx.strokeStyle = '#000';
        const left = centre.x - radius;
        const top = centre.y - radius;
        const size = 2.0 * radius;
        ctx.fillRect(left, top, size, size);
        ctx.strokeRect(left, top, size, size);
        ctx.restore();
    }

    public static drawText(ctx: CanvasRenderingContext2D,
        centre: Point,
        radius: number,
        text: string,
        player: PLAYER): void {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = ColorTool.text(player);
        if (text !== null) {
            const fontSize: number = Math.floor(radius * 1.414 / text.length);
            ctx.font = fontSize + 'px Arial';
            ctx.fillText(text, centre.x, centre.y);
        }
        ctx.restore();
    }

    private static drawStep(
        ctx: CanvasRenderingContext2D,
        centre: Point,
        radius: number,
        step: number,
        player: PLAYER): void {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = ColorTool.text(player);
        const fontSize: number = Math.floor(radius * 1.414 * 0.9);
        ctx.font = fontSize + 'px Arial';
        const label: string = step.toString();
        if (label.length < 2) {
            ctx.fillText(label, centre.x, centre.y);
        } else { // adjust width to show numbers with more than one digits
            const width: number = ctx.measureText(label).width;
            const scale: number = fontSize / width;
            ctx.save();
            ctx.translate(centre.x, centre.y);
            ctx.scale(scale, 1);
            ctx.fillText(label, 0, 0);
            ctx.restore();
        }
        ctx.restore();
    }
}
