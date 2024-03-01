class GameRunner {
  constructor() {
    this.gameController = new GameController();
    this.drawService = new DrawService();
    this.game = this.gameController.createGame();
  }

  init = () => {
    this.gameController.showGameScreen();
  };

  run = () => {
    this.drawService.drawScene(this.game);

    let intervalId = 0;
    if (!this.game.isGameOver) {
      intervalId = window.requestAnimationFrame(this.run);
      this.drawService.drawScene(this.game);
    }
  };
}
