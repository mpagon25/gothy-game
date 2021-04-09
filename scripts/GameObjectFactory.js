class GameObjectFactory{


    createPlayer(img, imgLeft, posX, posY){

        return new Player(img, imgLeft, posX, posY);
    }

    createLevel(img, frame, posX, posY){
        return new Level(img, frame, posX, posY);

    }

    createFrame(img, posX, posY){
        return new Frame(img, posX, posY);

    }

    createObstacle(img, x, y){

        return new Obstacle(img, x, y);
    }
    
    createBug(img, x, y){
        return new Bug(img, x, y);
    }
}