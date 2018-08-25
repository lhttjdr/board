import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd';
import { Ptr } from '../utils/base/Node';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideComponent implements OnInit {
  comment: string;
  expandKeys = ['0'];
  selectedKeys = [];
  expandDefault = false;
  nodes = [new NzTreeNode({
    title: 'Information',
    key: '0',
    type: 'info',
    isLeaf: true,
  })];

  onChange(value: string) {
    if (this.manager !== null) {
      this.manager.saveComment(value);
    }
  }

  mouseAction(name: string, e: any): void {
    if (this.manager !== null) {
      switch (name) {
        case 'click':
          const ptr: Ptr = parseInt(e.node.key, 10);
          this.manager.goto(ptr);
          this.selectedKeys = [e.node.key];
          break;
      }
    }
  }

  constructor(private manager: ManagerService, private myElement: ElementRef) {
    this.manager.setTreeViewHandler((nodes, expand, select) => {
      this.nodes = nodes;
      this.expandKeys = expand;
      this.selectedKeys = select;
      const last = this.myElement.nativeElement.querySelector('span.last');
      if (last !== null) {
        last.scrollIntoView();
      }
    });
    this.manager.setCommentHandler((cmt: string) => {
      this.comment = cmt;
    });
  }

  ngOnInit() {
  }

}
