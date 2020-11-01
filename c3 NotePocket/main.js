const localStorageNoteKey = 'notes';
let notes = [];

document.querySelector('#noteAdd').addEventListener('click', onNewNote)



function onNewNote() {
    const title = document.querySelector('#noteTitle').value;
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

    //odczytanie tablicy notatek 
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
    notes = notesFromStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })

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

function addHtml() {

    const main = document.querySelector('main');
    main.innerHTML = '';
    // zmiana html-a z poziomu js-a - sposób obiektowy
    for (let note of notes) {

        const htmlSection = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');

        htmlSection.classList.add('note');
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlDate.innerHTML = note.createDate.toLocaleString();

        htmlSection.appendChild(htmlTitle);
        htmlSection.appendChild(htmlContent);
        htmlSection.appendChild(htmlDate);


        main.appendChild(htmlSection);
    }


}