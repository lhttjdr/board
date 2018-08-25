import { Injectable } from '@angular/core';
import { RULE, PLAYER, BACKGROUND } from '../utils/base/define';
import { NzTreeNodeOptions, NzTreeNode } from 'ng-zorro-antd';
import { Ptr } from '../utils/base/Node';
import BoardTool from '../utils/canvas/BoardTool';
import GameStateStack from '../utils/base/GameStateStack';
import CommandStack from '../utils/base/CommandStack';
import GameState from '../utils/base/GameState';
import Point from '../utils/base/Point';
import MouseUpdate from '../utils/commands/MouseUpdate';
import UpdateBack from '../utils/commands/UpdateBackground';
import ClickBoard from '../utils/commands/ClickBoard';
import Goto from '../utils/commands/Goto';
import UpdateBackground from '../utils/commands/UpdateBackground';
import ChangeStepLimit from '../utils/commands/ChangeStepLimit';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  public rule: RULE;
  public start: PLAYER;
  public size: number;
  private states: GameStateStack;
  private commands: CommandStack;

  private boardHandler: (state: GameState) => void;
  private treeViewHandler: (nodes: NzTreeNode[], expand: string[], select: string[]) => void;
  private commentHandler: (comment: string) => void;
  private toolBarHandler: (currentPath: Ptr[], leftMostPath: Ptr[], currentStep: number) => void;

  constructor() {
    this.size = 19;
    this.rule = RULE.GO;
    this.start = PLAYER.Black;
    this.states = new GameStateStack(new GameState(19, RULE.GO, PLAYER.Black));
    this.commands = new CommandStack();
  }

  // UI handlers = data -> UI
  public setBoardHandler(handler: (state: GameState) => void) {
    this.boardHandler = handler;
    this.updateBoard();
  }
  public setTreeViewHandler(handler: (nodes: NzTreeNode[], expand: string[], select: string[]) => void): void {
    this.treeViewHandler = handler;
    this.updateTreeView();
  }
  public setCommentHandler(handler: (cmt: string) => void) {
    this.commentHandler = handler;
    this.updateComment();
  }
  public setToolBarHandler(handler: (currentPath: Ptr[], leftMostPath: Ptr[], currentStep: number) => void) {
    this.toolBarHandler = handler;
    this.updateToolBar();
  }

  // UI <- data = UI requset data, ask to change data
  public updateIndicator(p: Point): void { // state no need state
    const cmd = new MouseUpdate(this.states, p);
    this.commands.execute(cmd);
    this.updateUI();
  }
  public updateShowLimit(limit: number): void {
    const cmd = new ChangeStepLimit(this.states, limit);
    this.commands.execute(cmd);
    this.updateUI();
  }
  public updateBackground(bg: BACKGROUND): void {
    const cmd = new UpdateBackground(this.states, bg);
    this.commands.execute(cmd);
    this.updateUI();
  }
  public updateStones(p: Point): void {
    const cmd = new ClickBoard(this.states, p);
    this.commands.execute(cmd);
    this.updateUI();
  }
  public saveComment(cmt: string): void {
    this.states.current().tree.lastNodeRef().moveRef().comment = cmt;
    this.updateUI();
  }
  public getComment(): string {
    return this.states.current().tree.lastNodeRef().moveRef().comment;
  }
  public undo() {
    this.commands.undo();
    this.updateUI();
  }
  public redo() {
    this.commands.redo();
    this.updateUI();
  }
  public goto(ptr: Ptr): void {
    const cmd = new Goto(this.states, ptr);
    this.commands.execute(cmd);
    this.updateUI();
  }

  public forward(steps?: number) {
    const ptr = this.current().tree.forwardPtr(steps);
    const cmd = new Goto(this.states, ptr);
    this.commands.execute(cmd);
    this.updateUI();
  }

  public backward(steps?: number) {
    const ptr = this.current().tree.backwardPtr(steps);
    const cmd = new Goto(this.states, ptr);
    this.commands.execute(cmd);
    this.updateUI();
  }

  public newGame(size: number, rule: RULE, start: PLAYER = PLAYER.Black): void {
    this.size = size;
    this.rule = rule;
    this.start = start;
    this.states = new GameStateStack(new GameState(size, rule, start));
    this.commands = new CommandStack();
    this.updateUI();
  }

  public current(): GameState {
    return this.states.current();
  }
  public canUndo(): boolean {
    return this.commands.canUndo();
  }
  public canRedo(): boolean {
    return this.commands.canRedo();
  }
  public showStepLimit(): number {
    return this.current().showStepLimit;
  }

  // data -> UI
  private updateUI() {
    this.updateTreeView();
    this.updateComment();
    this.updateBoard();
    this.updateToolBar();
  }
  private updateTreeView() {
    if (this.treeViewHandler !== null) {
      const tree = this.current().tree;
      const nodes = [new NzTreeNode(this.tree())];
      const last = tree.getLastPtr();
      const select = [last.toString()];
      const path = tree.getPathPtr(last);
      const expand = ['0'].concat(path.map(ptr => ptr.toString()));
      this.treeViewHandler(nodes, expand, select);
    }
  }

  private updateComment() {
    if (this.commentHandler !== null) {
      const tree = this.current().tree;
      const last = tree.getLastPtr();
      this.commentHandler(tree.findPtr(last).moveRef().comment);
    }
  }

  private updateBoard() {
    if (this.boardHandler !== null) {
      this.boardHandler(this.current());
    }
  }

  private updateToolBar() {
    if (this.toolBarHandler !== null) {
      const treeRef = this.current().tree;
      const leftmost = treeRef.leftMostPath(0);
      const last = treeRef.getLastPtr();
      const currentPath = treeRef.leftMostPath(last);
      const step = treeRef.getPathPtr(last).length;
      this.toolBarHandler(currentPath, leftmost, step);
    }
  }

  private tree(): NzTreeNodeOptions {
    const tree = {
      title: 'Information',
      key: '0',
      type: 'info',
      children: [],
      isLast: this.current().tree.getLastPtr() === 0,
    };
    const gametree = this.current().tree;
    const first = gametree.firstLevel();
    tree.children = first.slice();
    this.convertChildren(tree);
    return tree;
  }

  private convertChildren(tree: any): void {
    const children: Ptr[] = tree.children as Ptr[];
    const lastPtr = this.current().tree.getLastPtr();
    for (let i = 0; i < children.length; i++) {
      const ptr = children[i];
      const move = this.current().tree.findPtr(ptr).moveRef();
      const next = this.current().tree.nextLevelOf(ptr);
      if (next.length === 0) { // Leaf
        tree.children[i] = {
          title: move.show(),
          key: ptr.toString(),
          type: move.player === PLAYER.Black ? 'black' : 'white',
          isLeaf: true,
          selectable: false,
          isLast: lastPtr === ptr,
        };
      } else {
        tree.children[i] = {
          title: move.show(),
          key: ptr.toString(),
          type: move.player === PLAYER.Black ? 'black' : 'white',
          children: next.slice(),
          selectable: false,
          isLast: lastPtr === ptr,
        };
        this.convertChildren(tree.children[i]);
      }
    }
  }
}
