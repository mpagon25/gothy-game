let canvas = document.querySelector('canvas');
let resBtn = document.querySelector('#restart');
let startBtn = document.querySelector('#start');
// image sources
let backG = new Image();
backG.src = '../img/Gotham_Skyline_Backdrop_hell.png ';
let frmImg = new Image();
frmImg.src = '../img/Design_Frame.png';
let bushImg = new Image();
bushImg.src = '../img/Obstacle_200.png';
let bugImg = new Image();
bugImg.src= '../img/Bug2_Idle_80.png';

let plImgRight = new Image();
plImgRight.src = '../img/Bat_Idle_80.png';
let plImgLeft = new Image();
plImgLeft.src = '../img/Bat_Idle_80Left.png';

//////////
let gof = new GameObjectFactory();
let gc = new GameControl();
let ctx = canvas.getContext('2d');
let frame = gof.createFrame(frmImg, 0, 0);
let lvl = gof.createLevel(backG,frame,0,0);
let bush = gof.createObstacle(bushImg, canvas.width, canvas.height - bushImg.height);
let bug = gof.createBug(bugImg, canvas.width + 150, (canvas.height/2) - bugImg.height);
let bat = gof.createPlayer(plImgRight, plImgLeft, 10, canvas.height/2 - (plImgRight.height/2));


let runIntervalId = 0;
let isGameOver = false;
let dir = 'right';

///////
    ///Testvariables
let cnt = 0;

//////


window.addEventListener('keyup',(event)=>{
    
    
})

window.addEventListener('keydown',(event)=>{
    if(event.code == 'ArrowLeft'){
        gc.turnLeft(bat);
        // console.log('true',bat.isLeft);
        // console.log('false',bat.isRight);

    }else if(event.code == 'ArrowRight'){
        gc.turnRight(bat);
        // console.log('false',bat.isLeft);
        // console.log('true',bat.isRight);

    }else if(event.code == 'Space'){
        gc.playerFly(bat, lvl, ctx);

    }
    
})



lvl.bushes.push(bush);
lvl.bugs.push(bug);

function main(){
    if(isGameOver == false ){ 
       
        window.requestAnimationFrame(main);

        gc.draw(bat, lvl, ctx); 
        // main loop

        for(let i = 0; i < lvl.bushes.length; i++){

            
            if(lvl.bushes[i].x + lvl.bushes[i].width == canvas.width - 300){
                
                let newbush = gof.createObstacle(bushImg, canvas.width + Math.floor(Math.random()*200), lvl.bushes[i].y);
                lvl.bushes.push(newbush);

            }
            if((lvl.bushes[i].x + lvl.bushes[i].width) < 0){
                lvl.bushes.splice(i,1);

            }
        }

        for(let j = 0; j < lvl.bugs.length; j++){

            if(lvl.bugs[j].x + lvl.bugs[j].width == canvas.width - 200){

                let newbug = gof.createObstacle(bugImg, canvas.width + Math.floor(Math.random()*200), 75 + Math.floor(Math.random()*300));
                lvl.bugs.push(newbug);
                
         

            }
            if((lvl.bugs[j].x + lvl.bugs[j].width) < 0){

                lvl.bugs.splice(j,1);
               

            }



        }


         

        if(bat.y + bat.height > canvas.height ){
            bat.y = canvas.height - bat.height;
            isGameOver = true;
        }
        if(bat.y < 0 ){
            bat.y = 0;

        }
        if(bat.x + bat.width > 300 && bat.x + bat.width < canvas.width){
            gc.moveLevelForward(lvl, bat, 1, ctx);  
               

                   
            
            //bat.x = canvas.width - bat.width - 200 ;  
            

        }



 


        bat.y += 1.5;    
    }
    
    
    

}



window.addEventListener('load', ()=>{
    startBtn.style.display = 'none';
    resBtn.style.display = 'none';

    //begin
    ctx.beginPath();
    ctx.drawImage(lvl.img,0,0);
    ctx.closePath();
    ctx.beginPath();
    ctx.drawImage(lvl.frame.img,0,0);
    ctx.closePath();


    // run();
    main();
});




    



    






    







