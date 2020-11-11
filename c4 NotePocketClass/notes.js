class Notes {
    constructor() {
        this.notes = [];
        this.db = new Db();
        this.htmlObj = new UI();
        this.notess = this.db.get();
    }

    addNote(note) {
        this.notes.push(note);
        this.db.save(this.notes);
        this.htmlObj.addHtml(this.db.get(), this.notes);

    }

    removeNote(id) {
        this.notes = this.db.get();
        this.noteId = id;
        let i = this.notes.findIndex(note => note.id === this.noteId)
        if (i !== -1) {
            this.notes.splice(i, 1)
        }
        this.db.save(this.notes)
        this.htmlObj.addHtml(this.db.get());
        console.log(this.notes);
        rem();
        pin();
    }
    getNotes() {
        return this.notes;
    }
    getNote(id) {
        return this.notes.find(el => el.id === id)
    }
    ePinned(id) {
        this.notes = this.db.get();
        this.noteId = id;

        let i = this.notes.findIndex(note => note.id === this.noteId)

        const editnote = this.notes[i];
        if (editnote.pinned === false) {
            editnote.pinned = true;
        } else {
            editnote.pinned = false
        }

        this.db.save(this.notes)
        this.htmlObj.addHtml(this.db.get());
        pin();
        rem();
    }

}