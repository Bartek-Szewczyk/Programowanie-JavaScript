class Sensor {
    constructor(ev) {
        this.speedX = 0;
        this.speedY = 0;

        this.speedX = ev.gamma / 2;
        this.speedY = ev.beta / 45;
    }

    Move() {

        if (this.speedX + ball.positionX > 50) {
            ball.positionX += this.speedX;
        }
        if (this.speedY + ball.positionY > 0) {
            ball.positionY += this.speedY;
        }
        ball.AddBall();
        console.log(ball);

    }
}