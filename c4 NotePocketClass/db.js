class Db {
    constructor() {
        this.lsKey = 'notes';
    }
    save(notes) {
        localStorage.setItem(this.lsKey, JSON.stringify(notes));
    }
    get() {
        return JSON.parse(localStorage.getItem(this.lsKey));

    }
}