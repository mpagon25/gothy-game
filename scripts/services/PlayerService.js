class PlayerService {
  constructor() {
    // this.drawer = new DrawService();
    this.count = 0;
  }

  createPlayer() {
    let newPlayer = new Player(
      5,
      225,
      ImageLoader.getImage('pLeft'),
      ImageLoader.getImage('pRight')
    );
    return newPlayer;
  }

  turnLeft(player) {
    player._isLookingFwrd = false;
    this.updateLookDirection(player);
  }

  turnRight(player) {
    player._isLookingFwrd = true;
    this.updateLookDirection(player);
  }

  moveDown(player, value = 1) {
    player.posY = player.posY + value;
  }

  updateLookDirection = (player) => {
    if (!player._isLookingFwrd) {
      player.currentImg = player.leftImg;
    } else {
      player.currentImg = player.rightImg;
    }
  };

  flyAnimation(player) {
    if (this.count > 0) {
      this.intervalId = requestAnimationFrame(this.flyAnimation.bind(player));
      if (player._isLookingFwrd == true) {
        player.posX = player.posX + 14;
        player.posY = player.posY - 20;
      } else {
        player.posX = player.posX - 14;
        player.posY = player.posY - 20;
      }
      // this.playerBugCollision(game.player, game.bugs);
      // this.drawer.drawScene(game);
      this.count--;
    } else {
      cancelAnimationFrame(this.intervalId);
    }
  }

  playerFly(player) {
    this.count = 10;
    this.flyAnimation(player);
    this.intervalId = 0;
  }
}
