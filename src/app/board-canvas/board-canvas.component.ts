import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import BoardTool from '../utils/canvas/BoardTool';
import GameState from '../utils/base/GameState';

@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.css']
})
export class BoardCanvasComponent implements OnInit, AfterViewInit {

  constructor(private manager: ManagerService, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvas = this.elementRef.nativeElement.querySelector('canvas');
    if (canvas !== null && canvas instanceof HTMLCanvasElement) {
      this.manager.setBoardHandler((state: GameState) => {
        BoardTool.render(canvas, state);
      });
      canvas.addEventListener('click', (e) => this.click(canvas, e));
      canvas.addEventListener('mouseover', (e) => this.hover(canvas, e));
      canvas.addEventListener('mousemove', (e) => this.hover(canvas, e));
      canvas.addEventListener('mouseout', (e) => this.hover(canvas, e));
    }
  }

  private hover(canvas: HTMLCanvasElement, e: MouseEvent) {
    const state = this.manager.current();
    const position = BoardTool.getMousePsosition(canvas, e, state);
    this.manager.updateIndicator(position);
  }

  private click(canvas: HTMLCanvasElement, e: MouseEvent) {
    const state = this.manager.current();
    const position = BoardTool.getMousePsosition(canvas, e, state);
    this.manager.updateStones(position);
  }

}
