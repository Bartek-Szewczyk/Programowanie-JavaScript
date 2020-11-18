class Time {
    constructor() {
        this.startczas;
        this.stopczas;
        this.pomiar;
    }
    Start() {
        this.startczas = Date.now();

    }
    Stop() {
        this.stopczas = Date.now()
    }
    Pomiar() {
        this.pomiar = (this.stopczas - this.startczas) / 1000;
    }
}