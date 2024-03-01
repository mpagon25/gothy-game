const canvas = document.querySelector('#playground');

class GameRunner {
  constructor() {
    this.gameController = new GameController();
    this.drawService = new DrawService();
    this.game = this.gameController.createGame();
  }

  init = () => {
    this.gameController.showGameScreen();
    this.initPlayerControl();
  };

  run = () => {
    let intervalId = 0;
    if (!this.game.isGameOver) {
      intervalId = window.requestAnimationFrame(this.run);
      this.gameController.mapService.moveMapForward(this.game.gameMap);
      this.gameController.playerService.moveDown(this.game.player);
      this.drawService.drawScene(this.game);
    } else {
      window.cancelAnimationFrame(intervalId);
    }
  };

  initPlayerControl = () => {
    window.addEventListener('keydown', (event) => {
      if (event.code == 'ArrowLeft') {
        this.gameController.playerService.turnLeft(this.game.player);
      } else if (event.code == 'ArrowRight') {
        this.gameController.playerService.turnRight(this.game.player);
      } else if (event.code == 'Space') {
        this.gameController.playerService.playerFly(this.game.player, 10);
      }
    });
  };
}
