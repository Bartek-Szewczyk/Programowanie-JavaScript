class Hole {
    constructor() {
        this.holes = [];
    }
    AddHoles() {

        for (let i = 0; i < 15; i++) {


            const svgNS = "http://www.w3.org/2000/svg";
            const myCircle = document.createElementNS(svgNS, "circle");
            if (i == 14) {
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

        }

    }

    GetWinHole() {
        return this.holes[14]
    }
    GetHoles() {
        return this.hole;
    }
    NewWin() {
        const holeSVG = document.getElementById("holesSVG")

        holeSVG.children[14].remove();
        this.holes.pop();
        const svgNS = "http://www.w3.org/2000/svg";
        const myCircle = document.createElementNS(svgNS, "circle");

        myCircle.setAttributeNS(null, "class", "holes score");
        myCircle.setAttributeNS(null, "fill", "yellow");

        myCircle.setAttributeNS(null, "cx", Math.random() * (window.innerWidth - 100));
        myCircle.setAttributeNS(null, "cy", Math.random() * (window.innerHeight - 100));
        myCircle.setAttributeNS(null, "r", 40 + Math.random() * 30);

        myCircle.setAttributeNS(null, "stroke", "black");
        holeSVG.appendChild(myCircle);
        this.holes.push(myCircle);



    }
}