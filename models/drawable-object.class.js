class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x;
    y;
    height;
    width;
    treasure = 0;
    bombs = 5;


    /**
     * load the respective image
     * 
     * @param {string} path 
     */
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" scr>
        this.img.src = path;
    }


    /**
     * draw the object in the canvas
     * 
     * @param {class} ctx - context of the class
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error type:', e);
            console.log('image', this.img.src);
        }
    }


    /**
     * draw a number
     * 
     * @param {class} ctx - context of the class
     */
    drawMoneyNumber(ctx) {
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("55", 170, 180);
    }


    /**
     * load the array to animate
     * 
     * @param {Array} arr - array with images to animate
     */
    loadImagesArray(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }


    /**
     * drawing the frame around objects
     * 
     * @param {class} ctx - context of the class 
     */
    drawFrame(ctx) {
        // if (this instanceof Character) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '1';
        //     ctx.strokeStyle = 'blue';
        //     ctx.rect(this.x + this.offSetX, this.y + this.offSetY, this.width - this.offSetWidth, this.height - this.offSetHeight);
        //     ctx.stroke();
        // }
        // if (this instanceof Enemies) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '1';
        //     ctx.strokeStyle = 'red';
        //     ctx.rect(this.x + this.offSetX, this.y + this.offSetY, this.width - this.offSetWidth, this.height - this.offSetHeight);
        //     ctx.stroke();
        // }
        // if (this instanceof Endboss) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '1';
        //     ctx.strokeStyle = 'black';
        //     ctx.rect(this.x + this.offSetX, this.y + this.offSetY, this.width - this.offSetWidth, this.height - this.offSetHeight);
        //     ctx.stroke();
        // }
        // if (this instanceof Treasure) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '1';
        //     ctx.strokeStyle = 'yellow';
        //     ctx.rect(this.x, this.y, this.width - 60, this.height);
        //     ctx.stroke();
        // }
        // if (this instanceof bomb) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '1';
        //     ctx.strokeStyle = 'grey';
        //     ctx.rect(this.x + 100, this.y + 100, this.width - 200, this.height - 200);
        //     ctx.stroke();
        // }
        // if (this instanceof ThrowableObject) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '1';
        //     ctx.strokeStyle = 'grey';
        //     ctx.rect(this.x + this.offSetX, this.y + this.offSetY, this.width - this.offSetWidth, this.height - this.offSetHeight);
        //     ctx.stroke();
        // }
    }



}