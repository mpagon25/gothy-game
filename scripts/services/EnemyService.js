class EnemyService {
  createEnemy = (type) => {
    let enemyImg = null;
    switch (type) {
      case 'first':
        enemyImg = ImageLoader.getImage('bugOne');
        break;
      case 'second':
      default:
        enemyImg = ImageLoader.getImage('bugTwo');
        break;
    }

    const newEnemy = new Enemy(900, 225, enemyImg);
    return newEnemy;
  };

  addEnemyToList = (enemies) => {
    const newEnemy = this.createEnemy();
    enemies.push(newEnemy);
  };

  removeEnemyFromList = (enemies) => {
    enemies.shift();
  };

  moveEnemies = (enemies) => {
    enemies.map((enemy) => {
      enemy._posX -= 5;
    });
  };
}
