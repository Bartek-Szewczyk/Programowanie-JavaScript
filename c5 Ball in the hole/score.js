class Score {
    constructor() {
        this.holes = new Hole();
        this.holes.AddHoles();
        console.log(this.holes);
        this.hol = this.holes;
    }

    Win(ball) {

        const odleglosc = Math.sqrt(Math.pow(this.holes.GetWinHole().cx.baseVal.value - ball.positionX, 2) + Math.pow(this.holes.GetWinHole().cy.baseVal.value - ball.positionY, 2));

        if (odleglosc < 35) {
            time.Stop();
            time.Pomiar()
            console.log(time.startczas, time.stopczas);
            console.log(time.pomiar);
            console.log("wygrana")

        }

    }

    Lose(ball) {
        const hole = [];
        hole.push(this.hol)

        let odl = [];
        for (let i = 0; i < hole[0].holes.length; i++) {
            const odleglosc = Math.sqrt(Math.pow(hole[0].holes[i].cx.baseVal.value - ball.positionX, 2) + Math.pow(hole[0].holes[i].cy.baseVal.value - ball.positionY, 2));


            odl.push(odleglosc)


        }

        for (const o of odl) {
            if (o < 35) {
                time.Stop();
                time.Pomiar()
                console.log(time.startczas, time.stopczas);
                console.log(time.pomiar);
                console.log("wygrana")

            }
        }

    }
}