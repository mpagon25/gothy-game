class GameMapService{

    createMap(){
        let backGround = new BackGround(0,0,ImageLoader.getImage('background'));
        let frame = new Frame(0,0,ImageLoader.getImage('frame'));
        let gameMap = new GameMap(backGround, frame);
        return gameMap;
    }

    moveMapForward( velocity, gameMap, game, player, canvas ){
    
        if((player.posX + player.width) > (canvas.width/3) && (player.posX + player.width) < canvas.width){
    
            gameMap.backG.posX = game.lvl.backG.posX - velocity/5;
            gameMap.frame.posX = game.lvl.frame.posX - velocity; 
            for(let i = 0; i < game.bugs.length; i++){
                game.bugs[i].posX = game.bugs[i].posX - velocity;
      
            } 
    
        }
    }
}