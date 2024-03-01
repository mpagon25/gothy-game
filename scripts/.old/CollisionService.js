class CollisionService {
  checkBorderCollision(player, ctx, game) {
    if (player.posY + player.height > ctx.canvas.height) {
      player.posY = ctx.canvas.height - player.height;
      game.isGameOver = true;
      return;
    }
    if (player.posY < 0) {
      player.posY = 0;
    }
    if (player.posX + player.width > ctx.canvas.width - 90) {
      player.posX = ctx.canvas.width - player.width - 95;
    }
    if (player.posX < 0) {
      player.posX = 0;
    }
  }

  checkBugCollsion(player, bugs, game) {
    bugs.forEach((bug) => {
      if (
        player.posX + player.width > bug.posX &&
        player.posX < bug.posX + bug.width
      ) {
        if (
          player.posY + player.height > bug.posY &&
          player.posY < bug.posY + bug.width
        ) {
          game.isGameOver = true;
          return;
        }
      }
    });
  }
}
