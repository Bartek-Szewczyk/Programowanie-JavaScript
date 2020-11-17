class Hole {
    constructor() {
        this.holes = [];
    }
    AddHoles() {

        for (let i = 5; i < 20; i++) {
            const svgNS = "http://www.w3.org/2000/svg";
            const myCircle = document.createElementNS(svgNS, "circle");
            myCircle.setAttributeNS(null, "class", "holes");
            myCircle.setAttributeNS(null, "cx", Math.random() * (window.innerWidth - 90));
            myCircle.setAttributeNS(null, "cy", Math.random() * (window.innerHeight - 90));
            myCircle.setAttributeNS(null, "r", 50);
            myCircle.setAttributeNS(null, "fill", "blue");
            myCircle.setAttributeNS(null, "stroke", "black");
            document.getElementById("holesSVG").appendChild(myCircle);
        }


    }
}