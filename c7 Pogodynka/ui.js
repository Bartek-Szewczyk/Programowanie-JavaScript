class Ui {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }

    AddHtml() {
        console.log(notes);
        //odczytanie tablicy notatek 
        const notesFromStorage = JSON.parse(localStorage.getItem(this.localStorageKey));
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
            const htmlCity = document.createElement('h1');
            const htmlTempO = document.createElement('h4');
            const htmlTemp = document.createElement('p');
            const htmlHum = document.createElement('p');
            const htmlPre = document.createElement('p');
            const htmlIcon = document.createElement('img');
            const htmlDes = document.createElement('h4');
            const htmlDate = document.createElement('h4');
            const htmlDivIcon = document.createElement('div')
            const htmlBtn = document.createElement('i');


            htmlSection.classList.add('note', 'ciYellow');
            htmlCity.innerHTML = note.city;
            htmlTempO.innerHTML = "Temperatura Odczuwalna: " + note.tempO + " °C";
            htmlTemp.innerHTML = "Temperatura: " + note.temp + " °C";
            htmlHum.innerHTML = "Wilgotność: " + note.hum + " %";
            htmlPre.innerHTML = "Ciśnienie: " + note.pre + " hPa";
            htmlIcon.src = `http://openweathermap.org/img/wn/${note.icon}@2x.png`;
            htmlDes.innerHTML = note.des;
            htmlDate.innerHTML = note.createDate.toLocaleString();
            htmlBtn.classList.add('fas', 'fa-trash-alt', `forRemove${rem}`);
            htmlDivIcon.classList.add('icon', 'noVisible');

            htmlSection.appendChild(htmlCity);
            htmlSection.appendChild(htmlTempO);
            htmlSection.appendChild(htmlTemp);
            htmlSection.appendChild(htmlHum);
            htmlSection.appendChild(htmlPre);
            htmlSection.appendChild(htmlIcon);
            htmlSection.appendChild(htmlDes);
            htmlSection.appendChild(htmlDate);
            htmlSection.appendChild(htmlBtn);
            htmlSection.appendChild(htmlDivIcon);

            htmlDivIcon.appendChild(htmlBtn);

            main.appendChild(htmlSection);

            document.querySelector(`.forRemove${rem}`).addEventListener('click', () => { this.RemoveNote() });

            rem++;
        }
        this.Icon()
    }


    RemoveNote() {
        console.log(notes);
        const notesFromStorage = JSON.parse(localStorage.getItem(this.localStorageKey));
        notes = notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);
            return note;
            console.log(note);
        })

        const i = notes.findIndex(note => note.city === this.parentElement.parentElement.firstChild.textContent)

        if (i !== -1) {
            notes.splice(i, 1)
        }


        localStorage.setItem(this.localStorageKey, JSON.stringify(notes));

        this.AddHtml();
        this.Icon();
    }

    Icon() {

        let elementsArray = document.querySelectorAll(".note");
        elementsArray.forEach(function(elem) {
            elem.addEventListener('mouseover', function() {
                elem.lastElementChild.classList.add('visible')

            });
        });

        elementsArray.forEach(function(elem) {
            elem.addEventListener('mouseout', function() {
                elem.lastElementChild.classList.remove('visible')

            });
        });
    }

}