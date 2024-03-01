class GameRunner {
  constructor() {
    this.splash = document.querySelector('#splashScreen');
    this.playground = document.querySelector('#playground');
    this.gameOverScreen = document.querySelector('#gameOverScreen');
  }

  initGame() {
    this.splash.style.display = 'none';
    this.playground.style.display = 'inline-block';
    this.gameOverScreen.style.display = 'none';
  }

  gameOver() {
    this.splash.style.display = 'none';
    this.playground.style.display = 'none';
    this.gameOverScreen.style.display = 'flex';
  }

  run() {}
}
