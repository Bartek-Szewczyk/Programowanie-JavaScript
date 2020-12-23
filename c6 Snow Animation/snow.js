class Snow {
    constructor(flakesCount) {
        new Flakes(flakesCount)
        this.flakeCount = flakesCount;
        this.flakes = [];
        this.mX = -100;
        this.mY = -100;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    PlaySnow() {
        addFlakes();
        for (let i = 0; i < this.flakesCount; i++) {


        }

    }
}