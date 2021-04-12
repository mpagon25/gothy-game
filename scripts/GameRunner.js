

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let resBtn = document.querySelector('#restart');
let startBtn = document.querySelector('#start');
let splash = document.querySelector('#splashScreen');
let gameOver = document.querySelector('#gameOverScreen');

//images
let backGImg = new Image();
backGImg.src = '../img/backgrounds/Gotham-BackGround.png';
let frmImg = new Image();
frmImg.src = '../img/frames/FrameWood.png';
let bushImg = new Image();
bushImg.src = '../img/obstacles/Obstacle1.png';
let bugImg = new Image();
bugImg.src= '../img/bugs/Bug2.png';

let plImgRight = new Image();
plImgRight.src = '../img/player/BatRight.png';
let plImgLeft = new Image();
plImgLeft.src = '../img/player/BatLeft.png';

//objects
let drawer = new Draw();
let backG = new BackGround( 0, 0, backGImg );
let frame = new Frame( 0, 0, frmImg);

let gameLvl = new Level( backG, frame );
let player = new Player( 5, canvas.height/2 - plImgRight.width/2, plImgLeft, plImgRight);

let game = new Game(gameLvl, player, 3, ctx);
let pCntrl = new PlayerControl();


// set start screen

function setStartScreen(){
    resBtn.style.display = 'none';
    gameOver.style.display = 'none';
    

}

function setGameScreen(){
    splash.style.display = 'none';
    startBtn.style.display = 'none';
    gameOver.style.display = 'none';
    resBtn.style.display = 'none';
    canvas.style.display = 'inline-block';
    drawer.drawScene(game, ctx);


}

function setGameOverScreen(){

    splash.style.display = 'none';
    startBtn.style.display = 'none';
    canvas.style.display = 'none';

    gameOver.style.display = 'flex';
    resBtn.style.display = 'inline-block';

    
}

function resetPosition(){
    game.player.posX = 5;
    game.lvl.backG.posX = 0;
    game.lvl.frame.posX = 0;
    game.bugs = [];
    

}



function addBugs(){
    if(game.bugs.length == 0){
        let newbug =  new Bug(canvas.width + 150, (canvas.height/2) - bugImg.height, bugImg); 
        game.bugs.push(newbug);
        
  

     
    }
    

    for(let i = 0; i < game.bugs.length; i++){
        

        if(game.bugs[i].posX + game.bugs[i].width == canvas.width - 100){

            let newbug =  new Bug(canvas.width + Math.floor(Math.random()*200), 50 + Math.floor(Math.random()*400), bugImg);
            game.bugs.push(newbug);
            
            

        }
        if((game.bugs[i].posX + game.bugs[i].width) < 0){
            game.bugs.splice(i,1);               

        }



    }

}

function moveLevelForward( value ){
    
    if((game.player.posX + game.player.width) > (canvas.width/3) && (game.player.posX + game.player.width) < canvas.width){

        game.lvl.backG.posX = game.lvl.backG.posX - value/5;
        game.lvl.frame.posX = game.lvl.frame.posX - value; 
        for(let i = 0; i < game.bugs.length; i++){
            game.bugs[i].posX = game.bugs[i].posX - value;
  
        } 

    }
}






function run(){
    let intervalId = 0;
    if(game.isGameOver == false){
        intervalId = window.requestAnimationFrame(run);
        drawer.drawScene(game);
        
        

        addBugs();
        pCntrl.playerBugCollision(game.player, game.bugs, game);
        pCntrl.playerBorderCollision(game.player, game.ctx, game);
        pCntrl.moveDown(game.player, 1.5);
        moveLevelForward(1);



    }else {
        cancelAnimationFrame(intervalId);
        setGameOverScreen();

    }
}



window.addEventListener('load',()=>{
    setStartScreen();

    startBtn.addEventListener('click',()=>{
        setGameScreen();
        run();
    })

    resBtn.addEventListener('click',()=>{
        resetPosition();
        setGameScreen();
        run();

    })
    



});

window.addEventListener('keydown',(event)=>{
    if(event.code == 'ArrowLeft'){
        pCntrl.turnLeft(game.player, game);


    }else if(event.code == 'ArrowRight'){
        pCntrl.turnRight(game.player, game);


    }else if(event.code == 'Space'){
        pCntrl.playerFly(game, 10)

    }
    
})