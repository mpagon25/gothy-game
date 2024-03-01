class Game {
  constructor() {
    this.isGameOver = false;
    this.lvl = null;
    this.player = null;
    this.obstacles = [];
    this.platforms = [];
    this.bugs = [];
    this.ctx = null;
  }

  initGame() {
    let plServ = new PlayerService();
    let gameMapServ = new GameMapService();
    let bugServ = new BugService();

    this.player = plServ.addPlayer();
  }
}
