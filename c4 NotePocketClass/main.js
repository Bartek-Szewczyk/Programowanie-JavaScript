const noteObj = new Notes();
const title = document.querySelector('#noteTitle').value;
const content = document.querySelector('#noteContent').value;
const newNote = new Note(title, content, 'ciGreen', false);
const noteArr = noteObj.getNotes();
const n1 = new Note('sayhifu', 'wuyaefgoq', 'ciRed', true)

noteObj.addNote(n1);

function rem() {
    document.querySelectorAll('.forRemove').forEach(note => {
        note.addEventListener('click', (ev) => {
            const id = ev.path[2].id;
            noteObj.removeNote(id);
            console.log(id);
        });
    });
};




function pin() {
    document.querySelectorAll(`.forPin`).forEach(note => {
        note.addEventListener('click', (ev) => {
            const id = ev.path[2].id;
            noteObj.ePinned(id);
            console.log(id);
        });
    });
};

function add() {

    document.querySelector('#noteAdd').addEventListener('click', noteObj.addNote(newNote));
}

document.querySelector('#createNote').addEventListener('click', noteObj.htmlObj.visible);
document.querySelector('.closeBtn').addEventListener('click', noteObj.htmlObj.noVisible);

add();
rem();
pin();



// const newNoteee = document.querySelector('#createNewNote');

// function visible() {

//     newNote.classList.add('visible');
// }

// function noVisible() {
//     newNote.classList.remove('visible');
//     clearNew()
// }

// document.querySelector('.closeBtn').addEventListener('click', noVisible);

// document.querySelector('#pin').addEventListener('click', Note.pinned());





// function onNewNote() {

//     const title = document.querySelector('#noteTitle').value;
//     const content = document.querySelector('#noteContent').value;

//     noVisible();
//     addHtml();

//     clearNew()
// }

// function clearNew() {
//     document.querySelector("#noteTitle").value = "";
//     document.querySelector("#noteContent").value = "";

//     pin = false;
//     const colourPin = document.querySelector('#pin');
//     colourPin.classList.remove('colPin')
//     icon();
// }





// function edit() {

//     visible();
//     const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
//     notes = notesFromStorage.map(note => {
//         note.createDate = new Date(note.createDate);
//         return note;
//     })
//     console.dir(this)
//     const i = notes.findIndex(note => note.title === this.parentElement.parentElement.firstChild.textContent);

//     document.querySelector('#noteTitle').value = notes[i].title;
//     console.log(notes[i].title);
//     document.querySelector('#noteContent').value = notes[i].content;
//     pin = notes[i].pinned;
//     const colourPin = document.querySelector('#pin');
//     if (pin == true) {
//         pin = true;
//         colourPin.classList.add('colPin')
//     } else {
//         pin = false
//         colourPin.classList.remove('colPin')
//     }

//     color = notes[i].colour;
//     console.log(color);

//     const colors = document.querySelectorAll('.rd');
//     for (let col of colors) {
//         if (col.id == color) {
//             col.checked = true;
//         }
//     }

// }


// function icon() {

//     let elementsArray = document.querySelectorAll(".note");
//     elementsArray.forEach(function(elem) {
//         elem.addEventListener('mouseover', function() {
//             elem.lastElementChild.classList.add('visible')
//             console.dir(elem);
//         });
//     });

//     elementsArray.forEach(function(elem) {
//         elem.addEventListener('mouseout', function() {
//             elem.lastElementChild.classList.remove('visible')

//             console.log(' nie działa');
//         });
//     });
// }

// icon();