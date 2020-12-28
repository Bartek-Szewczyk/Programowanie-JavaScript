class Snow {
    constructor(flakesOnScreen) {

        this.flakesOnScreen = flakesOnScreen;
        this.flakesArray = [];
        this.farr = new Array();
        this.w = canvas.width = window.innerWidth;
        this.h = canvas.height = window.innerHeight;
    }
    random(min, max) {
        return min + Math.random() * (max - min + 1);
    };
    CreateSnowFlakes() {
        for (let i = 0; i < this.flakesOnScreen; i++) {
            this.flakesArray.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                opacity: Math.random(),
                speedX: this.random(-11, 11),
                speedY: this.random(7, 15),
            })
        }
    };

    DrawSnowFlakes() {
        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');
        for (let i in this.flakesArray) {
            let x = this.flakesArray[i].x;
            let y = this.flakesArray[i].y;
            let im = this.random(25, 70);
            this.flakesArray[i] = new Image();
            this.flakesArray[i].addEventListener("load", function() {
                ctx.drawImage(this, x, y, im, im)
            });

            this.flakesArray[i].src = "./falkes/f" + Math.round(this.random(1, 3)) + ".png";
        }

    };
    MoveSnow() {
        for (let i = 0; i < this.flakesArray; i++) {
            this.flakesArray[i].x += this.flakesArray[i].speedX;
            this.flakesArray[i].y += this.flakesArray[i].speedY;

            if (this.flakesArray[i].y > this.h) {
                this.flakesArray[i].x = Math.random() * this.w * 1.5;
                this.flakesArray[i].y = -50;
            }
        }
    };
    updateSnowFall() {

        this.DrawSnow();
        this.MoveSnows();
    };
    PlaySnow() {
        this.CreateSnowFlakes();
        this.DrawSnowFlakes();
        this.MoveSnow()
    }

}