import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { NewGameComponent } from '../new-game/new-game.component';
import { ManagerService } from '../services/manager.service';
import { BACKGROUND } from '../utils/base/define';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  background: string;

  constructor(public manager: ManagerService, private modal: NzModalService) {
    switch (this.manager.current().background) {
      case BACKGROUND.None:
        this.background = 'None';
        break;
      case BACKGROUND.White:
        this.background = 'White';
        break;
      case BACKGROUND.Wood:
        this.background = 'Wood';
        break;
      default:
        throw new Error('Unknown Value');
    }
  }

  ngOnInit() {
  }

  setBackground(value: string) {
    this.background = value;
    switch (value) {
      case 'None':
        this.manager.updateBackground(BACKGROUND.None);
        break;
      case 'White':
        this.manager.updateBackground(BACKGROUND.White);
        break;
      case 'Wood':
        this.manager.updateBackground(BACKGROUND.Wood);
        break;
      default:
        throw new Error('Unknown Value');
    }
  }

  newGame() {
    const diag = this.modal.create({
      nzContent: NewGameComponent,
      nzOnOk: (ref) => new Promise((resolve, reject) => {
        this.manager.newGame(ref.size, ref.rule);
        resolve();
        // reject();
      }).catch(() => console.log('Oops errors!')),
      nzOnCancel: () => {
        console.log('canceled!');
      },
    });
    diag.open();
  }

  undo() {
    this.manager.undo();
  }

  redo() {
    this.manager.redo();
  }

  forward(steps?: number) {
    this.manager.forward(steps);
  }
  backward(steps?: number) {
    this.manager.backward(steps);
  }

  about() {
    this.modal.info({
      nzContent: '<h2>It is an in-progess project!</h2>'
        + '<p>It use Angular + Ant Design for Angular (= UI library).</p>'
        + '<p>I will remove the UI library in futrue, because it is really hard to be customized. </p>'
        + '<p>contact: <a href="mailto:lhttjdr@gmail.com">lhttjdr@gmail.com</a></p>',
    }).open();
  }

}
