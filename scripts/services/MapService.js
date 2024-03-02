class MapService {
  createMap() {
    const backGround = new Background(0, 0, ImageLoader.getImage('background'));
    const frame = new Frame(0, 0, ImageLoader.getImage('frame'));
    const gameMap = new GameMap(backGround, frame);
    return gameMap;
  }

  moveMapForward(gameMap) {
    gameMap._backG._posX = gameMap._backG._posX - 1 / 5;
    gameMap._frame._posX = gameMap._frame._posX - 1;
    // for (let i = 0; i < game.bugs.length; i++) {
    //   game.bugs[i].posX = game.bugs[i].posX - velocity;
    // }
  }
}
