class GameMap{
    constructor( background, frame ) {
        this._backG = background;
        this._frame = frame;
    }


    set backG( background ){
        this._backG = background;
    }
    get backG(){
        return this._backG;
    }

    set frame( _rame ){
        this._frame = frame;
    }

    get frame (){
        return this._frame;
    }

}