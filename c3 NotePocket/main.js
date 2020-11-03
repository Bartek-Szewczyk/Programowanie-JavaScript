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
    clearNew()
}

document.querySelector('.closeBtn').addEventListener('click', noVisible);

document.querySelector('#pin').addEventListener('click', pinned);
let pin = false;

function pinned() {
    const colourPin = document.querySelector('#pin');
    if (pin == false) {
        pin = true
        colourPin.classList.add('colPin')
    } else {
        pin = false;
        colourPin.classList.remove('colPin')

    }
}

function onNewNote() {

    const title = document.querySelector('#noteTitle').value;
    const content = document.querySelector('#noteContent').value;
    const colors = document.querySelectorAll('.rd');
    console.dir(colors);
    console.log(title, content);
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

    console.log(pin);
    // nowa notatka
    const note = {
        title: title,
        content: content,
        colour: color,
        pinned: pin,
        createDate: new Date()
    };
    //notatka dodana do ablicy notatek
    notes.push(note);



    //tablioca dodana do localstorage
    localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));


    noVisible();
    addHtml();

    clearNew()
}

function clearNew() {
    document.querySelector("#noteTitle").value = "";
    document.querySelector("#noteContent").value = "";

    pin = false;
    const colourPin = document.querySelector('#pin');
    colourPin.classList.remove('colPin')

}



function addHtml() {

    //odczytanie tablicy notatek 
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
    notes = notesFromStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })
    let rem = 0;
    const main = document.querySelector('main');
    const article = document.querySelector('article');
    main.innerHTML = '';
    article.innerHTML = '';
    // zmiana html-a z poziomu js-a - sposób obiektowy
    for (let note of notes) {

        const htmlSection = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');
        const htmlBtn = document.createElement('i');
        const htmlPin = document.createElement('i')


        htmlSection.classList.add('note', `${note.colour}`);
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlDate.innerHTML = note.createDate.toLocaleString();
        htmlBtn.classList.add('fas', 'fa-trash-alt', `forRemove${rem}`);
        htmlPin.classList.add('fas', 'fa-thumbtack', 'existPin', `forPin${rem}`)


        htmlSection.appendChild(htmlTitle);
        htmlSection.appendChild(htmlContent);
        htmlSection.appendChild(htmlDate);
        htmlSection.appendChild(htmlBtn);
        htmlSection.appendChild(htmlPin);
        console.dir(htmlSection);
        switch (note.pinned) {
            case false:
                main.appendChild(htmlSection);
                break;
            case true:
                article.appendChild(htmlSection);
                break;
            default:
                break;
        }





        document.querySelector(`.forRemove${rem}`).addEventListener('click', removeNote);
        document.querySelector(`.forPin${rem}`).addEventListener('click', ePinned);
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

function ePinned() {
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
    notes = notesFromStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })
    const i = notes.findIndex(note => note.title === this.parentElement.firstChild.textContent);

    const editnote = notes[i];
    if (editnote.pinned === false) {
        editnote.pinned = true;
    } else {
        editnote.pinned = false
    }




    localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));

    addHtml();
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