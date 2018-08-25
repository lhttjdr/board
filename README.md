# Board: Single Page Application for GO/Renju/Gomoku

It is a web based chess board for Go/Renju/Gomoku. Now the project is in progess.

[demo](https://lhttjdr.github.io/board/)

## Plan

- [x] draw board with HTML5 Canvas
- [x] configable board size
- [x] configable game rule, including Go, Renju
- [x] Go: remove captured stones, detect forbidden point (for SuperKo, there are about 5 diferent rules)
- [x] Renju: detect forbidden point
- [x] Gomoku
- [x] Game Tree Operations
- [ ] **controversial issue** [Renju] complex forks.
- [ ] Mode: (1) Play -- two sides take turns to put stones, (2) Edit -- put stones arbitrarily, (3) readonly -- read game record
- [ ] advanced tools for edit mode: add special stones, add mark on stone, add text on board, add branch to game tree, etc.
- [ ] Kifu (Game record) file parser: sgf(text based), lib(binary based), etc.
- [ ] advanced Renju rules: 26 opens, swap, multi choices of the 5th move

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
