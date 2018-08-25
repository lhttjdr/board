import { Component, OnInit } from '@angular/core';
import { NzModalComponent } from 'ng-zorro-antd';
import { ManagerService } from '../services/manager.service';
import { RULE } from '../utils/base/define';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  ruleStr: string;
  sizeStr: string;

  constructor(private manager: ManagerService) {
    if (this.manager.rule === RULE.GO) {
      this.ruleStr = 'Go';
    } else if (this.manager.rule === RULE.Renju) {
      this.ruleStr = 'Renju';
    }
    this.sizeStr = this.manager.size.toString();
  }

  ngOnInit() {
  }

  get size(): number {
    if (this.ruleStr === 'Go') {
      return parseInt(this.sizeStr, 10);
    } else {
      return 15;
    }
  }

  get rule(): RULE {
    if (this.ruleStr === 'Go') {
      return RULE.GO;
    } else if (this.ruleStr === 'Renju') {
      return RULE.Renju;
    } else if (this.ruleStr === 'Gomuku') {
      return RULE.Gomuku;
    }
    throw Error('Unknown Vaule!');
  }

}
