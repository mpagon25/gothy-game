class GameObject{
    constructor(){
        this.img = '';
        this.posX = 0;
        this.posY = 0;
        this.width = 0;
        this.height = 0;        
    }
// Getter & Setter
    //image
 
    getImg(){
        return this.img;
    }
    setImg(img){
        this.img = img;
    }

    // x position
    getPosX(){
        return this.posX;
    }
    setPosX(posX){
        this.posX = posX;
    }

    // y position
    getPosY(){
        return this.posX;
    }
    setPosY(posY){
        this.posY = posY;
    }

    // width of object
    getWidth(){
        return this.width;
    }
    setWidth(width){
        this.width = width;
    }

    // height of object
    getHeight(){
        return this.height;
    }
    setHeight(height){
        this.height = height;
    }
}