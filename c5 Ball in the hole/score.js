class Score {
    constructor() {
        this.holes = new Hole();
        this.holes.AddHoles();

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
}