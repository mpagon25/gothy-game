class Player extends GameObject{
    constructor(imgRight, imgLeft,posX, posY){
        super(imgRight, posX, posY);
        this.imgLeft = imgLeft;
        this.imgRight = imgRight;
        this.isRight = true;
        this.isLeft = false;
        


    }
}