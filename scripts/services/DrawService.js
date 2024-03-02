class DrawService {
  drawScene(game) {
    game.ctx.clearRect(0, 0, game.ctx.canvas.width, game.ctx.canvas.height);

    game.ctx.beginPath();
    game.ctx.drawImage(
      game.gameMap._backG._img,
      game.gameMap._backG._posX,
      game.gameMap._backG._posY
    );
    game.ctx.closePath();

    game.ctx.beginPath();
    game.ctx.drawImage(
      game.player._currentImg,
      game.player._posX,
      game.player._posY
    );
    game.ctx.closePath();

    if (game.enemies.length > 0) {
      for (let i = 0; i < game.enemies.length; i++) {
        game.ctx.beginPath();
        game.ctx.drawImage(
          game.enemies[i]._img,
          game.enemies[i]._posX,
          game.enemies[i]._posY
        );
        game.ctx.closePath();
      }
    }

    game.ctx.beginPath();
    game.ctx.drawImage(
      game.gameMap._frame._img,
      game.gameMap._frame._posX,
      game.gameMap._frame._posY
    );
    game.ctx.closePath();
  }
}
