class Db {
    constructor() {
        this.lsKey = 'notes';
    }
    save(notes) {
        localStorage.setItem(this.lsKey, JSON.stringify(notes));
    }
    get() {
        return localStorage.getItem(this.lsKey);
    }
}