class GameOBject{
    constructor(){
        this.img = '';
        this.posX = 0;
        this.posY = 0;
        this.width = 0;
        this.height = 0;        
    }
// Getter & Setter

 
    getImg(){
        return this.img;
    }

    setImg(img){
        this.img = img;
    }

    getPosX(){
        return this.posX;
    }

    setPosX(posX){
        this.posX = posX;
    }

    getPosY(){
        return this.posX;
    }

    setPosY(posY){
        this.posY = posY;
    }

    getWidth(){
        return this.width;
    }

    setWidth(width){
        this.width = width;
    }

    getHeight(){
        return this.height;
    }

    setHeight(height){
        this.height = height;
    }
}