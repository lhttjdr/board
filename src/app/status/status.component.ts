import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { FORBIDDEN, RULE } from '../utils/base/define';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  get position(): string {
    const indicator = this.manager.current().indicator;
    if (indicator !== null) {
      return indicator.show();
    }
    return '--';
  }

  get forbidden(): string {
    const f = this.manager.current().indicator;
    if (f !== null) {
      switch (f.type) {
        case FORBIDDEN.Suicide:
          return 'suicide';
        case FORBIDDEN.None:
          return '--';
        case FORBIDDEN.Repetition:
          return 'forbidden by Ko rule';
        case FORBIDDEN.DoubleThree:
          return 'double three';
        case FORBIDDEN.DoubleFour:
          return 'double four';
        case FORBIDDEN.Overline:
          return 'overline';
      }
    }
    return '--';
  }

  get rule(): string {
    if (this.manager.rule === RULE.GO) {
      return 'Go';
    } else {
      return 'Renju';
    }
  }

  get size(): number {
    return this.manager.size;
  }

  constructor(private manager: ManagerService) { }

  ngOnInit() {
  }

}
