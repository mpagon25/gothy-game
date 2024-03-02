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
      this.drawService.drawScene(this.game);
      this.gameController.mapService.moveMapForward(this.game.gameMap);
      this.gameController.playerService.moveDown(this.game.player);

      if (
        this.game.enemies.length <= 0 ||
        this.game.enemies.slice(-1)[0]._posX <= 500
      ) {
        this.gameController.addEnemyToList(this.game.enemies);
      } else if (this.game.enemies[0]._posX <= 0) {
        this.gameController.removeEnemyFromList(this.game.enemies);
      }
      this.gameController.moveEnemies(this.game.enemies);
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
