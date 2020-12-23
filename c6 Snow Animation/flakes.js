class Flakes {
    constructor(flakesCount) {
        this.canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        this.flakesCount = flakesCount;
        this.flakes = [];
        this.mX = -100;
        this.mY = -100;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log(this.flakesCount);
    }
    addFlakes() {
        for (let i = 0; i < this.flakesCount; i++) {
            x = Math.floor(Math.random() * canvas.width);
            y = Math.floor(Math.random() * canvas.height);
            size = (Math.random() * 3) + 2;
            speed = (Math.random() * 1) + 0.5;
            opacity = (Math.random() * 0.5) + 0.3;
        }

        this.flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            angle: 180,
            opacity: opacity
        });
    }
}