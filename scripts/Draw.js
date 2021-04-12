class Draw{



    drawScene( game ){
        game.ctx.clearRect(0,0,game.ctx.canvas.width,game.ctx.canvas.height);           

        game.ctx.beginPath();
        game.ctx.drawImage(game.lvl.backG.img, game.lvl.backG.posX, game.lvl.backG.posY);
        game.ctx.closePath();

        game.ctx.beginPath();
        game.ctx.drawImage(game.player.img, game.player.posX, game.player.posY);
        game.ctx.closePath();



        if( game.bugs.length > 0 ){

            for(let i = 0; i < game.bugs.length; i++){

                ctx.beginPath();
                ctx.drawImage(game.bugs[i].img, game.bugs[i].posX, game.bugs[i].posY);
                ctx.closePath();
    
             }

        }





        game.ctx.beginPath();
        game.ctx.drawImage(game.lvl.frame.img, game.lvl.frame.posX, game.lvl.frame.posY);
        game.ctx.closePath();

    }


}