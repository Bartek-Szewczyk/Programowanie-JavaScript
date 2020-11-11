class UI {
    constructor() {

    }
    addHtml(notesdb, notes) {
        this.notesDb = notesdb;
        this.notess = notes;
        //odczytanie tablicy notatek 
        const notesFromStorage = this.notesDb;
        this.notes = notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
        })

        let rem = 0;
        const main = document.querySelector('.pinNote');
        const article = document.querySelector('.allNote');
        main.innerHTML = '';
        article.innerHTML = '';
        // zmiana html-a z poziomu js-a - sposób obiektowy
        for (let note of this.notes) {

            const htmlSection = document.createElement('section');
            const htmlTitle = document.createElement('h1');
            const htmlContent = document.createElement('p');
            const htmlDate = document.createElement('h4');
            const htmlDivIcon = document.createElement('div')
            const htmlBtn = document.createElement('i');
            const htmlPin = document.createElement('i');
            const htmlEdit = document.createElement('i');


            htmlSection.classList.add('note', `${note.colour}`);
            htmlSection.id = note.id;
            htmlTitle.innerHTML = note.title;
            htmlContent.innerHTML = note.content;
            htmlDate.innerHTML = note.createDate.toLocaleString();
            htmlBtn.classList.add('fas', 'fa-trash-alt', `forRemove`);
            htmlPin.classList.add('fas', 'fa-thumbtack', 'existPin', `forPin`);
            htmlDivIcon.classList.add('icon', 'Visible');
            htmlEdit.classList.add('far', 'fa-edit', `forEdit${rem}`)



            htmlSection.appendChild(htmlTitle);
            htmlSection.appendChild(htmlContent);
            htmlSection.appendChild(htmlDate);
            htmlSection.appendChild(htmlBtn);
            htmlSection.appendChild(htmlPin);
            htmlSection.appendChild(htmlDivIcon);
            htmlSection.appendChild(htmlEdit);
            htmlDivIcon.appendChild(htmlBtn);
            htmlDivIcon.appendChild(htmlPin);
            htmlDivIcon.appendChild(htmlEdit);


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



            // document.querySelector(`.forEdit${rem}`).addEventListener('click', edit);
            // document.querySelector(`.forEdit${rem}`).addEventListener('click', removeNote);
            rem++;
        }

    }

    visible() {
        const newNote = document.querySelector('#createNewNote');
        newNote.classList.add('visible');
    }

    noVisible() {
        const newNote = document.querySelector('#createNewNote');
        newNote.classList.remove('visible');


    }

    clearNew() {
        document.querySelector("#noteTitle").value = "";
        document.querySelector("#noteContent").value = "";
        pin = false;
        const colourPin = document.querySelector('#pin');
        colourPin.classList.remove('colPin')
        icon();
    }

}