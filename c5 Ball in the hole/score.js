class Score {
    constructor() {
        this.holes = new Hole();
        this.holes.AddHoles();
        console.log(this.holes.GetWinHole());
        this.hol = this.holes;
        this.a = 0;
    }

    Win(ball) {

        const odleglosc = Math.sqrt(Math.pow(this.holes.GetWinHole().cx.baseVal.value - ball.positionX, 2) + Math.pow(this.holes.GetWinHole().cy.baseVal.value - ball.positionY, 2));


        if (odleglosc < 35) {

            console.log(this.a);
            if (this.a == 1) {
                time.Stop();
                time.Pomiar()
                console.log(time.startczas, time.stopczas);
                console.log(time.pomiar);
                console.log("wygrana")


                document.querySelector("#ver").innerHTML = 'WYGRANA';
                document.querySelector('#time').innerHTML = 'twój czas to: ' + time.pomiar;

                document.querySelector('.showScore').classList.add('visible')
            }
            this.holes.NewWin()
            this.a++;
        }


    }

    Lose(ball) {
        const hole = [];
        hole.push(this.hol)

        let odl = [];
        for (let i = 0; i < hole[0].holes.length - 1; i++) {
            const odlegloscP = Math.sqrt(Math.pow(hole[0].holes[i].cx.baseVal.value - ball.positionX, 2) + Math.pow(hole[0].holes[i].cy.baseVal.value - ball.positionY, 2));
            odl.push(odlegloscP)
        }

        for (const o of odl) {
            if (o < 35) {
                time.Stop();
                time.Pomiar()
                console.log(time.startczas, time.stopczas);
                console.log(time.pomiar);
                console.log("przegrana")
                document.querySelector("#ver").innerHTML = 'przegrana';
                document.querySelector('#time').innerHTML = 'twój czas to: ' + time.pomiar;
                document.querySelector('.showScore').classList.add('visible')
            }
        }

    }



}