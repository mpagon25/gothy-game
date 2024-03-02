class Player {
  constructor(startX, startY, leftImage, rightImage) {
    this._posX = startX;
    this._posY = startY;
    this._currentImg = rightImage;
    this._isLookingFwrd = true;
    this._leftImg = leftImage;
    this._rightImg = rightImage;
    this._width = this._rightImg.width;
    this._height = this._rightImg.height;
  }
}
