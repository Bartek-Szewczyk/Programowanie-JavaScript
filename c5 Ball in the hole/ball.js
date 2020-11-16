class Ball {
    constructor() {

        this.positionX = 100;
        this.positionY = 100;


    }
    Position(a, b) {
        this.positionX = a;
        this.positionY = b;
    }

    AddBall() {
        const BodySVG = document.getElementById("mySVG")
            //BodySVG.innerHTML = '';
        const svgNS = "http://www.w3.org/2000/svg";
        const myCircle = document.createElementNS(svgNS, "circle");
        myCircle.setAttributeNS(null, "id", "ball");
        myCircle.setAttributeNS(null, "cx", this.positionX);
        myCircle.setAttributeNS(null, "cy", this.positionY);
        myCircle.setAttributeNS(null, "r", 50);
        myCircle.setAttributeNS(null, "fill", "green");
        myCircle.setAttributeNS(null, "stroke", "black");
        BodySVG.appendChild(myCircle);
    }

}