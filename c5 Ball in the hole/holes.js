class Hole {
    constructor() {
        this.holes = [];
    }
    AddHoles() {

        for (let i = 0; i < 15; i++) {


            const svgNS = "http://www.w3.org/2000/svg";
            const myCircle = document.createElementNS(svgNS, "circle");

            myCircle.setAttributeNS(null, "class", "holes");
            myCircle.setAttributeNS(null, "fill", "black");

            myCircle.setAttributeNS(null, "cx", Math.floor(Math.random() * (window.innerWidth - 150)));
            myCircle.setAttributeNS(null, "cy", Math.floor(Math.random() * (window.innerHeight - 150)));
            myCircle.setAttributeNS(null, "r", 40 + Math.random() * 30);

            myCircle.setAttributeNS(null, "stroke", "black");
            document.getElementById("holesSVG").appendChild(myCircle);
            this.holes.push(myCircle)

        }
        this.CheckHoles();
        setTimeout(this.CheckHoles(),
            this.NewWin(), 1000)
    }
    CheckHoles() {


        for (let j = 1; j < this.holes.length; j++) {


            console.log(this.holes);
            let odl = [];
            for (let k = j + 1; k < this.holes.length - 1; k++) {
                const odlegloscP = Math.sqrt(Math.pow(this.holes[j].cx.baseVal.value - this.holes[k].cx.baseVal.value, 2) + Math.pow(this.holes[j].cy.baseVal.value - this.holes[k].cy.baseVal.value, 2))

                odl.push(odlegloscP)
            }
            for (const o of odl) {
                if (o < 150) {
                    const holeSVG = document.getElementById("holesSVG")

                    holeSVG.children[j].remove();
                    this.holes.splice(j, 1);
                    const svgNS = "http://www.w3.org/2000/svg";
                    const myCircle = document.createElementNS(svgNS, "circle");

                    myCircle.setAttributeNS(null, "class", "holes");
                    myCircle.setAttributeNS(null, "fill", "black");

                    myCircle.setAttributeNS(null, "cx", Math.random() * (window.innerWidth - 100));
                    myCircle.setAttributeNS(null, "cy", Math.random() * (window.innerHeight - 100));
                    myCircle.setAttributeNS(null, "r", 40 + Math.random() * 30);

                    myCircle.setAttributeNS(null, "stroke", "black");
                    holeSVG.appendChild(myCircle);
                    this.holes.push(myCircle);

                }
            }

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
        myCircle.setAttributeNS(null, "fill", "cyan");

        myCircle.setAttributeNS(null, "cx", Math.random() * (window.innerWidth - 100));
        myCircle.setAttributeNS(null, "cy", Math.random() * (window.innerHeight - 100));
        myCircle.setAttributeNS(null, "r", 40 + Math.random() * 30);

        myCircle.setAttributeNS(null, "stroke", "black");
        holeSVG.appendChild(myCircle);
        this.holes.push(myCircle);



    }
}