class GameController {
  constructor() {
    this.splash = document.querySelector('#splashScreen');
    this.playground = document.querySelector('#playground');
    this.gameOverScreen = document.querySelector('#gameOverScreen');
    this.mapService = new MapService();
    this.gameService = new GameService();
    this.playerService = new PlayerService();
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
}
