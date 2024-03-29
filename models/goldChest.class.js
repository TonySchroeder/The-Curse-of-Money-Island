class goldChest extends MovableObject {
    height = 200;
    width = 300;

    offSetX = 100;
    offSetY = 100;
    offSetWidth = 200;
    offSetHeight = 200;


    /**
     * draw the chest
     * 
     * @param {*} x - positioning on the x axis
     * @param {*} y - positioning on the y axis
     */
    constructor(x, y) {
        super().loadImage('Goldchest/treasure-chest-152499_640.png');
        this.x = x;
        this.y = y;
    }
}