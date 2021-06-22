class PlayerService{
    constructor(){
        this.drawer = new Draw();
    };

    addPlayer(){
        let newPlayer = new Player(0,0, ImageLoader.getImage('pLeft'), ImageLoader.getImage('pRight'));
        return newPlayer;
    };


    turnLeft(player, game){
        player.looksRight = false;
        player.img = player.leftImg;
        this.drawer.drawScene(game);
        return player;
    };

    turnRight(player, game){
        player.looksRight = true;
        player.img = player.rightImg;
        this.drawer.drawScene(game);
        return player;
    };

    moveDown(player, value){
        player.posY = player.posY + value;
        this.drawer.drawScene(game);
        return player;

    };

    flyAnimation(){

        if(this.count > 0){
            this.intervalId = requestAnimationFrame(this.flyAnimation.bind(this));

            ////////

            if(this.game.player.looksRight == true){
                this.game.player.posX = this.game.player.posX + 7;
                this.game.player.posY = this.game.player.posY - 5;


            }else {
                this.game.player.posX = this.game.player.posX - 7;
                this.game.player.posY = this.game.player.posY - 5;

    
            }
            this.playerBugCollision(this.game.player, this.game.bugs);
            this.drawer.drawScene(this.game);
            this.count--;

            
        }else{
            cancelAnimationFrame(this.intervalId);
        }

    };

    playerFly(game){
        this.game = game;
        this.count = 10;
        this.flyAnimation();
        this.intervalId = 0;
    };



}