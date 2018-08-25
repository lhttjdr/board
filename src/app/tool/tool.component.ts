import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { Ptr } from '../utils/base/Node';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  leftmost: Ptr[];
  currentPath: Ptr[];
  targetStep: number;

  get maxStep(): number {
    return Math.max(this.currentPath.length, this.leftmost.length) - 1;
  }

  constructor(private manager: ManagerService) {
    this.manager.setToolBarHandler((c: Ptr[], l: Ptr[], s: number) => {
      this.leftmost = l;
      this.currentPath = c;
      this.targetStep = s;
    });
  }

  ngOnInit() {
  }

  jump() {
    if (this.targetStep < this.currentPath.length) {
      this.manager.goto(this.currentPath[this.targetStep]);
    } else if (this.targetStep < this.leftmost.length) {
      this.manager.goto(this.leftmost[this.targetStep]);
    } else {
      throw new Error('Out of range!');
    }
  }

}
