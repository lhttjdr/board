import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { BoardCanvasComponent } from './board-canvas/board-canvas.component';
import { ManagerService } from './services/manager.service';
import { ToolComponent } from './tool/tool.component';
import { SideComponent } from './side/side.component';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { NewGameComponent } from './new-game/new-game.component';

registerLocaleData(en);
registerLocaleData(zh);

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    StatusComponent,
    HeadComponent,
    MenuComponent,
    BoardCanvasComponent,
    ToolComponent,
    SideComponent,
    NewGameComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [
    ManagerService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  entryComponents: [
    NewGameComponent,
  ]
})
export class AppModule { }
