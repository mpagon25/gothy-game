class Player {
  constructor(startX, startY, leftImage, rightImage) {
    this._posX = startX;
    this._posY = startY;
    this.currentImg = rightImage;
    this._isLookingFwrd = true;
    this.leftImg = leftImage;
    this.rightImg = rightImage;
    this._width = this.rightImg.width;
    this._height = this.rightImg.height;
  }

  set posX(x) {
    this._posX = x;
  }

  get posX() {
    return this._posX;
  }

  set posY(y) {
    this._posY = y;
  }

  get posY() {
    return this._posY;
  }

  set img(img) {
    this.currentImg = img;
  }

  get img() {
    return this.currentImg;
  }

  set isLookingFwrd(bool) {
    this._isLookingFwrd = bool;
  }

  get isLookingFwrd() {
    return this._isLookingFwrd;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}
