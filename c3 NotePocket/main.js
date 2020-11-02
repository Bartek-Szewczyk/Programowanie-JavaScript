const localStorageNoteKey = 'notes';
let notes = [];
document.querySelector('#noteAdd').addEventListener('click', onNewNote)
document.querySelector('#createNote').addEventListener('click', visible)
const newNote = document.querySelector('#createNewNote');

function visible() {

    newNote.classList.add('visible');
}

function noVisible() {
    newNote.classList.remove('visible');
}

function onNewNote() {

    let title = document.querySelector('#noteTitle').value;
    const content = document.querySelector('#noteContent').value;
    console.log(title, content);

    // nowa notatka
    const note = {
        title: title,
        content: content,
        colour: '#ff000',
        pinned: false,
        createDate: new Date()
    };
    //notatka dodana do ablicy notatek
    notes.push(note);


    //tablioca dodana do localstorage
    localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));


    noVisible();
    addHtml();
    title = " ";
    content.value = " ";

}

// // zmiana html z poziomu js sposob brutalny 
// for (let note of notes) {

//     const htmlNote = ` 
//     <section class = "note">
//     <h1>${note.title}</h1>
//     <p>${note.content}</p>
//     <h4>${note.createDate.toLocaleString()}</h4>
//     </section>
//     `;

//     const main = document.querySelector('main');
//     main.innerHTML += htmlNote;

// }



function addHtml() {

    //odczytanie tablicy notatek 
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
    notes = notesFromStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })
    let rem = 0;
    const main = document.querySelector('main');
    main.innerHTML = '';
    // zmiana html-a z poziomu js-a - sposób obiektowy
    for (let note of notes) {

        const htmlSection = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');
        const htmlBtn = document.createElement('button')

        htmlSection.classList.add('note');
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlDate.innerHTML = note.createDate.toLocaleString();
        htmlBtn.innerHTML = 'Remove';
        htmlBtn.classList.add(`forRemove${rem}`)

        htmlSection.appendChild(htmlTitle);
        htmlSection.appendChild(htmlContent);
        htmlSection.appendChild(htmlDate);
        htmlSection.appendChild(htmlBtn);


        main.appendChild(htmlSection);

        document.querySelector(`.forRemove${rem}`).addEventListener('click', removeNote);

        rem++;
    }

}
addHtml();

function removeNote() {
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
    notes = notesFromStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })

    const i = notes.findIndex(note => note.title === this.parentElement.firstChild.textContent)

    if (i !== -1) {
        notes.splice(i, 1)
    }

    console.dir(this);

    localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));

    addHtml();
}