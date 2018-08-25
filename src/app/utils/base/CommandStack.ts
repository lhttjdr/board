import Command from '../base/Command';
import Stack from '../base/Stack';

export default class CommandStack {
    private commandStack: Stack<Command> = new Stack();
    private redoStack: Stack<Command> = new Stack();

    public execute(command: Command): void {
        command.execute();
        if (command.allowUndo) {
            this.commandStack.push(command);
            this.redoStack.clear();
        }
    }

    public undo(): void {
        const command = this.commandStack.pop();
        if (command === null) {
            return;
        }
        command.undo();
        this.redoStack.push(command);
    }

    public redo(): void {
        const command = this.redoStack.pop();
        if (command === null) {
            return;
        }
        command.redo();
        this.commandStack.push(command);
    }

    public canRedo(): boolean {
        return this.redo.length > 0;
    }
    public canUndo(): boolean {
        return this.undo.length > 0;
    }
}
