class GameController {
  constructor() {
    this.splash = document.querySelector('#splashScreen');
    this.playground = document.querySelector('#playground');
    this.gameOverScreen = document.querySelector('#gameOverScreen');
    this.mapService = new MapService();
    this.gameService = new GameService();
    this.playerService = new PlayerService();
    this.enemyService = new EnemyService();
  }

  showGameScreen() {
    this.splash.style.display = 'none';
    this.playground.style.display = 'inline-block';
    this.gameOverScreen.style.display = 'none';
  }

  showGameOverScreen() {
    this.splash.style.display = 'none';
    this.playground.style.display = 'none';
    this.gameOverScreen.style.display = 'flex';
  }

  createGame() {
    const newGame = this.gameService.createGame(
      this.playground.getContext('2d'),
      this.playerService.createPlayer(),
      this.mapService.createMap()
    );
    return newGame;
  }

  moveMapForward = (gameMap) => {
    this.mapService.moveMapForward(gameMap);
  };

  playerGravity = (player) => {
    this.playerService.moveDown(player);
  };

  addEnemyToList = (enemies) => {
    this.enemyService.addEnemyToList(enemies);
  };

  removeEnemyFromList = (enemies) => {
    this.enemyService.removeEnemyFromList(enemies);
  };

  moveEnemies = (enemies) => {
    this.enemyService.moveEnemies(enemies);
  };
}
