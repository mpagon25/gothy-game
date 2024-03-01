class GameService {
  createGame(ctx, player, gameMap) {
    const game = new Game(ctx, player, gameMap);
    return game;
  }
}
