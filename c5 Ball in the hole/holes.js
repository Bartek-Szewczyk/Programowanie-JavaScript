class Hole {
    constructor() {
        this.holes = [];
    }
    AddHoles() {

        for (let i = 0; i < 15; i++) {


            const svgNS = "http://www.w3.org/2000/svg";
            const myCircle = document.createElementNS(svgNS, "circle");
            if (i == 0) {
                myCircle.setAttributeNS(null, "class", "holes score");
                myCircle.setAttributeNS(null, "fill", "yellow");
            } else {
                myCircle.setAttributeNS(null, "class", "holes");
                myCircle.setAttributeNS(null, "fill", "blue");
            }
            myCircle.setAttributeNS(null, "cx", Math.random() * (window.innerWidth - 100));
            myCircle.setAttributeNS(null, "cy", Math.random() * (window.innerHeight - 100));
            myCircle.setAttributeNS(null, "r", 40 + Math.random() * 30);

            myCircle.setAttributeNS(null, "stroke", "black");
            document.getElementById("holesSVG").appendChild(myCircle);
            this.holes.push(myCircle)
            this.CheckHole();
        }
    }
    CheckHole() {
        console.log(this.holes[0]);

        for (let i = 0; i < this.holes.length - 1; i++) {
            const hole = this.holes[i];
            console.dir(hole);
            for (let j = i + 1; j < this.holes.length; j++) {
                if (i.cx - j.cx < 70 || i.cy - j.cy < 70) {
                    this.holes.splice(j, 1)
                }
            }
        }

    }
    GetWinHole() {
        return this.holes[0]
    }
    GetHoles() {
        console.log(this.hole);
        return this.hole;

    }
}