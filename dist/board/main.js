(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-layout,\r\n.ant-layout-header,\r\n.ant-layout-footer,\r\n.ant-layout-sider,\r\n.ant-layout-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgb(191, 191, 191);\r\n  overflow: hidden;\r\n}\r\n\r\n.ant-layout-header {\r\n  height: 90px;\r\n  line-height: unset;\r\n  box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);\r\n}\r\n\r\n.ant-layout-footer {\r\n  height: 30px;\r\n  line-height: 30px;\r\n  box-shadow: inset 0 1px 0 rgba( 255, 255, 250, 0.6), inset 0 2px 0 rgba( 0, 0, 0, 0.1);\r\n}\r\n\r\n.ant-layout-sider {\r\n  flex: unset !important;\r\n  min-width: unset !important;\r\n  max-width: unset !important;\r\n  width: 40% !important;\r\n  box-shadow: inset 1px 0 0 rgba( 255, 255, 250, 0.6), inset 2px 0 0 rgba( 0, 0, 0, 0.1);\r\n}\r\n\r\n.ant-layout-content {\r\n  flex: unset;\r\n  height: 100%;\r\n  width: 60%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n  <nz-header>\n      <app-head></app-head>\n  </nz-header>\n  <nz-layout>\n    <nz-content>\n        <app-board-canvas></app-board-canvas>\n    </nz-content>\n    <nz-sider>\n        <app-side></app-side>\n    </nz-sider>\n  </nz-layout>\n  <nz-footer>\n      <app-status></app-status>\n  </nz-footer>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./head/head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _board_canvas_board_canvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-canvas/board-canvas.component */ "./src/app/board-canvas/board-canvas.component.ts");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var _tool_tool_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tool/tool.component */ "./src/app/tool/tool.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-game/new-game.component */ "./src/app/new-game/new-game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_16___default.a);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"],
                _head_head_component__WEBPACK_IMPORTED_MODULE_6__["HeadComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _board_canvas_board_canvas_component__WEBPACK_IMPORTED_MODULE_8__["BoardCanvasComponent"],
                _tool_tool_component__WEBPACK_IMPORTED_MODULE_10__["ToolComponent"],
                _side_side_component__WEBPACK_IMPORTED_MODULE_11__["SideComponent"],
                _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_17__["NewGameComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__["NgZorroAntdModule"]
            ],
            providers: [
                _services_manager_service__WEBPACK_IMPORTED_MODULE_9__["ManagerService"],
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_13__["en_US"] }
            ],
            entryComponents: [
                _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_17__["NewGameComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board-canvas/board-canvas.component.css":
/*!*********************************************************!*\
  !*** ./src/app/board-canvas/board-canvas.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.board {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\ndiv.board canvas {\r\n  margin-top: 20px;\r\n  box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\r\n}\r\n"

/***/ }),

/***/ "./src/app/board-canvas/board-canvas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/board-canvas/board-canvas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <canvas width=\"500px\" height=\"500px\"></canvas>\n</div>"

/***/ }),

/***/ "./src/app/board-canvas/board-canvas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/board-canvas/board-canvas.component.ts ***!
  \********************************************************/
/*! exports provided: BoardCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardCanvasComponent", function() { return BoardCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var _utils_canvas_BoardTool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/canvas/BoardTool */ "./src/app/utils/canvas/BoardTool.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardCanvasComponent = /** @class */ (function () {
    function BoardCanvasComponent(manager, elementRef) {
        this.manager = manager;
        this.elementRef = elementRef;
    }
    BoardCanvasComponent.prototype.ngOnInit = function () {
    };
    BoardCanvasComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvas = this.elementRef.nativeElement.querySelector('canvas');
        if (canvas !== null && canvas instanceof HTMLCanvasElement) {
            this.manager.setBoardHandler(function (state) {
                _utils_canvas_BoardTool__WEBPACK_IMPORTED_MODULE_2__["default"].render(canvas, state);
            });
            canvas.addEventListener('click', function (e) { return _this.click(canvas, e); });
            canvas.addEventListener('mouseover', function (e) { return _this.hover(canvas, e); });
            canvas.addEventListener('mousemove', function (e) { return _this.hover(canvas, e); });
            canvas.addEventListener('mouseout', function (e) { return _this.hover(canvas, e); });
        }
    };
    BoardCanvasComponent.prototype.hover = function (canvas, e) {
        var state = this.manager.current();
        var position = _utils_canvas_BoardTool__WEBPACK_IMPORTED_MODULE_2__["default"].getMousePsosition(canvas, e, state);
        this.manager.updateIndicator(position);
    };
    BoardCanvasComponent.prototype.click = function (canvas, e) {
        var state = this.manager.current();
        var position = _utils_canvas_BoardTool__WEBPACK_IMPORTED_MODULE_2__["default"].getMousePsosition(canvas, e, state);
        this.manager.updateStones(position);
    };
    BoardCanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-canvas',
            template: __webpack_require__(/*! ./board-canvas.component.html */ "./src/app/board-canvas/board-canvas.component.html"),
            styles: [__webpack_require__(/*! ./board-canvas.component.css */ "./src/app/board-canvas/board-canvas.component.css")]
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BoardCanvasComponent);
    return BoardCanvasComponent;
}());



/***/ }),

/***/ "./src/app/head/head.component.css":
/*!*****************************************!*\
  !*** ./src/app/head/head.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.title {\r\n    display: inline-block;\r\n    margin: 0px;\r\n    padding: 2px 5px;\r\n    border: 0px;\r\n    font: normal 16px/normal \"Times New Roman\", Times, serif;\r\n    color: rgba(255,255,255,0.9);\r\n    text-overflow: clip;\r\n    background: linear-gradient(180deg, rgba(228,245,252,1) 0, rgba(191,232,249,1) 50%, rgba(159,216,239,1) 51%, rgba(42,176,237,1) 100%);\r\n    background-position: 50% 50%;\r\n    background-origin: padding-box;\r\n    background-clip: border-box;\r\n    background-size: auto auto;\r\n    text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;\r\n    width:100%;\r\n    height:30px;\r\n    line-height: 30px;\r\n}\r\n\r\ndiv.title i img{\r\n    height: 18px;\r\n}"

/***/ }),

/***/ "./src/app/head/head.component.html":
/*!******************************************!*\
  !*** ./src/app/head/head.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <i>\n    <img src=\"../../assets/logo256.png\" />\n  </i>\n  Game board for Go/Renju\n</div>\n<app-menu></app-menu>\n<app-tool></app-tool>"

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadComponent = /** @class */ (function () {
    function HeadComponent() {
    }
    HeadComponent.prototype.ngOnInit = function () {
    };
    HeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.css */ "./src/app/head/head.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.menu{\r\n    height: 30px; \r\n    line-height: 30px;\r\n    box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);\r\n}\r\n\r\ndiv.menu ul, div.menu ul li{\r\n    height: 26px;\r\n    line-height: 26px;\r\n}\r\n\r\ndiv.menu ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    width: 100%;\r\n    background-color: #fff;\r\n}\r\n\r\ndiv.menu ul li{\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    width: 80px;\r\n    text-align: center;\r\n}\r\n\r\nul.subsubmenu {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    width: 100px;\r\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <ul>\n    <li>\n      <nz-dropdown [nzTrigger]=\"'click'\">\n        <a nz-dropdown>\n          File\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li nz-menu-item (click)=\"newGame()\">New</li>\n          <li nz-menu-item>Save As (todo)</li>\n          <li nz-menu-divider></li>\n          <li nz-menu-item>Export (todo)</li>\n        </ul>\n      </nz-dropdown>\n    </li>\n    <li>\n      <nz-dropdown [nzTrigger]=\"'click'\">\n        <a nz-dropdown>\n          Edit\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li nz-menu-item (click)=\"undo()\">Undo</li>\n          <li nz-menu-item (click)=\"redo()\">Redo</li>\n          <li nz-menu-divider></li>\n          <li nz-menu-item>Delete (todo)</li>\n        </ul>\n      </nz-dropdown>\n    </li>\n    <li>\n      <nz-dropdown [nzTrigger]=\"'click'\">\n        <a nz-dropdown>\n          Move\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li nz-menu-item (click)=\"forward(1)\">Forward</li>\n          <li nz-menu-item (click)=\"forward(5)\">Forward 5</li>\n          <li nz-menu-item (click)=\"forward(20)\">Forward 20</li>\n          <li nz-menu-item (click)=\"forward()\">End</li>\n          <li nz-menu-divider></li>\n          <li nz-menu-item (click)=\"backward(1)\">Backward</li>\n          <li nz-menu-item (click)=\"backward(5)\">Backward 5</li>\n          <li nz-menu-item (click)=\"backward(20)\">Backward 20</li>\n          <li nz-menu-item (click)=\"backward()\">Start</li>\n          <li nz-menu-divider></li>\n          <li nz-menu-item>Next Branch (todo)</li>\n          <li nz-menu-item>Previous Branch (todo)</li>\n        </ul>\n      </nz-dropdown>\n    </li>\n    <li>\n      <nz-dropdown [nzTrigger]=\"'click'\">\n        <a nz-dropdown>\n          View\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li nz-submenu>\n            <span title>Background Color</span>\n            <ul class=\"subsubmenu\">\n              <li nz-menu-item (click)=\"setBackground('None')\">\n                <i *ngIf=\"background === 'None'\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"background !== 'None'\" class=\"anticon\"></i>\n                <span>None</span>\n              </li>\n              <li nz-menu-item (click)=\"setBackground('White')\">\n                <i *ngIf=\"background === 'White'\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"background !== 'White'\" class=\"anticon\"></i>\n                <span>White</span>\n              </li>\n              <li nz-menu-item (click)=\"setBackground('Wood')\">\n                <i *ngIf=\"background === 'Wood'\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"background !== 'Wood'\" class=\"anticon\"></i>\n                <span>Wood</span>\n              </li>\n            </ul>\n          </li>\n          <li nz-menu-item>Stone Style (todo)</li>\n          <li nz-menu-divider></li>\n          <li nz-submenu>\n            <span title>Show Step Number</span>\n            <ul class=\"subsubmenu\">\n              <li nz-menu-item (click)=\"manager.updateShowLimit(0)\">\n                <i *ngIf=\"manager.showStepLimit() === 0\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"manager.showStepLimit() !== 0\" class=\"anticon\"></i>\n                None\n              </li>\n              <li nz-menu-item (click)=\"manager.updateShowLimit(5)\">\n                <i *ngIf=\"manager.showStepLimit() === 5\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"manager.showStepLimit() !== 5\" class=\"anticon\"></i>\n                Last 5\n              </li>\n              <li nz-menu-item (click)=\"manager.updateShowLimit(20)\">\n                <i *ngIf=\"manager.showStepLimit() === 20\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"manager.showStepLimit() !== 20\" class=\"anticon\"></i>\n                Last 20</li>\n              <li nz-menu-item (click)=\"manager.updateShowLimit(-1)\">\n                <i *ngIf=\"manager.showStepLimit() === -1\" class=\"anticon anticon-check-circle-o\"></i>\n                <i *ngIf=\"manager.showStepLimit() !== -1\" class=\"anticon\"></i>\n                All</li>\n            </ul>\n          </li>\n        </ul>\n      </nz-dropdown>\n    </li>\n    <li>\n      <nz-dropdown [nzTrigger]=\"'click'\">\n        <a nz-dropdown>\n          Tool\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li nz-menu-item>Count (todo)</li>\n        </ul>\n      </nz-dropdown>\n    </li>\n    <li>\n      <nz-dropdown [nzTrigger]=\"'click'\">\n        <a nz-dropdown>\n          Help\n          <i class=\"anticon anticon-down\"></i>\n        </a>\n        <ul nz-menu>\n          <li nz-menu-item>Tutorial (todo)</li>\n          <li nz-menu-divider></li>\n          <li nz-menu-item (click)=\"about()\">About</li>\n        </ul>\n      </nz-dropdown>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-game/new-game.component */ "./src/app/new-game/new-game.component.ts");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var _utils_base_define__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/base/define */ "./src/app/utils/base/define.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(manager, modal) {
        this.manager = manager;
        this.modal = modal;
        switch (this.manager.current().background) {
            case _utils_base_define__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND"].None:
                this.background = 'None';
                break;
            case _utils_base_define__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND"].White:
                this.background = 'White';
                break;
            case _utils_base_define__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND"].Wood:
                this.background = 'Wood';
                break;
            default:
                throw new Error('Unknown Value');
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.setBackground = function (value) {
        this.background = value;
        switch (value) {
            case 'None':
                this.manager.updateBackground(_utils_base_define__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND"].None);
                break;
            case 'White':
                this.manager.updateBackground(_utils_base_define__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND"].White);
                break;
            case 'Wood':
                this.manager.updateBackground(_utils_base_define__WEBPACK_IMPORTED_MODULE_4__["BACKGROUND"].Wood);
                break;
            default:
                throw new Error('Unknown Value');
        }
    };
    MenuComponent.prototype.newGame = function () {
        var _this = this;
        var diag = this.modal.create({
            nzContent: _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_2__["NewGameComponent"],
            nzOnOk: function (ref) { return new Promise(function (resolve, reject) {
                _this.manager.newGame(ref.size, ref.rule);
                resolve();
                // reject();
            }).catch(function () { return console.log('Oops errors!'); }); },
            nzOnCancel: function () {
                console.log('canceled!');
            },
        });
        diag.open();
    };
    MenuComponent.prototype.undo = function () {
        this.manager.undo();
    };
    MenuComponent.prototype.redo = function () {
        this.manager.redo();
    };
    MenuComponent.prototype.forward = function (steps) {
        this.manager.forward(steps);
    };
    MenuComponent.prototype.backward = function (steps) {
        this.manager.backward(steps);
    };
    MenuComponent.prototype.about = function () {
        this.modal.info({
            nzContent: '<h2>It is an in-progess project!</h2>'
                + '<p>It use Angular + Ant Design for Angular (= UI library).</p>'
                + '<p>I will remove the UI library in futrue, because it is really hard to be customized. </p>'
                + '<p>contact: <a href="mailto:lhttjdr@gmail.com">lhttjdr@gmail.com</a></p>',
        }).open();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")],
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/new-game/new-game.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-game/new-game.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-game/new-game.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-game/new-game.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <span>Rule: </span>\n    <nz-select style=\"width: 120px;\" [(ngModel)]=\"ruleStr\">\n        <nz-option nzValue=\"Go\" nzLabel=\"Go\"></nz-option>\n        <nz-option nzValue=\"Renju\" nzLabel=\"Renju\"></nz-option>\n        <nz-option nzValue=\"Gomuku\" nzLabel=\"Gomuku\"></nz-option>\n    </nz-select>\n  </div>\n  <div *ngIf=\"ruleStr === 'Go'\">\n    <span>Size: </span>\n    <nz-radio-group [(ngModel)]=\"sizeStr\">\n      <label nz-radio nzValue=\"9\">9</label>\n      <label nz-radio nzValue=\"13\">13</label>\n      <label nz-radio nzValue=\"19\">19</label>\n    </nz-radio-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-game/new-game.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-game/new-game.component.ts ***!
  \************************************************/
/*! exports provided: NewGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameComponent", function() { return NewGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var _utils_base_define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/base/define */ "./src/app/utils/base/define.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewGameComponent = /** @class */ (function () {
    function NewGameComponent(manager) {
        this.manager = manager;
        if (this.manager.rule === _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["RULE"].GO) {
            this.ruleStr = 'Go';
        }
        else if (this.manager.rule === _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["RULE"].Renju) {
            this.ruleStr = 'Renju';
        }
        this.sizeStr = this.manager.size.toString();
    }
    NewGameComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NewGameComponent.prototype, "size", {
        get: function () {
            if (this.ruleStr === 'Go') {
                return parseInt(this.sizeStr, 10);
            }
            else {
                return 15;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewGameComponent.prototype, "rule", {
        get: function () {
            if (this.ruleStr === 'Go') {
                return _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["RULE"].GO;
            }
            else if (this.ruleStr === 'Renju') {
                return _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["RULE"].Renju;
            }
            else if (this.ruleStr === 'Gomuku') {
                return _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["RULE"].Gomuku;
            }
            throw Error('Unknown Vaule!');
        },
        enumerable: true,
        configurable: true
    });
    NewGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-game',
            template: __webpack_require__(/*! ./new-game.component.html */ "./src/app/new-game/new-game.component.html"),
            styles: [__webpack_require__(/*! ./new-game.component.css */ "./src/app/new-game/new-game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"]])
    ], NewGameComponent);
    return NewGameComponent;
}());



/***/ }),

/***/ "./src/app/services/manager.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/manager.service.ts ***!
  \*********************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_base_define__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _utils_base_GameStateStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/base/GameStateStack */ "./src/app/utils/base/GameStateStack.ts");
/* harmony import */ var _utils_base_CommandStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/base/CommandStack */ "./src/app/utils/base/CommandStack.ts");
/* harmony import */ var _utils_base_GameState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/base/GameState */ "./src/app/utils/base/GameState.ts");
/* harmony import */ var _utils_commands_MouseUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/commands/MouseUpdate */ "./src/app/utils/commands/MouseUpdate.ts");
/* harmony import */ var _utils_commands_ClickBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/commands/ClickBoard */ "./src/app/utils/commands/ClickBoard.ts");
/* harmony import */ var _utils_commands_Goto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/commands/Goto */ "./src/app/utils/commands/Goto.ts");
/* harmony import */ var _utils_commands_UpdateBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/commands/UpdateBackground */ "./src/app/utils/commands/UpdateBackground.ts");
/* harmony import */ var _utils_commands_ChangeStepLimit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/commands/ChangeStepLimit */ "./src/app/utils/commands/ChangeStepLimit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ManagerService = /** @class */ (function () {
    function ManagerService() {
        this.size = 19;
        this.rule = _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["RULE"].GO;
        this.start = _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["PLAYER"].Black;
        this.states = new _utils_base_GameStateStack__WEBPACK_IMPORTED_MODULE_3__["default"](new _utils_base_GameState__WEBPACK_IMPORTED_MODULE_5__["default"](19, _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["RULE"].GO, _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["PLAYER"].Black));
        this.commands = new _utils_base_CommandStack__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    // UI handlers = data -> UI
    ManagerService.prototype.setBoardHandler = function (handler) {
        this.boardHandler = handler;
        this.updateBoard();
    };
    ManagerService.prototype.setTreeViewHandler = function (handler) {
        this.treeViewHandler = handler;
        this.updateTreeView();
    };
    ManagerService.prototype.setCommentHandler = function (handler) {
        this.commentHandler = handler;
        this.updateComment();
    };
    ManagerService.prototype.setToolBarHandler = function (handler) {
        this.toolBarHandler = handler;
        this.updateToolBar();
    };
    // UI <- data = UI requset data, ask to change data
    ManagerService.prototype.updateIndicator = function (p) {
        var cmd = new _utils_commands_MouseUpdate__WEBPACK_IMPORTED_MODULE_6__["default"](this.states, p);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.updateShowLimit = function (limit) {
        var cmd = new _utils_commands_ChangeStepLimit__WEBPACK_IMPORTED_MODULE_10__["default"](this.states, limit);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.updateBackground = function (bg) {
        var cmd = new _utils_commands_UpdateBackground__WEBPACK_IMPORTED_MODULE_9__["default"](this.states, bg);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.updateStones = function (p) {
        var cmd = new _utils_commands_ClickBoard__WEBPACK_IMPORTED_MODULE_7__["default"](this.states, p);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.saveComment = function (cmt) {
        this.states.current().tree.lastNodeRef().moveRef().comment = cmt;
        this.updateUI();
    };
    ManagerService.prototype.getComment = function () {
        return this.states.current().tree.lastNodeRef().moveRef().comment;
    };
    ManagerService.prototype.undo = function () {
        this.commands.undo();
        this.updateUI();
    };
    ManagerService.prototype.redo = function () {
        this.commands.redo();
        this.updateUI();
    };
    ManagerService.prototype.goto = function (ptr) {
        var cmd = new _utils_commands_Goto__WEBPACK_IMPORTED_MODULE_8__["default"](this.states, ptr);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.forward = function (steps) {
        var ptr = this.current().tree.forwardPtr(steps);
        var cmd = new _utils_commands_Goto__WEBPACK_IMPORTED_MODULE_8__["default"](this.states, ptr);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.backward = function (steps) {
        var ptr = this.current().tree.backwardPtr(steps);
        var cmd = new _utils_commands_Goto__WEBPACK_IMPORTED_MODULE_8__["default"](this.states, ptr);
        this.commands.execute(cmd);
        this.updateUI();
    };
    ManagerService.prototype.newGame = function (size, rule, start) {
        if (start === void 0) { start = _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["PLAYER"].Black; }
        this.size = size;
        this.rule = rule;
        this.start = start;
        this.states = new _utils_base_GameStateStack__WEBPACK_IMPORTED_MODULE_3__["default"](new _utils_base_GameState__WEBPACK_IMPORTED_MODULE_5__["default"](size, rule, start));
        this.commands = new _utils_base_CommandStack__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.updateUI();
    };
    ManagerService.prototype.current = function () {
        return this.states.current();
    };
    ManagerService.prototype.canUndo = function () {
        return this.commands.canUndo();
    };
    ManagerService.prototype.canRedo = function () {
        return this.commands.canRedo();
    };
    ManagerService.prototype.showStepLimit = function () {
        return this.current().showStepLimit;
    };
    // data -> UI
    ManagerService.prototype.updateUI = function () {
        this.updateTreeView();
        this.updateComment();
        this.updateBoard();
        this.updateToolBar();
    };
    ManagerService.prototype.updateTreeView = function () {
        if (this.treeViewHandler !== null) {
            var tree = this.current().tree;
            var nodes = [new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"](this.tree())];
            var last = tree.getLastPtr();
            var select = [last.toString()];
            var path = tree.getPathPtr(last);
            var expand = ['0'].concat(path.map(function (ptr) { return ptr.toString(); }));
            this.treeViewHandler(nodes, expand, select);
        }
    };
    ManagerService.prototype.updateComment = function () {
        if (this.commentHandler !== null) {
            var tree = this.current().tree;
            var last = tree.getLastPtr();
            this.commentHandler(tree.findPtr(last).moveRef().comment);
        }
    };
    ManagerService.prototype.updateBoard = function () {
        if (this.boardHandler !== null) {
            this.boardHandler(this.current());
        }
    };
    ManagerService.prototype.updateToolBar = function () {
        if (this.toolBarHandler !== null) {
            var treeRef = this.current().tree;
            var leftmost = treeRef.leftMostPath(0);
            var last = treeRef.getLastPtr();
            var currentPath = treeRef.leftMostPath(last);
            var step = treeRef.getPathPtr(last).length;
            this.toolBarHandler(currentPath, leftmost, step);
        }
    };
    ManagerService.prototype.tree = function () {
        var tree = {
            title: 'Information',
            key: '0',
            type: 'info',
            children: [],
            isLast: this.current().tree.getLastPtr() === 0,
        };
        var gametree = this.current().tree;
        var first = gametree.firstLevel();
        tree.children = first.slice();
        this.convertChildren(tree);
        return tree;
    };
    ManagerService.prototype.convertChildren = function (tree) {
        var children = tree.children;
        var lastPtr = this.current().tree.getLastPtr();
        for (var i = 0; i < children.length; i++) {
            var ptr = children[i];
            var move = this.current().tree.findPtr(ptr).moveRef();
            var next = this.current().tree.nextLevelOf(ptr);
            if (next.length === 0) {
                tree.children[i] = {
                    title: move.show(),
                    key: ptr.toString(),
                    type: move.player === _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["PLAYER"].Black ? 'black' : 'white',
                    isLeaf: true,
                    selectable: false,
                    isLast: lastPtr === ptr,
                };
            }
            else {
                tree.children[i] = {
                    title: move.show(),
                    key: ptr.toString(),
                    type: move.player === _utils_base_define__WEBPACK_IMPORTED_MODULE_1__["PLAYER"].Black ? 'black' : 'white',
                    children: next.slice(),
                    selectable: false,
                    isLast: lastPtr === ptr,
                };
                this.convertChildren(tree.children[i]);
            }
        }
    };
    ManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ManagerService);
    return ManagerService;
}());



/***/ }),

/***/ "./src/app/side/side.component.css":
/*!*****************************************!*\
  !*** ./src/app/side/side.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  padding: 2px;\r\n}\r\n\r\ndiv.comment {\r\n  box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);\r\n  height: 30%;\r\n}\r\n\r\ndiv.comment textarea {\r\n  height: 100%;\r\n}\r\n\r\ndiv.gametree {\r\n  background-color: #fff;\r\n  height: 70%;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.ant-tree {\r\n\r\n}\r\n\r\n.ant-tree li {\r\n  padding: 0;\r\n}\r\n\r\n.ant-tree.ant-tree-show-line li span.ant-tree-switcher {\r\n    background: #fff;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.custom-node {\r\n  padding: 0 5px;\r\n  min-width: 20px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\n\r\n.last {\r\n  border: 2px dotted #1890ff;\r\n  min-width: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\ni.icon {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background-repeat: no-repeat;\r\n  vertical-align: middle;\r\n  background-size: cover;\r\n}\r\n\r\n.white {\r\n  background: rgb(255, 255, 255);\r\n  border: 1px solid #000;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n  width: 20px;\r\n}\r\n\r\n.black {\r\n  background: rgb(0, 0, 0);\r\n  border: 1px solid #000;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n  width: 20px;\r\n}\r\n\r\n.info {\r\n  color: #fff;\r\n  background: #2385BA;\r\n  border: 1px solid #2385BA;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  text-align: center;\r\n  height: 20px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n  width: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/side/side.component.html":
/*!******************************************!*\
  !*** ./src/app/side/side.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\">\n    <textarea row=\"4\" nz-input [(ngModel)]=\"comment\" (ngModelChange)=\"onChange($event)\"></textarea>\n</div>\n<div class=\"gametree\">\n    <nz-tree\n             [(ngModel)]=\"nodes\"\n             [nzShowLine]=\"true\"\n             [nzDefaultExpandedKeys]=\"expandKeys\"\n             (nzExpandChange)=\"mouseAction('expand',$event)\"\n             (nzDblClick)=\"mouseAction('dblclick',$event)\"\n             (nzContextMenu)=\"mouseAction('contextmenu', $event)\"\n             (nzClick)=\"mouseAction('click',$event)\">\n             <ng-template #nzTreeTemplate let-node>\n                <span class=\"custom-node\" [class.active]=\"node.isSelected\">\n                  <span>\n                    <i class=\"icon info\" *ngIf=\"node.origin.type === 'info'\">i</i>\n                    <i class=\"icon black\" *ngIf=\"node.origin.type === 'black'\"></i>\n                    <i class=\"icon white\" *ngIf=\"node.origin.type === 'white'\"></i> \n                    <span [class.last]=\"node.origin.isLast\">{{node.title}}</span>\n                  </span>\n                </span>\n              </ng-template>\n    </nz-tree>\n</div>"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideComponent = /** @class */ (function () {
    function SideComponent(manager, myElement) {
        var _this = this;
        this.manager = manager;
        this.myElement = myElement;
        this.expandKeys = ['0'];
        this.selectedKeys = [];
        this.expandDefault = false;
        this.nodes = [new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"]({
                title: 'Information',
                key: '0',
                type: 'info',
                isLeaf: true,
            })];
        this.manager.setTreeViewHandler(function (nodes, expand, select) {
            _this.nodes = nodes;
            _this.expandKeys = expand;
            _this.selectedKeys = select;
            var last = _this.myElement.nativeElement.querySelector('span.last');
            if (last !== null) {
                last.scrollIntoView();
            }
        });
        this.manager.setCommentHandler(function (cmt) {
            _this.comment = cmt;
        });
    }
    SideComponent.prototype.onChange = function (value) {
        if (this.manager !== null) {
            this.manager.saveComment(value);
        }
    };
    SideComponent.prototype.mouseAction = function (name, e) {
        if (this.manager !== null) {
            switch (name) {
                case 'click':
                    var ptr = parseInt(e.node.key, 10);
                    this.manager.goto(ptr);
                    this.selectedKeys = [e.node.key];
                    break;
            }
        }
    };
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.css */ "./src/app/side/side.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.footer .message{\r\n    float: left;\r\n    text-align: left;\r\n    height:100%;\r\n    vertical-align: middle;\r\n    width: 50%;\r\n}\r\n.footer ul{\r\n    float: right;\r\n    list-style: none;\r\n    text-align: right;\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    width: 50%;\r\n}\r\n.footer ul li{\r\n    display: inline-block;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"message\">Ready</div>\n    <ul>\n        <li></li>\n        <li style=\"width:150px;\">{{forbidden}}</li>\n        <li style=\"width:50px;\">{{position}}</li>\n        <li style=\"width:50px;\">{{rule}}</li>\n        <li style=\"width:50px;\">{{size}}x{{size}}</li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/services/manager.service.ts");
/* harmony import */ var _utils_base_define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/base/define */ "./src/app/utils/base/define.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusComponent = /** @class */ (function () {
    function StatusComponent(manager) {
        this.manager = manager;
    }
    Object.defineProperty(StatusComponent.prototype, "position", {
        get: function () {
            var indicator = this.manager.current().indicator;
            if (indicator !== null) {
                return indicator.show();
            }
            return '--';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "forbidden", {
        get: function () {
            var f = this.manager.current().indicator;
            if (f !== null) {
                switch (f.type) {
                    case _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["FORBIDDEN"].Suicide:
                        return 'suicide';
                    case _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["FORBIDDEN"].None:
                        return '--';
                    case _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["FORBIDDEN"].Repetition:
                        return 'forbidden by Ko rule';
                    case _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["FORBIDDEN"].DoubleThree:
                        return 'double three';
                    case _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["FORBIDDEN"].DoubleFour:
                        return 'double four';
                    case _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["FORBIDDEN"].Overline:
                        return 'overline';
                }
            }
            return '--';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "rule", {
        get: function () {
            if (this.manager.rule === _utils_base_define__WEBPACK_IMPORTED_MODULE_2__["RULE"].GO) {
                return 'Go';
            }
            else {
                return 'Renju';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "size", {
        get: function () {
            return this.manager.size;
        },
        enumerable: true,
        configurable: true
    });
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/tool/tool.component.css":
/*!*****************************************!*\
  !*** ./src/app/tool/tool.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.toolbar {\r\n  height: 30px;\r\n  line-height: 30px;\r\n  box-shadow: inset 0 -1px 0 rgba( 255, 255, 250, 0.6), inset 0 -2px 0 rgba( 0, 0, 0, 0.1);\r\n}\r\n\r\ndiv.toolbar ul,\r\ndiv.toolbar ul li {\r\n  height: 26px;\r\n  line-height: 26px;\r\n}\r\n\r\ndiv.toolbar ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  width: 100%;\r\n  background-color: #fff;\r\n}\r\n\r\ndiv.toolbar ul li {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 30px;\r\n}\r\n\r\ndiv.toolbar ul li.stepinput {\r\n  width: auto;\r\n  margin-left: 5px;\r\n}\r\n\r\ndiv.toolbar ul li.disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\ni.anticon.flipH {\r\n  -webkit-transform: scaleX(-1);\r\n  transform: scaleX(-1);\r\n  -webkit-filter: FlipH;\r\n          filter: FlipH;\r\n  -ms-filter: \"FlipH\";\r\n}\r\n"

/***/ }),

/***/ "./src/app/tool/tool.component.html":
/*!******************************************!*\
  !*** ./src/app/tool/tool.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\n  <ul>\n    <li [class.disabled]=\"!manager.canUndo()\">\n      <a nz-tooltip nzTitle=\"undo\" (click)=\"manager.undo()\">\n        <i class=\"anticon anticon-rollback\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"redo\" (click)=\"manager.redo()\">\n        <i class=\"anticon anticon-rollback flipH\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"first move\" (click)=\"manager.backward()\">\n        <i class=\"anticon anticon-fast-backward\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"fast backward\" (click)=\"manager.backward(20)\">\n        <i class=\"anticon anticon-backward\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"step backward\" (click)=\"manager.backward(1)\">\n        <i class=\"anticon anticon-caret-left\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"step forward\" (click)=\"manager.forward(1)\">\n        <i class=\"anticon anticon-caret-right\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"fast forward\" (click)=\"manager.forward(20)\">\n        <i class=\"anticon anticon-forward\"></i>\n      </a>\n    </li>\n    <li>\n      <a nz-tooltip nzTitle=\"last move\" (click)=\"manager.forward()\">\n        <i class=\"anticon anticon-fast-forward\"></i>\n      </a>\n    </li>\n    <li class=\"stepinput\">\n        <nz-input-number [(ngModel)]=\"targetStep\" [nzMin]=\"0\" [nzMax]=\"maxStep\" [nzSize]=\"'small'\" [nzStep]=\"1\"></nz-input-number>\n    </li>\n    <li>\n        <a (click)=\"jump()\" nz-tooltip nzTitle=\"Go\" ><i class=\"anticon anticon-enter\"></i></a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/tool/tool.component.ts":
/*!****************************************!*\
  !*** ./src/app/tool/tool.component.ts ***!
  \****************************************/
/*! exports provided: ToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolComponent", function() { return ToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/services/manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolComponent = /** @class */ (function () {
    function ToolComponent(manager) {
        var _this = this;
        this.manager = manager;
        this.manager.setToolBarHandler(function (c, l, s) {
            _this.leftmost = l;
            _this.currentPath = c;
            _this.targetStep = s;
        });
    }
    Object.defineProperty(ToolComponent.prototype, "maxStep", {
        get: function () {
            return Math.max(this.currentPath.length, this.leftmost.length) - 1;
        },
        enumerable: true,
        configurable: true
    });
    ToolComponent.prototype.ngOnInit = function () {
    };
    ToolComponent.prototype.jump = function () {
        if (this.targetStep < this.currentPath.length) {
            this.manager.goto(this.currentPath[this.targetStep]);
        }
        else if (this.targetStep < this.leftmost.length) {
            this.manager.goto(this.leftmost[this.targetStep]);
        }
        else {
            throw new Error('Out of range!');
        }
    };
    ToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tool',
            template: __webpack_require__(/*! ./tool.component.html */ "./src/app/tool/tool.component.html"),
            styles: [__webpack_require__(/*! ./tool.component.css */ "./src/app/tool/tool.component.css")]
        }),
        __metadata("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_1__["ManagerService"]])
    ], ToolComponent);
    return ToolComponent;
}());



/***/ }),

/***/ "./src/app/utils/base/BoardMap.ts":
/*!****************************************!*\
  !*** ./src/app/utils/base/BoardMap.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BoardMap = /** @class */ (function () {
    function BoardMap(size) {
        this.board = Array(size).fill(0).map(function () { return Array(size).fill(null); });
        this.last = null;
    }
    BoardMap.prototype.clone = function () {
        var size = this.board.length;
        var boardMap = new BoardMap(size);
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                if (this.board[i][j] !== null) {
                    boardMap.board[i][j] = this.board[i][j].clone();
                }
            }
        }
        if (this.last) {
            boardMap.last = this.last.clone();
        }
        return boardMap;
    };
    BoardMap.prototype.isSame = function (b) {
        var size = this.board.length;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                if (this.board[i][j] === null && b.board[i][j] !== null) {
                    return false;
                }
                if (this.board[i][j] !== null && b.board[i][j] === null) {
                    return false;
                }
                if (this.board[i][j] !== null && b.board[i][j] !== null) {
                    if (this.board[i][j].player !== b.board[i][j].player) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    BoardMap.prototype.at = function (p) {
        return this.board[p.x][p.y];
    };
    BoardMap.prototype.isLast = function (p) {
        return this.last.equal(p);
    };
    BoardMap.prototype.put = function (m) {
        this.board[m.position.x][m.position.y] = m.clone();
        this.last = m.position.clone();
    };
    BoardMap.prototype.removeDead = function (p) {
        this.board[p.x][p.y] = null;
    };
    BoardMap.prototype.removeLast = function (m, last) {
        this.board[m.position.x][m.position.y] = null;
        this.last = null;
        if (last !== null) {
            this.last = last.clone();
        }
    };
    return BoardMap;
}());
/* harmony default export */ __webpack_exports__["default"] = (BoardMap);


/***/ }),

/***/ "./src/app/utils/base/Command.ts":
/*!***************************************!*\
  !*** ./src/app/utils/base/Command.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Command = /** @class */ (function () {
    function Command() {
        this.allowUndo = true;
        this.subCommand = false;
    }
    return Command;
}());
/* harmony default export */ __webpack_exports__["default"] = (Command);


/***/ }),

/***/ "./src/app/utils/base/CommandStack.ts":
/*!********************************************!*\
  !*** ./src/app/utils/base/CommandStack.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Stack */ "./src/app/utils/base/Stack.ts");

var CommandStack = /** @class */ (function () {
    function CommandStack() {
        this.commandStack = new _base_Stack__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.redoStack = new _base_Stack__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    CommandStack.prototype.execute = function (command) {
        command.execute();
        if (command.allowUndo) {
            this.commandStack.push(command);
            this.redoStack.clear();
        }
    };
    CommandStack.prototype.undo = function () {
        var command = this.commandStack.pop();
        if (command === null) {
            return;
        }
        command.undo();
        this.redoStack.push(command);
    };
    CommandStack.prototype.redo = function () {
        var command = this.redoStack.pop();
        if (command === null) {
            return;
        }
        command.redo();
        this.commandStack.push(command);
    };
    CommandStack.prototype.canRedo = function () {
        return this.redo.length > 0;
    };
    CommandStack.prototype.canUndo = function () {
        return this.undo.length > 0;
    };
    return CommandStack;
}());
/* harmony default export */ __webpack_exports__["default"] = (CommandStack);


/***/ }),

/***/ "./src/app/utils/base/GameState.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/base/GameState.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _moves_BoardPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
/* harmony import */ var _moves_Pass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moves/Pass */ "./src/app/utils/base/moves/Pass.ts");
/* harmony import */ var _GameTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameTree */ "./src/app/utils/base/GameTree.ts");




var GameState = /** @class */ (function () {
    function GameState(size, rule, start) {
        // board info
        this.indicator = null;
        this.background = _base_define__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND"].Wood;
        this.showCursor = true;
        this.showStepLimit = -1; // -1 for all, 0 for none
        //
        this.mode = _base_define__WEBPACK_IMPORTED_MODULE_0__["MODE"].Play;
        this.size = size;
        this.rule = rule;
        this.start = start;
        this.tree = new _GameTree__WEBPACK_IMPORTED_MODULE_3__["default"](size);
    }
    GameState.prototype.isOutBoard = function (p) {
        return p.x < 0 || p.x >= this.size || p.y < 0 || p.y >= this.size;
    };
    GameState.prototype.clone = function () {
        var gs = new GameState(this.size, this.rule, this.start);
        gs.indicator = null;
        gs.background = this.background;
        gs.showStepLimit = this.showStepLimit;
        gs.showCursor = this.showCursor;
        gs.mode = this.mode;
        gs.tree = this.tree.clone();
        return gs;
    };
    GameState.prototype.move = function (m) {
        var next = this.tree.findNextMove(m);
        if (next.length === 0) {
            this.tree.addNextMove(m);
        }
        else {
            this.tree.setLastPtr(next[0]);
        }
    };
    GameState.prototype.undoLastMove = function () {
        var last = this.tree.getLastPtr();
        var parent = this.tree.lastNodeRef().getParentPtr();
        this.tree.setLastPtr(parent);
        this.tree.removeNode(last);
    };
    GameState.prototype.at = function (p) {
        return this.tree.lastNodeRef().boardRef().at(p);
    };
    GameState.prototype.nextPlayer = function () {
        var lastMoveRef = this.tree.lastNodeRef().moveRef();
        if (lastMoveRef instanceof _moves_BoardPlay__WEBPACK_IMPORTED_MODULE_1__["default"] || lastMoveRef instanceof _moves_Pass__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            return lastMoveRef.player === _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black ? _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].White : _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black;
        }
        return this.start;
    };
    GameState.prototype.nextStep = function () {
        var lastMoveRef = this.tree.lastNodeRef().moveRef();
        if (lastMoveRef instanceof _moves_BoardPlay__WEBPACK_IMPORTED_MODULE_1__["default"] || lastMoveRef instanceof _moves_Pass__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            return lastMoveRef.step + 1;
        }
        return 1; // default from 1
    };
    GameState.prototype.isPositionPlayer = function (p, player) {
        var move = this.at(p);
        if (move !== null) {
            return move.player === player;
        }
        return false;
    };
    GameState.prototype.isPositionEmpty = function (p) {
        var move = this.at(p);
        return move === null;
    };
    return GameState;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameState);


/***/ }),

/***/ "./src/app/utils/base/GameStateStack.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/base/GameStateStack.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Stack */ "./src/app/utils/base/Stack.ts");
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _rules_Go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/Go */ "./src/app/utils/rules/Go.ts");
/* harmony import */ var _rules_Renju__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/Renju */ "./src/app/utils/rules/Renju.ts");
/* harmony import */ var _rules_Gomuku__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/Gomuku */ "./src/app/utils/rules/Gomuku.ts");





var GameStateStack = /** @class */ (function () {
    function GameStateStack(initial) {
        this.states = new _base_Stack__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.states.push(initial);
        this.checker = this.ruleChecker(initial.rule);
    }
    Object.defineProperty(GameStateStack.prototype, "size", {
        get: function () {
            return this.states.size;
        },
        enumerable: true,
        configurable: true
    });
    GameStateStack.prototype.push = function (s) {
        this.states.push(s);
    };
    GameStateStack.prototype.pop = function () {
        var top = this.current();
        if (this.size > 1) {
            this.states.pop();
        }
        return top;
    };
    GameStateStack.prototype.current = function () {
        var cur = this.states.top();
        if (cur === null) {
            throw Error('Game State Stack is not initialized!');
        }
        return cur;
    };
    GameStateStack.prototype.boards = function () {
        return this.states.vaules();
    };
    GameStateStack.prototype.forbiddenMove = function (m) {
        var _a = this.checker.play(this, m), g = _a[0], f = _a[1];
        return f;
    };
    GameStateStack.prototype.ruleChecker = function (rule) {
        switch (rule) {
            case _base_define__WEBPACK_IMPORTED_MODULE_1__["RULE"].GO:
                return new _rules_Go__WEBPACK_IMPORTED_MODULE_2__["default"]();
            case _base_define__WEBPACK_IMPORTED_MODULE_1__["RULE"].Renju:
                return new _rules_Renju__WEBPACK_IMPORTED_MODULE_3__["default"]();
            case _base_define__WEBPACK_IMPORTED_MODULE_1__["RULE"].Gomuku:
                return new _rules_Gomuku__WEBPACK_IMPORTED_MODULE_4__["default"]();
        }
        throw Error('No rule specified!');
    };
    return GameStateStack;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameStateStack);


/***/ }),

/***/ "./src/app/utils/base/GameTree.ts":
/*!****************************************!*\
  !*** ./src/app/utils/base/GameTree.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/app/utils/base/Node.ts");
/* harmony import */ var _moves_Ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves/Ready */ "./src/app/utils/base/moves/Ready.ts");
/* harmony import */ var _BoardMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardMap */ "./src/app/utils/base/BoardMap.ts");
/* harmony import */ var _moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");




var GameTree = /** @class */ (function () {
    function GameTree(sizeOrTree) {
        if (typeof sizeOrTree === 'number') {
            var size = sizeOrTree;
            var emptyMove = new _moves_Ready__WEBPACK_IMPORTED_MODULE_1__["default"]();
            var emptyBoard = new _BoardMap__WEBPACK_IMPORTED_MODULE_2__["default"](size);
            var superRoot = new _Node__WEBPACK_IMPORTED_MODULE_0__["Node"](emptyMove, emptyBoard);
            superRoot.setParentPtr(_Node__WEBPACK_IMPORTED_MODULE_0__["Nil"]);
            this.buff = [superRoot];
            this.last = 0; // address of root is always 0
        }
        else {
            var tree = sizeOrTree;
            this.buff = new Array(tree.buff.length);
            for (var i = 0; i < tree.buff.length; i++) {
                this.buff[i] = tree.buff[i].clone();
            }
            this.last = tree.last;
        }
    }
    GameTree.prototype.addNextMove = function (m) {
        var current = this.buff[this.last];
        var addr = this.buff.length;
        if (m instanceof _moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            var newBoard = current.boardRef().clone();
            newBoard.put(m);
            this.buff.push(new _Node__WEBPACK_IMPORTED_MODULE_0__["Node"](m, newBoard));
        }
        else {
            this.buff.push(new _Node__WEBPACK_IMPORTED_MODULE_0__["Node"](m, current.boardRef()));
        }
        current.addChildPtr(addr);
        this.buff[addr].setParentPtr(this.last);
        this.last = addr;
    };
    GameTree.prototype.findNextMove = function (m) {
        var _this = this;
        var current = this.buff[this.last];
        var children = current.getChildrenPtr();
        return children.filter(function (x) { return _this.buff[x].isSame(m); });
    };
    GameTree.prototype.removeNode = function (ptr) {
        var parent = this.buff[ptr].getParentPtr();
        this.buff[parent].removeChildPtr(ptr);
        this.buff[ptr] = null;
    };
    GameTree.prototype.clone = function () {
        return new GameTree(this);
    };
    GameTree.prototype.lastNodeRef = function () {
        return this.buff[this.last];
    };
    GameTree.prototype.findPtr = function (t) {
        return this.buff[t];
    };
    GameTree.prototype.getPath = function (t) {
        var p = this.buff[t];
        var path = [];
        while (p.isRoot() === false) {
            path.push(p);
            p = this.buff[p.getParentPtr()];
        }
        return path.reverse();
    };
    GameTree.prototype.getLast = function () {
        return this.buff[this.last];
    };
    GameTree.prototype.getPathPtr = function (t) {
        var p = t;
        var path = [];
        while (this.buff[p].isRoot() === false) {
            path.push(p);
            p = this.buff[p].getParentPtr();
        }
        return path.reverse();
    };
    GameTree.prototype.getLastPtr = function () {
        return this.last;
    };
    GameTree.prototype.setLastPtr = function (t) {
        this.last = t;
    };
    GameTree.prototype.forwardPtr = function (steps) {
        var ptr = this.last;
        var children = this.buff[ptr].getChildrenPtr();
        if (steps) {
            while (children.length > 0 && steps > 0) {
                ptr = children[0];
                children = this.buff[ptr].getChildrenPtr();
                steps -= 1;
            }
        }
        else {
            while (children.length > 0) {
                ptr = children[0];
                children = this.buff[ptr].getChildrenPtr();
            }
        }
        return ptr;
    };
    GameTree.prototype.backwardPtr = function (steps) {
        if (steps) {
            var ptr = this.last;
            var parent_1 = this.buff[ptr].getParentPtr();
            while (parent_1 !== _Node__WEBPACK_IMPORTED_MODULE_0__["Nil"] && steps > 0) {
                ptr = parent_1;
                parent_1 = this.buff[ptr].getParentPtr();
                steps -= 1;
            }
            return ptr;
        }
        else {
            return 0;
        }
    };
    GameTree.prototype.leftMostPath = function (ptr) {
        var previous = this.getPathPtr(ptr);
        var children = this.buff[ptr].getChildrenPtr();
        var following = []; // does not include current ptr, because it's already in previous.
        while (children.length > 0) {
            ptr = children[0];
            following.push(ptr);
            children = this.buff[ptr].getChildrenPtr();
        }
        return [0].concat(previous).concat(following);
    };
    GameTree.prototype.firstLevel = function () {
        // longest no branch path
        var res = [];
        var children = this.buff[0].getChildrenPtr();
        if (children.length === 1) {
            while (children.length === 1) {
                res.push(children[0]);
                children = this.buff[children[0]].getChildrenPtr();
            }
            return res;
        }
        else {
            return children;
        }
    };
    GameTree.prototype.nextLevelOf = function (t) {
        if (t === 0) {
            var children = this.buff[0].getChildrenPtr();
            if (children.length > 1) {
                return children;
            }
            return []; // single record
        }
        else {
            var siblings = this.buff[this.buff[t].getParentPtr()].getChildrenPtr();
            var children = this.buff[t].getChildrenPtr();
            if (siblings.length === 1) {
                if (children.length === 1) {
                    return [];
                }
                else {
                    return children;
                }
            }
            else {
                if (children.length === 1) {
                    // longest no branch path
                    var res = [];
                    while (children.length === 1) {
                        res.push(children[0]);
                        children = this.buff[children[0]].getChildrenPtr();
                    }
                    return res;
                }
                else {
                    return children;
                }
            }
        }
    };
    return GameTree;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameTree);


/***/ }),

/***/ "./src/app/utils/base/Move.ts":
/*!************************************!*\
  !*** ./src/app/utils/base/Move.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Move = /** @class */ (function () {
    function Move() {
    }
    return Move;
}());
/* harmony default export */ __webpack_exports__["default"] = (Move);


/***/ }),

/***/ "./src/app/utils/base/Node.ts":
/*!************************************!*\
  !*** ./src/app/utils/base/Node.ts ***!
  \************************************/
/*! exports provided: Nil, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nil", function() { return Nil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
var Nil = -1;
var Node = /** @class */ (function () {
    function Node(m, board) {
        this.children = [];
        this.move = m.clone();
        this.board = board.clone();
    }
    Node.prototype.boardRef = function () {
        return this.board;
    };
    Node.prototype.isRoot = function () {
        return this.parent === Nil;
    };
    Node.prototype.isLeaf = function () {
        return this.children.length === 0;
    };
    Node.prototype.isSame = function (m) {
        return this.move.equal(m);
    };
    Node.prototype.addChildPtr = function (t) {
        this.children.push(t);
    };
    Node.prototype.getChildrenPtr = function () {
        return this.children;
    };
    Node.prototype.setParentPtr = function (t) {
        this.parent = t;
    };
    Node.prototype.getParentPtr = function () {
        return this.parent;
    };
    Node.prototype.removeChildPtr = function (t) {
        this.children = this.children.filter(function (s) { return s !== t; });
    };
    Node.prototype.clone = function () {
        var node = new Node(this.move, this.board);
        node.parent = this.parent;
        node.children = this.children.slice();
        return node;
    };
    Node.prototype.moveRef = function () {
        return this.move;
    };
    return Node;
}());



/***/ }),

/***/ "./src/app/utils/base/Point.ts":
/*!*************************************!*\
  !*** ./src/app/utils/base/Point.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.equal = function (p) {
        return this.x === p.x && this.y === p.y;
    };
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    return Point;
}());
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./src/app/utils/base/Rule.ts":
/*!************************************!*\
  !*** ./src/app/utils/base/Rule.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Rule = /** @class */ (function () {
    function Rule() {
    }
    return Rule;
}());
/* harmony default export */ __webpack_exports__["default"] = (Rule);


/***/ }),

/***/ "./src/app/utils/base/Stack.ts":
/*!*************************************!*\
  !*** ./src/app/utils/base/Stack.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Stack = /** @class */ (function () {
    function Stack() {
        this._store = [];
    }
    Stack.prototype.push = function (val) {
        this._store.push(val);
    };
    Stack.prototype.pop = function () {
        var top = this.top();
        if (this._store.length > 0) {
            this._store.length -= 1;
        }
        return top;
    };
    Stack.prototype.empty = function () {
        return this._store.length === 0;
    };
    Stack.prototype.top = function () {
        if (this.empty() === true) {
            return null;
        }
        return this._store[this._store.length - 1];
    };
    Stack.prototype.clear = function () {
        this._store.length = 0;
    };
    Stack.prototype.vaules = function () {
        return this._store;
    };
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this._store.length;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
/* harmony default export */ __webpack_exports__["default"] = (Stack);


/***/ }),

/***/ "./src/app/utils/base/define.ts":
/*!**************************************!*\
  !*** ./src/app/utils/base/define.ts ***!
  \**************************************/
/*! exports provided: RULE, FORMAT, COLOR, SHAPE, BACKGROUND, MODE, FORBIDDEN, KO, SUICIDE, OPEN3, PLAYER, MOVE, MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE", function() { return RULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT", function() { return FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE", function() { return SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND", function() { return BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORBIDDEN", function() { return FORBIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KO", function() { return KO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUICIDE", function() { return SUICIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN3", function() { return OPEN3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER", function() { return PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE", function() { return MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK", function() { return MARK; });
var RULE;
(function (RULE) {
    RULE[RULE["GO"] = 0] = "GO";
    RULE[RULE["Renju"] = 1] = "Renju";
    RULE[RULE["Gomuku"] = 2] = "Gomuku";
})(RULE || (RULE = {}));
var FORMAT;
(function (FORMAT) {
    FORMAT[FORMAT["sgf"] = 0] = "sgf";
    FORMAT[FORMAT["lib"] = 1] = "lib";
})(FORMAT || (FORMAT = {}));
var COLOR;
(function (COLOR) {
    COLOR[COLOR["Black"] = 0] = "Black";
    COLOR[COLOR["White"] = 1] = "White";
})(COLOR || (COLOR = {}));
var SHAPE;
(function (SHAPE) {
    SHAPE[SHAPE["Circle"] = 0] = "Circle";
    SHAPE[SHAPE["Indicator"] = 1] = "Indicator";
    SHAPE[SHAPE["Pass"] = 2] = "Pass";
    SHAPE[SHAPE["Last"] = 3] = "Last";
    SHAPE[SHAPE["Square"] = 4] = "Square";
})(SHAPE || (SHAPE = {}));
var BACKGROUND;
(function (BACKGROUND) {
    BACKGROUND[BACKGROUND["None"] = 0] = "None";
    BACKGROUND[BACKGROUND["White"] = 1] = "White";
    BACKGROUND[BACKGROUND["Wood"] = 2] = "Wood";
})(BACKGROUND || (BACKGROUND = {}));
var MODE;
(function (MODE) {
    MODE[MODE["Edit"] = 0] = "Edit";
    MODE[MODE["Play"] = 1] = "Play";
    MODE[MODE["ReadOnly"] = 2] = "ReadOnly";
})(MODE || (MODE = {}));
var FORBIDDEN;
(function (FORBIDDEN) {
    FORBIDDEN[FORBIDDEN["None"] = 0] = "None";
    FORBIDDEN[FORBIDDEN["Five"] = 1] = "Five";
    // as same as other forbidden fork can block open three/four by losing the game immediately.
    FORBIDDEN[FORBIDDEN["DoubleThree"] = 2] = "DoubleThree";
    FORBIDDEN[FORBIDDEN["DoubleFour"] = 3] = "DoubleFour";
    FORBIDDEN[FORBIDDEN["Overline"] = 4] = "Overline";
    FORBIDDEN[FORBIDDEN["Suicide"] = 5] = "Suicide";
    FORBIDDEN[FORBIDDEN["Repetition"] = 6] = "Repetition";
    FORBIDDEN[FORBIDDEN["Overlap"] = 7] = "Overlap";
})(FORBIDDEN || (FORBIDDEN = {}));
var KO;
(function (KO) {
    KO[KO["BasicKo"] = 0] = "BasicKo";
    // the opponent is prohibited from recapturing the ko immediately.
    // Thus, the capture two, recapture one (打二还一) is allowed.
    KO[KO["PositionalSuperko"] = 1] = "PositionalSuperko";
    // regardless of whose turn it was when that position was first reached.
    KO[KO["SituationalSuperko"] = 2] = "SituationalSuperko";
    // with the same player to play.
    KO[KO["NaturalSituationalSuperko"] = 3] = "NaturalSituationalSuperko";
    // if the player used a board play to create it.
    KO[KO["ChineseSuperko"] = 4] = "ChineseSuperko";
    // from the game by means of basic ko or Sending two, returning one.
})(KO || (KO = {}));
var SUICIDE;
(function (SUICIDE) {
    SUICIDE[SUICIDE["Forbidden"] = 0] = "Forbidden";
    SUICIDE[SUICIDE["MoreThanOne"] = 1] = "MoreThanOne";
})(SUICIDE || (SUICIDE = {}));
var OPEN3;
(function (OPEN3) {
    OPEN3[OPEN3["RIF"] = 0] = "RIF";
    OPEN3[OPEN3["Chinese"] = 1] = "Chinese";
})(OPEN3 || (OPEN3 = {}));
var PLAYER;
(function (PLAYER) {
    PLAYER[PLAYER["White"] = 0] = "White";
    PLAYER[PLAYER["Black"] = 1] = "Black";
})(PLAYER || (PLAYER = {}));
var MOVE;
(function (MOVE) {
    MOVE[MOVE["Board"] = 0] = "Board";
    MOVE[MOVE["Pass"] = 1] = "Pass";
    MOVE[MOVE["Resign"] = 2] = "Resign";
    MOVE[MOVE["Jusge"] = 3] = "Jusge";
    MOVE[MOVE["Next"] = 4] = "Next";
    MOVE[MOVE["Mark"] = 5] = "Mark";
    MOVE[MOVE["Indicator"] = 6] = "Indicator";
    MOVE[MOVE["Preset"] = 7] = "Preset";
    MOVE[MOVE["Ready"] = 8] = "Ready";
})(MOVE || (MOVE = {}));
var MARK;
(function (MARK) {
    MARK[MARK["Text"] = 0] = "Text";
    MARK[MARK["Triangle"] = 1] = "Triangle";
    MARK[MARK["Square"] = 2] = "Square";
})(MARK || (MARK = {}));


/***/ }),

/***/ "./src/app/utils/base/moves/BoardPlay.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/base/moves/BoardPlay.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Move */ "./src/app/utils/base/Move.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BoardPlay = /** @class */ (function (_super) {
    __extends(BoardPlay, _super);
    function BoardPlay(p, player, step, comment) {
        if (comment === void 0) { comment = ''; }
        var _this = _super.call(this) || this;
        _this.position = p.clone();
        _this.player = player;
        _this.step = step;
        _this.comment = comment;
        return _this;
    }
    BoardPlay.prototype.clone = function () {
        return new BoardPlay(this.position, this.player, this.step, this.comment);
    };
    BoardPlay.prototype.isOverlap = function (m) {
        return this.position.equal(m.position);
    };
    BoardPlay.prototype.equal = function (m) {
        return this.position.equal(m.position) && this.player === m.player && this.step === m.step;
    };
    BoardPlay.prototype.show = function () {
        return String.fromCharCode(this.position.x + 65) + (this.position.y + 1).toString();
    };
    return BoardPlay;
}(_Move__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BoardPlay);


/***/ }),

/***/ "./src/app/utils/base/moves/BoardText.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/base/moves/BoardText.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Move */ "./src/app/utils/base/Move.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BoardText = /** @class */ (function (_super) {
    __extends(BoardText, _super);
    function BoardText(p, player, text, comment) {
        if (comment === void 0) { comment = ''; }
        var _this = _super.call(this) || this;
        _this.position = p.clone();
        _this.player = player;
        _this.text = text;
        _this.comment = comment;
        return _this;
    }
    BoardText.prototype.clone = function () {
        return new BoardText(this.position, this.player, this.text, this.comment);
    };
    BoardText.prototype.equal = function (m) {
        return this.position.equal(m.position) && this.player === m.player;
    };
    BoardText.prototype.show = function () {
        return String.fromCharCode(this.position.x + 65) + +(this.position.y + 1).toString();
    };
    return BoardText;
}(_Move__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BoardText);


/***/ }),

/***/ "./src/app/utils/base/moves/Indicator.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/base/moves/Indicator.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Move */ "./src/app/utils/base/Move.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Indicator = /** @class */ (function (_super) {
    __extends(Indicator, _super);
    function Indicator(p, player, t) {
        if (t === void 0) { t = _define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None; }
        var _this = _super.call(this) || this;
        _this.position = p;
        _this.player = player;
        _this.type = t;
        _this.comment = '';
        return _this;
    }
    Indicator.prototype.clone = function () {
        return new Indicator(this.position, this.player, this.type);
    };
    Indicator.prototype.equal = function (m) {
        return this.position.equal(m.position) && this.type === m.type && this.player === m.player;
    };
    Indicator.prototype.show = function () {
        return String.fromCharCode(this.position.x + 65) + +(this.position.y + 1).toString();
    };
    return Indicator;
}(_Move__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Indicator);


/***/ }),

/***/ "./src/app/utils/base/moves/Pass.ts":
/*!******************************************!*\
  !*** ./src/app/utils/base/moves/Pass.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Move */ "./src/app/utils/base/Move.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Pass = /** @class */ (function (_super) {
    __extends(Pass, _super);
    function Pass(player, step, comment) {
        if (comment === void 0) { comment = ''; }
        var _this = _super.call(this) || this;
        _this.player = player;
        _this.step = step;
        _this.comment = comment;
        return _this;
    }
    Pass.prototype.clone = function () {
        return new Pass(this.player, this.step, this.comment);
    };
    Pass.prototype.equal = function (m) {
        return this.player === m.player && this.step === m.step;
    };
    Pass.prototype.show = function () {
        return 'PASS';
    };
    return Pass;
}(_Move__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Pass);


/***/ }),

/***/ "./src/app/utils/base/moves/Ready.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/base/moves/Ready.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Move */ "./src/app/utils/base/Move.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ready = /** @class */ (function (_super) {
    __extends(Ready, _super);
    function Ready() {
        var _this = _super.call(this) || this;
        _this.comment = 'Ready';
        return _this;
    }
    Ready.prototype.clone = function () {
        return new Ready();
    };
    Ready.prototype.equal = function (m) {
        throw new Error('Method not implemented.');
    };
    Ready.prototype.show = function () {
        return 'Ready';
    };
    return Ready;
}(_Move__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Ready);


/***/ }),

/***/ "./src/app/utils/canvas/BoardTool.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/canvas/BoardTool.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _base_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Point */ "./src/app/utils/base/Point.ts");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/app/utils/canvas/Layout.ts");
/* harmony import */ var _canvas_MoveTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas/MoveTool */ "./src/app/utils/canvas/MoveTool.ts");
/* harmony import */ var _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/ColorTool */ "./src/app/utils/canvas/ColorTool.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");






var BoardTool = /** @class */ (function () {
    function BoardTool() {
    }
    BoardTool.getMousePsosition = function (canvas, e, state) {
        var rc = canvas.getBoundingClientRect();
        var real = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](e.clientX - rc.left, e.clientY - rc.top);
        var layout = new _Layout__WEBPACK_IMPORTED_MODULE_2__["default"](state.size, state.rule, canvas);
        return layout.real2board(real);
    };
    BoardTool.render = function (canvas, state) {
        var ctx = canvas.getContext('2d');
        if (ctx === null) {
            return;
        }
        var layout = new _Layout__WEBPACK_IMPORTED_MODULE_2__["default"](state.size, state.rule, canvas);
        BoardTool.drawBackground(ctx, state.background, canvas.width, canvas.height);
        BoardTool.drawGrid(ctx, layout, state.size);
        BoardTool.drawCoor(ctx, layout, state.size);
        BoardTool.drawExtra(ctx, layout, state.size, state.rule);
        var minStep = state.showStepLimit < 0 ? state.showStepLimit : state.nextStep() - state.showStepLimit;
        BoardTool.drawStones(ctx, state.tree.lastNodeRef().boardRef(), layout, state.size, minStep);
        BoardTool.drawNextMoves(ctx, state.tree, layout, state.background);
        if (state.showCursor === true && state.indicator !== null) {
            BoardTool.drawIndicator(ctx, state.indicator, layout);
        }
    };
    BoardTool.drawBackground = function (ctx, bg, width, height) {
        var color = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_4__["default"].background(bg);
        if (color === 'transparent') {
            ctx.clearRect(0, 0, width, height);
        }
        else {
            ctx.save();
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }
    };
    BoardTool.drawGrid = function (ctx, layout, size) {
        ctx.beginPath();
        for (var i = 0; i < size; i++) {
            ctx.moveTo(layout.padding, layout.padding + i * layout.grid);
            ctx.lineTo(layout.padding + layout.height, layout.padding + i * layout.grid);
            ctx.moveTo(layout.padding + i * layout.grid, layout.padding);
            ctx.lineTo(layout.padding + i * layout.grid, layout.padding + layout.width);
        }
        ctx.closePath();
        ctx.stroke();
    };
    BoardTool.drawCoor = function (ctx, layout, size) {
        ctx.save();
        ctx.font = Math.floor(layout.grid * 0.618) + 'px Arial';
        ctx.fillStyle = '#000';
        ctx.strokeStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (var i = 0; i < size; i++) {
            ctx.fillText(String.fromCharCode(i + 65), layout.padding + i * layout.grid, layout.grid);
            ctx.fillText((size - i).toString(), layout.grid, layout.padding + i * layout.grid);
            ctx.fillText(String.fromCharCode(i + 65), layout.padding + i * layout.grid, layout.padding + layout.height + layout.grid);
            ctx.fillText((size - i).toString(), layout.padding + layout.width + layout.grid, layout.padding + i * layout.grid);
        }
        ctx.restore();
    };
    BoardTool.drawPoint = function (ctx, layout, p) {
        ctx.save();
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(layout.padding + (p.x - 1) * layout.grid, layout.padding + (p.y - 1) * layout.grid, 0.1 * layout.grid, 0, Math.PI * 2.0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    };
    BoardTool.drawExtra = function (ctx, layout, size, rule) {
        switch (rule) {
            case _base_define__WEBPACK_IMPORTED_MODULE_0__["RULE"].GO:
                switch (size) {
                    case 19:
                        [4, 10, 16].forEach(function (x, i, a) {
                            return a.forEach(function (y) { return BoardTool.drawPoint(ctx, layout, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y)); });
                        });
                        break;
                    case 13:
                        [4, 7, 10].forEach(function (x, i, a) {
                            return a.forEach(function (y) { return BoardTool.drawPoint(ctx, layout, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y)); });
                        });
                        break;
                    case 9:
                        [3, 7].forEach(function (x, i, a) {
                            return a.forEach(function (y) { return BoardTool.drawPoint(ctx, layout, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y)); });
                        });
                        BoardTool.drawPoint(ctx, layout, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](5, 5));
                        break;
                    default:
                }
                break;
            case _base_define__WEBPACK_IMPORTED_MODULE_0__["RULE"].Renju:
            // fall through
            case _base_define__WEBPACK_IMPORTED_MODULE_0__["RULE"].Gomuku:
                switch (size) {
                    case 15:
                        [4, 12].forEach(function (x, i, a) { return a.forEach(function (y) {
                            return BoardTool.drawPoint(ctx, layout, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y));
                        }); });
                        BoardTool.drawPoint(ctx, layout, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](8, 8));
                        break;
                    default:
                }
                break;
            default:
        }
    };
    BoardTool.drawStones = function (ctx, board, layout, size, minStep) {
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var p = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](i, j);
                var move = board.at(p);
                var centre = layout.board2real(p);
                if (null !== move) {
                    _canvas_MoveTool__WEBPACK_IMPORTED_MODULE_3__["default"].render(ctx, centre, layout.radius, move, board.isLast(p), move.step >= minStep);
                }
            }
        }
    };
    BoardTool.drawNextMoves = function (ctx, tree, layout, bg) {
        var childrenPtr = tree.lastNodeRef().getChildrenPtr();
        var player = tree.lastNodeRef().moveRef().player;
        for (var i = 0; i < childrenPtr.length; i++) {
            var move = tree.findPtr(childrenPtr[i]).moveRef();
            if (move instanceof _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_5__["default"]) {
                var position = move.position;
                if (position !== null) {
                    var centre = layout.board2real(position);
                    var width = layout.radius * 1.414;
                    var height = layout.radius * 1.414;
                    var color = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_4__["default"].background(bg);
                    if (color === 'transparent') {
                        ctx.clearRect(centre.x - width * 0.5, centre.y - height * 0.5, width, height);
                    }
                    else {
                        ctx.save();
                        ctx.fillStyle = color;
                        ctx.fillRect(centre.x - width * 0.5, centre.y - height * 0.5, width, height);
                        ctx.restore();
                    }
                    _canvas_MoveTool__WEBPACK_IMPORTED_MODULE_3__["default"].drawText(ctx, centre, layout.radius, String.fromCharCode(65 + i), player);
                }
            }
        }
    };
    BoardTool.drawIndicator = function (ctx, indicator, layout) {
        if (indicator.type === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Overlap) {
            return;
        }
        if (indicator.type === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None) {
            ctx.save();
            // style
            ctx.fillStyle = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_4__["default"].indicator(indicator.player);
            // position
            var centre = layout.board2real(indicator.position);
            ctx.beginPath();
            ctx.arc(centre.x, centre.y, layout.radius, 0, Math.PI * 2.0);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        }
        else {
            BoardTool.drawForbidden(ctx, indicator.position, layout);
        }
    };
    BoardTool.drawForbidden = function (ctx, p, layout) {
        var centre = layout.board2real(p);
        var half = 1.414 * layout.radius * 0.5;
        ctx.save();
        ctx.strokeStyle = '#f00';
        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(centre.x - half, centre.y - half);
        ctx.lineTo(centre.x + half, centre.y + half);
        ctx.moveTo(centre.x + half, centre.y - half);
        ctx.lineTo(centre.x - half, centre.y + half);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    };
    return BoardTool;
}());
/* harmony default export */ __webpack_exports__["default"] = (BoardTool);


/***/ }),

/***/ "./src/app/utils/canvas/ColorTool.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/canvas/ColorTool.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");

var ColorTool = /** @class */ (function () {
    function ColorTool() {
    }
    ColorTool.stone = function (p) {
        return p === _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].White ? '#fff' : '#000';
    };
    ColorTool.text = function (p) {
        return p === _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].White ? '#000' : '#fff';
    };
    ColorTool.last = function (p) {
        return ColorTool.text(p);
    };
    ColorTool.indicator = function (p) {
        return p === _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].White ? 'rgba(255,255,255,0.3)' : 'rgba(0, 0, 0, 0.3)';
    };
    ColorTool.background = function (bg) {
        switch (bg) {
            case _base_define__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND"].Wood:
                return '#ffcc66';
            case _base_define__WEBPACK_IMPORTED_MODULE_0__["BACKGROUND"].White:
                return '#fff';
        }
        return 'transparent';
    };
    return ColorTool;
}());
/* harmony default export */ __webpack_exports__["default"] = (ColorTool);


/***/ }),

/***/ "./src/app/utils/canvas/Layout.ts":
/*!****************************************!*\
  !*** ./src/app/utils/canvas/Layout.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Point */ "./src/app/utils/base/Point.ts");

var Layout = /** @class */ (function () {
    function Layout(sizeOrLayout, rule, canvas) {
        if (typeof (sizeOrLayout) === 'number' && rule !== undefined && canvas !== undefined) {
            var size = sizeOrLayout;
            this.size = size;
            this.grid = Math.min(canvas.width, canvas.height) / (size - 1 + 4);
            this.radius = 0.45 * this.grid;
            this.width = this.grid * (size - 1);
            this.height = this.grid * (size - 1);
            this.padding = 2 * this.grid;
        }
        else {
            var layout = sizeOrLayout;
            this.size = layout.size;
            this.grid = layout.grid;
            this.radius = layout.radius;
            this.width = layout.width;
            this.height = layout.height;
            this.padding = layout.padding;
        }
    }
    Layout.prototype.real2board = function (p) {
        var x = p.x - this.padding;
        var y = p.y - this.padding;
        return new _base_Point__WEBPACK_IMPORTED_MODULE_0__["default"](Math.floor((x + 0.5 * this.grid) / this.grid), this.size - Math.floor((y + 0.5 * this.grid) / this.grid) - 1);
    };
    Layout.prototype.board2real = function (p) {
        return new _base_Point__WEBPACK_IMPORTED_MODULE_0__["default"](this.padding + p.x * this.grid, this.padding + (this.size - 1 - p.y) * this.grid);
    };
    Layout.prototype.clone = function () {
        return new Layout(this);
    };
    return Layout;
}());
/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "./src/app/utils/canvas/MoveTool.ts":
/*!******************************************!*\
  !*** ./src/app/utils/canvas/MoveTool.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas/ColorTool */ "./src/app/utils/canvas/ColorTool.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
/* harmony import */ var _base_moves_BoardText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/moves/BoardText */ "./src/app/utils/base/moves/BoardText.ts");



var MoveTool = /** @class */ (function () {
    function MoveTool() {
    }
    MoveTool.render = function (ctx, centre, radius, move, isLast, showStep) {
        if (showStep === void 0) { showStep = true; }
        if (move instanceof _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            MoveTool.drawCircle(ctx, centre, radius, move.player, isLast);
            if (showStep === true) {
                MoveTool.drawStep(ctx, centre, radius, move.step, move.player);
            }
        }
        else if (move instanceof _base_moves_BoardText__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            MoveTool.drawText(ctx, centre, radius, move.text, move.player);
        }
    };
    MoveTool.drawCircle = function (ctx, centre, radius, player, isLast) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centre.x, centre.y, radius, 0, Math.PI * 2.0);
        ctx.fillStyle = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_0__["default"].stone(player);
        ctx.strokeStyle = '#000';
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (isLast === true) {
            ctx.beginPath();
            ctx.arc(centre.x, centre.y, 0.8 * radius, 0, Math.PI * 2.0);
            ctx.strokeStyle = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_0__["default"].text(player);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();
    };
    MoveTool.drawSquare = function (ctx, centre, radius, player) {
        ctx.save();
        ctx.fillStyle = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_0__["default"].stone(player);
        ctx.strokeStyle = '#000';
        var left = centre.x - radius;
        var top = centre.y - radius;
        var size = 2.0 * radius;
        ctx.fillRect(left, top, size, size);
        ctx.strokeRect(left, top, size, size);
        ctx.restore();
    };
    MoveTool.drawText = function (ctx, centre, radius, text, player) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_0__["default"].text(player);
        if (text !== null) {
            var fontSize = Math.floor(radius * 1.414 / text.length);
            ctx.font = fontSize + 'px Arial';
            ctx.fillText(text, centre.x, centre.y);
        }
        ctx.restore();
    };
    MoveTool.drawStep = function (ctx, centre, radius, step, player) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = _canvas_ColorTool__WEBPACK_IMPORTED_MODULE_0__["default"].text(player);
        var fontSize = Math.floor(radius * 1.414 * 0.9);
        ctx.font = fontSize + 'px Arial';
        var label = step.toString();
        if (label.length < 2) {
            ctx.fillText(label, centre.x, centre.y);
        }
        else {
            var width = ctx.measureText(label).width;
            var scale = fontSize / width;
            ctx.save();
            ctx.translate(centre.x, centre.y);
            ctx.scale(scale, 1);
            ctx.fillText(label, 0, 0);
            ctx.restore();
        }
        ctx.restore();
    };
    return MoveTool;
}());
/* harmony default export */ __webpack_exports__["default"] = (MoveTool);


/***/ }),

/***/ "./src/app/utils/commands/ChangeStepLimit.ts":
/*!***************************************************!*\
  !*** ./src/app/utils/commands/ChangeStepLimit.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Command */ "./src/app/utils/base/Command.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ChangeStepLimit = /** @class */ (function (_super) {
    __extends(ChangeStepLimit, _super);
    function ChangeStepLimit(states, limit) {
        var _this = _super.call(this) || this;
        _this.subCommand = false;
        _this.allowUndo = true;
        _this.limit = limit;
        _this.states = states;
        _this.old = _this.states.current().showStepLimit;
        return _this;
    }
    ChangeStepLimit.prototype.execute = function () {
        this.states.current().showStepLimit = this.limit;
    };
    ChangeStepLimit.prototype.undo = function () {
        this.states.current().showStepLimit = this.old;
    };
    ChangeStepLimit.prototype.redo = function () {
        this.states.current().showStepLimit = this.limit;
    };
    return ChangeStepLimit;
}(_base_Command__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ChangeStepLimit);


/***/ }),

/***/ "./src/app/utils/commands/ClickBoard.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/commands/ClickBoard.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Command */ "./src/app/utils/base/Command.ts");
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ClickBoard = /** @class */ (function (_super) {
    __extends(ClickBoard, _super);
    function ClickBoard(states, p) {
        var _this = _super.call(this) || this;
        _this.subCommand = false;
        _this.allowUndo = true;
        _this.nextState = null;
        _this.states = states;
        _this.nextState = _this.getNext(p);
        return _this;
    }
    ClickBoard.prototype.execute = function () {
        if (this.nextState !== null) {
            this.states.push(this.nextState);
        }
    };
    ClickBoard.prototype.undo = function () {
        if (this.nextState !== null) {
            this.states.pop();
        }
    };
    ClickBoard.prototype.redo = function () {
        if (this.nextState !== null) {
            this.states.push(this.nextState);
        }
    };
    ClickBoard.prototype.getNext = function (p) {
        var current = this.states.current();
        if (current.mode === _base_define__WEBPACK_IMPORTED_MODULE_1__["MODE"].Play) {
            if (current.isOutBoard(p)) {
                return null;
            }
            else if (current.at(p) !== null) {
                return null;
            }
            else {
                var player = current.nextPlayer();
                var move = new _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_2__["default"](p, player, current.nextStep());
                var _a = this.states.checker.play(this.states, move), g = _a[0], f = _a[1];
                if (f !== _base_define__WEBPACK_IMPORTED_MODULE_1__["FORBIDDEN"].None || g === null) {
                    return null;
                }
                else {
                    return g;
                }
            }
        }
        return null;
    };
    return ClickBoard;
}(_base_Command__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ClickBoard);


/***/ }),

/***/ "./src/app/utils/commands/Goto.ts":
/*!****************************************!*\
  !*** ./src/app/utils/commands/Goto.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Command */ "./src/app/utils/base/Command.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Goto = /** @class */ (function (_super) {
    __extends(Goto, _super);
    function Goto(states, ptr) {
        var _this = _super.call(this) || this;
        _this.subCommand = false;
        _this.allowUndo = true;
        _this.states = states;
        _this.current = ptr;
        return _this;
    }
    Goto.prototype.execute = function () {
        var s = this.states.current().clone();
        s.tree.setLastPtr(this.current);
        this.states.push(s);
    };
    Goto.prototype.undo = function () {
        this.states.pop();
    };
    Goto.prototype.redo = function () {
        this.execute();
    };
    return Goto;
}(_base_Command__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Goto);


/***/ }),

/***/ "./src/app/utils/commands/MouseUpdate.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/commands/MouseUpdate.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Command */ "./src/app/utils/base/Command.ts");
/* harmony import */ var _base_moves_Indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/moves/Indicator */ "./src/app/utils/base/moves/Indicator.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var MouseUpdate = /** @class */ (function (_super) {
    __extends(MouseUpdate, _super);
    function MouseUpdate(states, p) {
        var _this = _super.call(this) || this;
        _this.allowUndo = false;
        _this.subCommand = false;
        _this.states = states;
        _this.position = p;
        return _this;
    }
    MouseUpdate.prototype.execute = function () {
        var current = this.states.current();
        var player = current.nextPlayer();
        if (current.isOutBoard(this.position)) {
            // out of board, no indicator
            current.indicator = null;
        }
        else if (current.at(this.position) !== null) {
            // over a stone, no indicator
            current.indicator = new _base_moves_Indicator__WEBPACK_IMPORTED_MODULE_1__["default"](this.position, player, _base_define__WEBPACK_IMPORTED_MODULE_3__["FORBIDDEN"].Overlap);
        }
        else {
            if (current.indicator !== null) {
                // no need update
                if (current.indicator.position.equal(this.position)) {
                    return;
                }
            }
            // update indicator
            var m = new _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_2__["default"](this.position, player, current.nextStep());
            current.indicator = new _base_moves_Indicator__WEBPACK_IMPORTED_MODULE_1__["default"](this.position, player, this.states.forbiddenMove(m));
        }
    };
    MouseUpdate.prototype.undo = function () {
        throw new Error('Mouse Event need not a backup!');
    };
    MouseUpdate.prototype.redo = function () {
        throw new Error('Mouse Event need not a backup!');
    };
    return MouseUpdate;
}(_base_Command__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MouseUpdate);


/***/ }),

/***/ "./src/app/utils/commands/UpdateBackground.ts":
/*!****************************************************!*\
  !*** ./src/app/utils/commands/UpdateBackground.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Command */ "./src/app/utils/base/Command.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UpdateBackground = /** @class */ (function (_super) {
    __extends(UpdateBackground, _super);
    function UpdateBackground(states, bg) {
        var _this = _super.call(this) || this;
        _this.subCommand = false;
        _this.allowUndo = true;
        _this.background = bg;
        _this.states = states;
        _this.old = _this.states.current().background;
        return _this;
    }
    UpdateBackground.prototype.execute = function () {
        this.states.current().background = this.background;
    };
    UpdateBackground.prototype.undo = function () {
        this.states.current().background = this.old;
    };
    UpdateBackground.prototype.redo = function () {
        this.states.current().background = this.background;
    };
    return UpdateBackground;
}(_base_Command__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (UpdateBackground);


/***/ }),

/***/ "./src/app/utils/rules/Go.ts":
/*!***********************************!*\
  !*** ./src/app/utils/rules/Go.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _base_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Point */ "./src/app/utils/base/Point.ts");
/* harmony import */ var _base_Rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Rule */ "./src/app/utils/base/Rule.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Go = /** @class */ (function (_super) {
    __extends(Go, _super);
    function Go(sucide, ko) {
        if (sucide === void 0) { sucide = _base_define__WEBPACK_IMPORTED_MODULE_0__["SUICIDE"].Forbidden; }
        if (ko === void 0) { ko = _base_define__WEBPACK_IMPORTED_MODULE_0__["KO"].BasicKo; }
        var _this = _super.call(this) || this;
        _this.sucide = sucide;
        _this.ko = ko;
        return _this;
    }
    Go.prototype.play = function (states, m) {
        var next = states.current().clone();
        next.move(m); // support no dead
        if (states.size < 2) {
            return [next, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None];
        }
        if (m instanceof _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            // 1, BFS, find possible killed
            var _a = this.find(next, m), possibleKilled = _a[0], block = _a[1], possibleSuicide = _a[2];
            // 2, BFS, remove killed
            this.clean(next, possibleKilled);
            // 3, check suicide
            if (possibleSuicide === true) {
                var suicide = true;
                for (var _i = 0, possibleKilled_1 = possibleKilled; _i < possibleKilled_1.length; _i++) {
                    var p = possibleKilled_1[_i];
                    if (next.at(p) === null) {
                        suicide = false;
                        break;
                    }
                }
                if (suicide === true) {
                    if (this.sucide === _base_define__WEBPACK_IMPORTED_MODULE_0__["SUICIDE"].Forbidden) {
                        return [null, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Suicide];
                    }
                    else if (this.sucide === _base_define__WEBPACK_IMPORTED_MODULE_0__["SUICIDE"].MoreThanOne) {
                        if (block.length > 1) {
                            this.clean(next, block);
                            return [next, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None];
                        }
                        else {
                            return [null, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Suicide];
                        }
                    }
                }
            }
            // 4, check ko
            if (this.breakKoRule(states.current().tree, next)) {
                return [null, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Repetition];
            }
        }
        return [next, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None];
    };
    // remove stones
    Go.prototype.clean = function (game, possible) {
        var size = game.size;
        var searched = Array(size).fill(0).map(function () { return Array(size).fill(false); });
        for (var _i = 0, possible_1 = possible; _i < possible_1.length; _i++) {
            var q = possible_1[_i];
            // (adjacent positions to the block containing last move)
            if (searched[q.x][q.y] === true) {
                continue;
            }
            var s = game.at(q);
            if (s === null) {
                continue;
            }
            var _a = this.find(game, s), bound = _a[0], block = _a[1], tight = _a[2];
            if (tight === true) {
                for (var _b = 0, block_1 = block; _b < block_1.length; _b++) {
                    var o = block_1[_b];
                    game.tree.lastNodeRef().boardRef().removeDead(o);
                }
            }
        }
    };
    Go.prototype.breakKoRule = function (tree, game) {
        var nodes = tree.getPath(tree.getLastPtr());
        if (nodes.length < 2) {
            return false;
        }
        if (this.ko === _base_define__WEBPACK_IMPORTED_MODULE_0__["KO"].BasicKo) {
            return nodes[nodes.length - 2].boardRef().isSame(game.tree.lastNodeRef().boardRef());
        }
        else if (this.ko === _base_define__WEBPACK_IMPORTED_MODULE_0__["KO"].PositionalSuperko) {
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var g = nodes_1[_i];
                if (g.boardRef().isSame(game.tree.lastNodeRef().boardRef())) {
                    return true;
                }
            }
            return false;
        }
        else if (this.ko === _base_define__WEBPACK_IMPORTED_MODULE_0__["KO"].SituationalSuperko) {
            for (var i = nodes.length - 2; i >= 0; i -= 2) {
                if (nodes[i].boardRef().isSame(game.tree.lastNodeRef().boardRef())) {
                    return true;
                }
            }
            return false;
        }
        else if (this.ko === _base_define__WEBPACK_IMPORTED_MODULE_0__["KO"].NaturalSituationalSuperko) {
            for (var i = nodes.length - 2; i >= 0; i -= 2) {
                if (nodes[i].moveRef() instanceof _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                    if (nodes[i].boardRef().isSame(game.tree.lastNodeRef().boardRef())) {
                        return true;
                    }
                }
            }
            return false;
        }
        return false;
    };
    Go.prototype.find = function (g, m) {
        var size = g.size;
        var searched = Array(size).fill(0).map(function () { return Array(size).fill(false); });
        var bound = [];
        var tight = true;
        var Q = [m.position];
        var head = 0;
        while (head < Q.length) {
            var q = Q[head++];
            for (var _i = 0, _a = [[1, 0], [-1, 0], [0, 1], [0, -1]]; _i < _a.length; _i++) {
                var _b = _a[_i], dx = _b[0], dy = _b[1];
                var x = q.x + dx;
                var y = q.y + dy;
                if (x < 0 || x >= size || y < 0 || y >= size) {
                    continue;
                }
                if (searched[x][y] !== true) {
                    var t = g.at(new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y));
                    if (t === null) {
                        tight = false;
                    }
                    else {
                        if (t.player === m.player) {
                            Q.push(new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y));
                        }
                        else {
                            bound.push(new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y));
                        }
                    }
                    searched[x][y] = true;
                }
            }
        }
        return [bound, Q, tight];
    };
    return Go;
}(_base_Rule__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Go);


/***/ }),

/***/ "./src/app/utils/rules/Gomuku.ts":
/*!***************************************!*\
  !*** ./src/app/utils/rules/Gomuku.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _base_Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Rule */ "./src/app/utils/base/Rule.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Gomuku = /** @class */ (function (_super) {
    __extends(Gomuku, _super);
    function Gomuku() {
        return _super.call(this) || this;
    }
    Gomuku.prototype.play = function (games, m) {
        if (m instanceof _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            var g = games.current().clone();
            g.move(m);
            return [g, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None];
        }
        return [null, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None];
    };
    return Gomuku;
}(_base_Rule__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Gomuku);


/***/ }),

/***/ "./src/app/utils/rules/Renju.ts":
/*!**************************************!*\
  !*** ./src/app/utils/rules/Renju.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/define */ "./src/app/utils/base/define.ts");
/* harmony import */ var _base_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Point */ "./src/app/utils/base/Point.ts");
/* harmony import */ var _base_Rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Rule */ "./src/app/utils/base/Rule.ts");
/* harmony import */ var _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/moves/BoardPlay */ "./src/app/utils/base/moves/BoardPlay.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Renju = /** @class */ (function (_super) {
    __extends(Renju, _super);
    function Renju(open3) {
        if (open3 === void 0) { open3 = _base_define__WEBPACK_IMPORTED_MODULE_0__["OPEN3"].RIF; }
        var _this = _super.call(this) || this;
        _this.open3 = _base_define__WEBPACK_IMPORTED_MODULE_0__["OPEN3"].RIF;
        _this.open3 = open3;
        return _this;
    }
    Renju.prototype.play = function (games, m) {
        if (m instanceof _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            var game = games.current().clone();
            var f = _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None;
            if (m.player === _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black) {
                f = this.test(game, m.position);
                if (f === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Five) {
                    f = _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None;
                }
            }
            if (f === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None) {
                var g = games.current().clone();
                g.move(m);
                return [g, f];
            }
            return [null, f];
        }
        return [null, _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None];
    };
    Renju.prototype.test = function (game, p) {
        if (game === null) {
            return _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None;
        }
        var adjSame = Array(8).fill(0);
        var adjEmpty = Array(8).fill(0);
        var jumpSame = Array(8).fill(0);
        var jumpEmpty = Array(8).fill(0);
        var jumpJumpSame = Array(8).fill(0);
        var d = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
        var size = game.size;
        for (var dir = 0; dir < 8; dir++) {
            var _a = d[dir], dx = _a[0], dy = _a[1];
            var q = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](p.x + dx, p.y + dy);
            while (!this.outBoard(q, size) && game.isPositionPlayer(q, _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black)) {
                adjSame[dir] += 1;
                q = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionEmpty(q)) {
                adjEmpty[dir] += 1;
                q = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionPlayer(q, _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black)) {
                jumpSame[dir] += 1;
                q = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionEmpty(q)) {
                jumpEmpty[dir] += 1;
                q = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](q.x + dx, q.y + dy);
            }
            while (!this.outBoard(q, size) && game.isPositionPlayer(q, _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black)) {
                jumpJumpSame[dir] += 1;
                q = new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](q.x + dx, q.y + dy);
            }
        }
        // five
        for (var dir = 0; dir < 4; dir++) {
            if (adjSame[dir] + adjSame[dir + 4] === 4) {
                return _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Five;
            }
        }
        var three = 0;
        var four = 0;
        var _loop_1 = function (dir) {
            var row = adjSame[dir] + 1 + adjSame[dir + 4];
            // overline?
            if (row > 5) {
                return { value: _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Overline };
            }
            if (row === 4) {
                // open four? (two side empty)
                // half open four? (one side empty)
                var isFour = false;
                if (adjEmpty[dir] > 0) {
                    if (this_1.check(game, p, d[dir].map(function (a) { return a * (adjSame[dir] + 1); }), 1 /* Four */)) {
                        isFour = true;
                    }
                }
                if (adjEmpty[dir + 4] > 0) {
                    if (this_1.check(game, p, d[dir + 4].map(function (a) { return a * (adjSame[dir + 4] + 1); }), 1 /* Four */)) {
                        isFour = true;
                    }
                }
                if (isFour) {
                    four += 1;
                }
            }
            else if (row === 3) {
                // half open four?
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 1) {
                    if (this_1.check(game, p, d[dir].map(function (a) { return a * (adjSame[dir] + 1); }), 1 /* Four */)) {
                        four += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 1) {
                    if (this_1.check(game, p, d[dir + 4].map(function (a) { return a * (adjSame[dir + 4] + 1); }), 1 /* Four */)) {
                        four += 1;
                    }
                }
                // open three?
                var isThree = false;
                if ((adjEmpty[dir] > 2 // left open, ...ooo.
                    || adjEmpty[dir] === 2 && jumpSame[dir] === 0) // left open, x.?ooo.
                    && (adjEmpty[dir + 4] > 1 // right open, .ooo...
                        || adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 0)) {
                    if (this_1.check(game, p, d[dir].map(function (a) { return a * (adjSame[dir] + 1); }), 0 /* Three */)) {
                        isThree = true;
                    }
                }
                if ((adjEmpty[dir + 4] > 2 // right open, .ooo?..
                    || adjEmpty[dir + 4] === 2 && jumpSame[dir + 4] === 0) // right open, .ooo?.x
                    && (adjEmpty[dir] > 1 // left open, ...ooo.
                        || adjEmpty[dir] === 1 && jumpSame[dir] === 0)) {
                    if (this_1.check(game, p, d[dir + 4].map(function (a) { return a * (adjSame[dir + 4] + 1); }), 0 /* Three */)) {
                        isThree = true;
                    }
                }
                if (isThree) {
                    three += 1;
                }
            }
            else if (row === 2) {
                // four?
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 2) {
                    if (this_1.check(game, p, d[dir].map(function (a) { return a * (adjSame[dir] + 1); }), 1 /* Four */)) {
                        four += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 2) {
                    if (this_1.check(game, p, d[dir + 4].map(function (a) { return a * (adjSame[dir + 4] + 1); }), 1 /* Four */)) {
                        four += 1;
                    }
                }
                // three
                // .?o.oO..
                // x?o.oO..
                // .?o.oO.x
                //  x?o.oO.x
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 1 &&
                    (jumpEmpty[dir] > 1 || jumpEmpty[dir] === 1 && jumpJumpSame[dir] === 0) &&
                    (adjEmpty[dir + 4] > 1 || adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 0)) {
                    if (this_1.check(game, p, d[dir].map(function (a) { return a * (adjSame[dir] + 1); }), 0 /* Three */)) {
                        three += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 1 &&
                    (jumpEmpty[dir + 4] > 1 || jumpEmpty[dir + 4] === 1 && jumpJumpSame[dir + 4] === 0) &&
                    (adjEmpty[dir] > 1 || adjEmpty[dir] === 1 && jumpSame[dir] === 0)) {
                    if (this_1.check(game, p, d[dir + 4].map(function (a) { return a * (adjSame[dir + 4] + 1); }), 0 /* Three */)) {
                        three += 1;
                    }
                }
            }
            else if (row === 1) {
                // four
                if (jumpEmpty[dir] === 1 && jumpSame[dir] === 3) {
                    if (this_1.check(game, p, d[dir], 1 /* Four */)) {
                        four += 1;
                    }
                }
                if (jumpEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 3) {
                    if (this_1.check(game, p, d[dir + 4], 1 /* Four */)) {
                        four += 1;
                    }
                }
                // three
                // .oo.o.
                if (adjEmpty[dir] === 1 && jumpSame[dir] === 2 &&
                    (jumpEmpty[dir] > 1 || jumpEmpty[dir] === 1 && jumpJumpSame[dir] === 0) &&
                    (adjEmpty[dir + 4] > 1 || adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 0)) {
                    if (this_1.check(game, p, d[dir], 0 /* Three */)) {
                        three += 1;
                    }
                }
                if (adjEmpty[dir + 4] === 1 && jumpSame[dir + 4] === 2 &&
                    (jumpEmpty[dir + 4] > 1 || jumpEmpty[dir + 4] === 1 && jumpJumpSame[dir + 4] === 0) &&
                    (adjEmpty[dir] > 1 || adjEmpty[dir] === 1 && jumpSame[dir] === 0)) {
                    if (this_1.check(game, p, d[dir + 4], 0 /* Three */)) {
                        three += 1;
                    }
                }
            }
        };
        var this_1 = this;
        for (var dir = 0; dir < 4; dir++) {
            var state_1 = _loop_1(dir);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (four > 1) {
            return _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].DoubleFour;
        }
        if (three > 1) {
            return _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].DoubleThree;
        }
        return _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None;
    };
    Renju.prototype.outBoard = function (p, size) {
        return p.x < 0 || p.x >= size || p.y < 0 || p.y >= size;
    };
    Renju.prototype.check = function (game, p, d, checkfor) {
        var m = new _base_moves_BoardPlay__WEBPACK_IMPORTED_MODULE_3__["default"](p, _base_define__WEBPACK_IMPORTED_MODULE_0__["PLAYER"].Black, game.nextStep());
        game.move(m);
        var dx = d[0], dy = d[1];
        var result = this.test(game, new _base_Point__WEBPACK_IMPORTED_MODULE_1__["default"](p.x + dx, p.y + dy));
        game.undoLastMove();
        if (this.open3 === _base_define__WEBPACK_IMPORTED_MODULE_0__["OPEN3"].RIF) {
            if (checkfor === 0 /* Three */) {
                return result === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None || result !== _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Five;
            }
            return result === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None || result === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Five;
        }
        return result === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].None || result === _base_define__WEBPACK_IMPORTED_MODULE_0__["FORBIDDEN"].Five;
    };
    return Renju;
}(_base_Rule__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Renju);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Github\board\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map