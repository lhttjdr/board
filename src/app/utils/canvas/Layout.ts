import { RULE } from '../base/define';
import Point from '../base/Point';

export default class Layout {
    public size: number;
    public grid: number;
    public radius: number;
    public width: number;
    public height: number;
    public padding: number;

    constructor(size: number, rule: RULE, canvas: HTMLCanvasElement);
    constructor(layout: Layout);
    constructor(sizeOrLayout: number | Layout, rule?: RULE, canvas?: HTMLCanvasElement) {
        if (typeof (sizeOrLayout) === 'number' && rule !== undefined && canvas !== undefined) {
            const size = sizeOrLayout;
            this.size = size;
            this.grid = Math.min(canvas.width, canvas.height) / (size - 1 + 4);
            this.radius = 0.45 * this.grid;
            this.width = this.grid * (size - 1);
            this.height = this.grid * (size - 1);
            this.padding = 2 * this.grid;
        } else {
            const layout = sizeOrLayout as Layout;
            this.size = layout.size;
            this.grid = layout.grid;
            this.radius = layout.radius;
            this.width = layout.width;
            this.height = layout.height;
            this.padding = layout.padding;
        }
    }

    public real2board(p: Point): Point {
        const x = p.x - this.padding;
        const y = p.y - this.padding;

        return new Point(
            Math.floor((x + 0.5 * this.grid) / this.grid),
            this.size - Math.floor((y + 0.5 * this.grid) / this.grid) - 1);
    }

    public board2real(p: Point): Point {
        return new Point(
            this.padding + p.x * this.grid,
            this.padding + (this.size - 1 - p.y) * this.grid);
    }

    public clone(): Layout {
        return new Layout(this);
    }
}
