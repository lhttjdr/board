export default class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public equal(p: Point): boolean {
        return this.x === p.x && this.y === p.y;
    }

    public clone(): Point {
        return new Point(this.x, this.y);
    }
}
