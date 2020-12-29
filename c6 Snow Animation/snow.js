const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;
class Snow {
    constructor(flakesOnScreen) {
        this.flakesOnScreen = flakesOnScreen;
        this.flakesArray = [];


    }
    random(min, max) {
        return min + Math.random() * (max - min + 1);
    };

    CreateSnowFlakes() {
        for (let i = 0; i < this.flakesOnScreen; i++) {
            this.flakesArray.push({
                x: Math.random() * w,
                y: Math.random() * h,
                opacity: Math.random(),
                speedX: this.random(-11, 11),
                speedY: this.random(7, 15),
                radius: this.random(0.5, 4.2),
            })
        }
        console.log(this.flakesArray);

    };

    DrawSnowFlakes() {
        let arr = snow.flakesArray;
        for (let i in arr) {
            // let x = this.flakesArray[i].x;
            // let y = this.flakesArray[i].y;
            // let im = this.random(25, 70);
            // this.flakesArray[i] = new Image();
            // this.flakesArray[i].addEventListener("load", function() {
            //     ctx.drawImage(this, x, y, im, im)
            // });

            // this.flakesArray[i].src = "./falkes/f" + Math.round(this.random(1, 2)) + ".png";

            ctx.beginPath();
            ctx.arc(arr[i].x, arr[i].y, arr[i].radius, 0, 10 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
        }
        window.requestAnimationFrame(snow.DrawSnowFlakes)
    };

    MoveSnow() {
        let arr = snow.flakesArray
        for (let i in arr) {

            arr[i].x += arr[i].speedX;
            arr[i].y += arr[i].speedY;

            if (arr[i].y > h) {
                arr[i].x = Math.random() * w * 1.5;
                arr[i].y = -50;
            }
        }
        // console.log('1');
        window.requestAnimationFrame(snow.MoveSnow)
    };

    Clear() {
        ctx.clearRect(0, 0, w, h)
        window.requestAnimationFrame(snow.Clear)
    }
    Update() {
        this.Clear();
        this.DrawSnowFlakes();
        this.MoveSnow();
    }

    PlaySnow() {
        this.CreateSnowFlakes();
    }
}