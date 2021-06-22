class PlayerService{
    constructor(){
        this.drawer = new Draw();
    }

    addPlayer(){
        let newPlayer = new Player(0,0, ImageLoader.getImage('pLeft'), ImageLoader.getImage('pRight'));
        return newPlayer;
    }


    turnLeft(player, game){
        player.looksRight = false;
        player.img = player.leftImg;
        this.drawer.drawScene(game);
        return player;
    }

    turnRight(player, game){
        player.looksRight = true;
        player.img = player.rightImg;
        this.drawer.drawScene(game);
        return player;
    }

    moveDown(player, value){
        player.posY = player.posY + value;
        this.drawer.drawScene(game);
        return player;

    }

    playerBorderCollision(player, ctx, game){
        if(player.posY + player.height > ctx.canvas.height ){
            player.posY = ctx.canvas.height - player.height;
            game.isGameOver = true;  
            return;

        }
        if(player.posY < 0 ){
            player.posY = 0;            

        }        
        if(( player.posX + player.width > ctx.canvas.width - 90 ) ){             
            player.posX = ctx.canvas.width - player.width - 95;            

        }
        if(( player.posX < 0) ){          
            player.posX = 0;
            

        }
        

    }

    playerBugCollision(player, bugs, game){

        bugs.forEach(( bug )=>{
          
            if(player.posX + player.width > bug.posX &&  player.posX < bug.posX + bug.width){                
                if(player.posY + player.height > bug.posY && player.posY < bug.posY + bug.width){
                    game.isGameOver = true;
                    return; 
                    

                    
                }
    
            }

        });




    }


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

    }

    playerFly(game){
        this.game = game;
        this.count = 10;
        this.flyAnimation();
        this.intervalId = 0;
    }



}