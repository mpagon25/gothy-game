class ImageLoader {
  static getImage(imageName) {
    let img = new Image();
    switch (imageName) {
      case 'pLeft':
        img.src = '../img/player/BatLeft.png';
        break;
      case 'pRight':
        img.src = '../img/player/BatRight.png';
        break;
      case 'background':
        img.src = '../img/backgrounds/Gotham-BackGround.png';
        break;
      case 'frame':
        img.src = '../img/frames/FrameWood.png';
        break;
      case 'bugOne':
        img.src = '../img/bugs/Bug2.png';
        break;
      case 'bugTwo':
        img.src = '../img/bugs/Bug2.png';
        break;
      case 'bush':
        img.src = '../img/obstacles/Obstacle1.png';
        break;
    }
    return img;
  }
}
