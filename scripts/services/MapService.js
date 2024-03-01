class MapService {
  createMap() {
    const backGround = new Background(0, 0, ImageLoader.getImage('background'));
    const frame = new Frame(0, 0, ImageLoader.getImage('frame'));
    const gameMap = new GameMap(backGround, frame);
    return gameMap;
  }

  moveMapForward(gameMap) {
    gameMap.backG.posX = gameMap.backG.posX - 1 / 5;
    gameMap.frame.posX = gameMap.frame.posX - 1;
    // for (let i = 0; i < game.bugs.length; i++) {
    //   game.bugs[i].posX = game.bugs[i].posX - velocity;
    // }
  }
}
