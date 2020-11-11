class Note {
    constructor(title, content, colour = 'ciGrey', pinned = false) {
        this.id = 'id' + Math.random() * 10000;
        this.title = title;
        this.content = content;
        this.colour = colour;
        this.pinned = pinned;
        this.createDate = new Date;

    }

    pinned() {

        const colourPin = document.querySelector('#pin');
        if (this.pin == false) {
            this.pin = true
            colourPin.classList.add('colPin')
        } else {
            this.pin = false;
            colourPin.classList.remove('colPin')

        }
    }
}