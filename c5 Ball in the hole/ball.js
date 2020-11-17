class Ball {
    constructor() {
        this.positionX = 1000;
        this.positionY = 100;
        this.speedX = 0;
        this.speedY = 0;
    }

    AddBall(pX, pY) {
        pX = ball.positionX;
        pY = ball.positionY;

        const BodySVG = document.getElementById("mySVG");
        BodySVG.innerHTML = '';
        const svgNS = "http://www.w3.org/2000/svg";
        const myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttributeNS(null, "id", "ball");
        myCircle.setAttributeNS(null, "cx", pX);
        myCircle.setAttributeNS(null, "cy", pY);
        myCircle.setAttributeNS(null, "r", 35);
        myCircle.setAttributeNS(null, "fill", "green");
        myCircle.setAttributeNS(null, "stroke", "black");
        BodySVG.appendChild(myCircle);
    }

    Sensors(ev) {

        ball.speedX = ev.gamma / 20;
        ball.speedY = ev.beta / 45;

    }

    Move() {

        let positionX = ball.positionX;
        let positionY = ball.positionY;
        let speedX = ball.speedX;
        let speedY = ball.speedY;
        if (positionX + speedX < window.innerWidth - 80 && positionX + speedX > 0) {
            ball.positionX += speedX;

        }
        if (positionY + speedY < window.innerHeight - 80 && positionY + speedY > 0) {
            ball.positionY += speedY;
        }

        ball.AddBall(positionX, positionY);
        window.requestAnimationFrame(ball.Move);
    }
}