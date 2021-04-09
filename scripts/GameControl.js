class GameControl{

    constructor(){
        this.cnt = 10;
        
    }


    draw(gameObject, lvl, ctx){   

    

        ctx.clearRect(ctx.canvas.width, ctx.canvas.height, 0, 0);
        //draw BG new
        ctx.beginPath();
        ctx.drawImage(lvl.img, lvl.x, lvl.y);
        ctx.closePath();

        ctx.beginPath();
        ctx.drawImage(gameObject.img, gameObject.x, gameObject.y);
        ctx.closePath();   

        //  draw frame new
         ctx.beginPath();
         ctx.drawImage(lvl.frame.img, lvl.frame.x, lvl.frame.y);
         ctx.closePath();
        // draw object

        if(lvl.bushes.length > 0){
            for(let i = 0; i < lvl.bushes.length; i++){
                ctx.beginPath();
                ctx.drawImage(lvl.bushes[i].img, lvl.bushes[i].x, lvl.bushes[i].y);
                ctx.closePath();
    
             }

        }

        if(lvl.bugs.length > 0){
            for(let i = 0; i < lvl.bugs.length; i++){
                console.log('test')
                ctx.beginPath();
                ctx.drawImage(lvl.bugs[i].img, lvl.bugs[i].x, lvl.bugs[i].y);
                ctx.closePath();
    
             }

        }

        
        
        
 


    }


    


    flyAnimation(){


        if(this.cnt > 0){
            requestAnimationFrame(this.flyAnimation.bind(this));

            ////////

            if(this.player.isRight == true){
                this.player.x += 10;
                this.player.y -= 5;


            }else if(this.player.isLeft == true){
                this.player.x -= 10;
                this.player.y -= 5;

    
            }




            
            this.collision(this.player, this.lvl, this.ctx);
            this.draw(this.player ,this.lvl ,ctx);
            this.cnt--;
            
        }else{
            this.cnt = 10;
        }
        
        

    }

    playerFly(player, lvl, ctx){
        this.player = player;
        this.lvl = lvl;
        this.ctx = ctx;
        this.flyAnimation();
        
        
        
    }


    turnLeft(player){
        this.player = player;
        this.player.isLeft = true;
        this.player.isRight = false;
        this.player.img = this.player.imgLeft;

    }

    turnRight(player){
        this.player = player;
        this.player.isLeft = false;
        this.player.isRight = true;
        this.player.img = this.player.imgRight;

    }

    moveLevelForward(lvl, player, value, ctx){
        this.lvl = lvl;
        this.value = value;
        this.player = player;
        this.ctx = ctx;
        this.lvl.x -= value / 10;
        this.lvl.frame.x -= value;
        for(let i = 0; i < this.lvl.bushes.length; i++){
            this.lvl.bushes[i].x -= this.value;
        }

        for(let j = 0; j < this.lvl.bugs.length; j++){
            this.lvl.bugs[j].x -= this.value;
        }
        
        //this.draw(player, lvl, lvl.frame, ctx);



        

    }

    collision(player, lvl, ctx){
        

        if(player.y + player.height > ctx.canvas.height ){
            player.y = ctx.canvas.height - player.height;


        }
        if(player.y < 0 ){
            player.y = 0;

        }
        
        if(( player.x + player.width > ctx.canvas.width - 150 ) ){ 
          
              
            
            player.x = ctx.canvas.width - player.width - 155;
            

        }
        if(( player.x < 0) ){       
              
            
            player.x = 0;
            

        }


    }

}