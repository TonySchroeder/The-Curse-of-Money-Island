class Treasure extends MovableObject {
    height = 60;
    width = 60;
    // x = 400;
    // y = 410;

    xBox = this.x;
    yBox = this.y;
    heightBox = this.height;
    widthBox = this.width;
    constructor(x, y) {
        super().loadImage('treasures/3.png');
        this.x = x;
        this.y = y;
    }
}