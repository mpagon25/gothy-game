class StaticObject{

    constructor(x, y, image){
        this._posX = x;
        this._posY = y;
        this._img = image;
        this._width = this._img.width;
        this._height = this._img.height;
    }

    set posX( x ){
        this._posX = x;
    }

    get posX(){
        return this._posX;
    }

    set posY( y ){
        this._posY = y;
    }

    get posY(){
        return this._posY;
    }

    set img( image ){
        this._img = image;
    }

    get img(){
        return this._img;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    updatePosition( x, y ){
        this._posX = x;
        this._posY = y;

    }
    
}