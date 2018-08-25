export default abstract class Command {
    public abstract allowUndo = true;
    public abstract subCommand = false;
    public abstract execute(): void;
    public abstract undo(): void;
    public abstract redo(): void;
}
