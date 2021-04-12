class Player{
    constructor(startX, startY, leftImage, rightImage ){
        this._posX = startX;
        this._posY = startY;
        this._currentImg = rightImage;
        this._looksRight = true;
        this.leftImg = leftImage;
        this.rightImg = rightImage;
        this._width = this.rightImg.width;
        this._height = this.rightImg.height;
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

    set img( img ){
        this._currentImg = img;
    }

    get img(){
        return this._currentImg;
    }

    set looksRight( bool ){
        this._looksRight = bool;
    }
    get looksRight (){
        return this._looksRight;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
}