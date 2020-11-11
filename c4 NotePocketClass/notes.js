class Notes {
    constructor() {
        this.db = new Db();
        this.notes = this.db.get();

    }

    addNote(note) {
        const colors = document.querySelectorAll('.rd');
        let color;
        for (let c of colors) {
            switch (c.checked) {
                case true:
                    color = c.id;
                    console.log(color);
                    break;

                default:
                    break;
            }
        }
        this.notes.push(note);
        this.db.save(this.notes)
    }
    getNote() {
        return this.notes;
    }
    removeNote() {
        const notesFromStorage = JSON.parse(notes);
        notes = notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
        })

        const i = notes.findIndex(note => note.title === this.parentElement.parentElement.firstChild.textContent)

        if (i !== -1) {
            notes.splice(i, 1)
        }

        console.dir(this);

        this.db.save(notes)

        addHtml();
        icon();
    }



}