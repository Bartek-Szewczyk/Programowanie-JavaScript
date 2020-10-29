const localStorageNoteKey = 'notes';
let notes = [];

// nowa notatka
const note = {
    title: 'nowa notatka',
    contetnt: 'treść notatki',
    colour: '#ff000',
    pinned: false,
    createDate: new Date()
};
//notatka dodana do ablicy notatek
notes.push(note);

//
for (let note of notes) {


}

//tablioca dodana do localstorage
localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));

//odczytanie tablicy notatek 
notes = JSON.parse(localStorage.getItem(localStorageNoteKey));