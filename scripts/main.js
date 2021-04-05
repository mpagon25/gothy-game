let canvas = document.querySelector('canvas');
let resBtn = document.querySelector('#restart');
let startBtn = document.querySelector('#start');
let bat = document.querySelector('#bat')
let ctx = canvas.getContext('2d');

function setStartScreen(){

    canvas.style.display = 'none';
    resBtn.style.display = 'none';
    bat.style.display = 'none';

    startBtn.addEventListener('click',()=>{
        startBtn.style.display = 'none';
        canvas.style.display ='inline-block';
        canvas.style.backgroundColor = 'grey';
        bat.style.display = 'inline-block';
        bat.style.width ='80px'

        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.arc(450/2,450/2,40,0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(200,200,100,40);
        ctx.closePath();

        let bg = new Image();
        bg.src = '../img/Bat.gif';
        
        ctx.beginPath();
        ctx.drawImage(bg, 0, 0);
        ctx.closePath();


    
        
    });

    
}



window.addEventListener('load', ()=>{
    setStartScreen();

   
});



