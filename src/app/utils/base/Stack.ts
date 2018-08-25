export default class Stack<T> {
    private _store: T[] = [];
    public push(val: T) {
        this._store.push(val);
    }
    public pop(): T | null {
        const top = this.top();
        if (this._store.length > 0) {
            this._store.length -= 1;
        }
        return top;
    }
    public empty(): boolean {
        return this._store.length === 0;
    }
    public top(): T | null {
        if (this.empty() === true) {
            return null;
        }
        return this._store[this._store.length - 1];
    }
    public clear(): void {
        this._store.length = 0;
    }
    public vaules(): T[] { // should be readonly references
        return this._store;
    }
    get size(): number {
        return this._store.length;
    }
}
