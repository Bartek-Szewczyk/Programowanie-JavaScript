class Ui {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }

    AddHtml() {
        const localStorageKey = this.localStorageKey
        console.log(notes);
        //odczytanie tablicy notatek 
        const notesFromStorage = JSON.parse(localStorage.getItem('notesApi'));
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
            const htmlTemp = document.createElement('h4');
            const htmlTempO = document.createElement('p');
            const htmlHum = document.createElement('p');
            const htmlPre = document.createElement('p');
            const htmlIcon = document.createElement('img');
            const htmlDes = document.createElement('h4');
            const htmlDate = document.createElement('h4');
            const htmlDivIcon = document.createElement('div')
            const htmlBtn = document.createElement('i');


            htmlSection.classList.add('note', 'ciYellow');
            htmlCity.innerHTML = note.city;
            htmlTemp.innerHTML = "Temperatura: " + note.temp + " °C";
            htmlTempO.innerHTML = "Temperatura Odczuwalna: " + note.tempO + " °C";
            htmlHum.innerHTML = "Wilgotność: " + note.hum + " %";
            htmlPre.innerHTML = "Ciśnienie: " + note.pre + " hPa";
            htmlIcon.src = `http://openweathermap.org/img/wn/${note.icon}@2x.png`;
            htmlDes.innerHTML = note.des;
            htmlDate.innerHTML = note.createDate.toLocaleString();
            htmlBtn.classList.add('fas', 'fa-trash-alt', `forRemove${rem}`);
            htmlDivIcon.classList.add('icon', 'noVisible');

            htmlSection.appendChild(htmlCity);
            htmlSection.appendChild(htmlTemp);
            htmlSection.appendChild(htmlTempO);
            htmlSection.appendChild(htmlHum);
            htmlSection.appendChild(htmlPre);
            htmlSection.appendChild(htmlIcon);
            htmlSection.appendChild(htmlDes);
            htmlSection.appendChild(htmlDate);
            htmlSection.appendChild(htmlBtn);
            htmlSection.appendChild(htmlDivIcon);

            htmlDivIcon.appendChild(htmlBtn);

            main.appendChild(htmlSection);

            document.querySelector(`.forRemove${rem}`).addEventListener('click',
                api.RemoveNote

            );

            rem++;
        }

        ui.Icon()
    }




    Icon() {

        let elementsArray = document.querySelectorAll(".note");
        elementsArray.forEach(function(elem) {
            elem.addEventListener('mouseover', function() {

                elem.lastElementChild.classList.add('visible')
                    //document.querySelector('.tb').classList.add('visible')
            });
        });

        elementsArray.forEach(function(elem) {
            elem.addEventListener('mouseout', function() {
                elem.lastElementChild.classList.remove('visible')
                    //document.querySelector('.tb').classList.remove('visible')
            });
        });
    }

    // UiForecast() {
    //     const article = document.querySelector('.hour')

    //     const htmlSection = document.createElement('section');
    //     htmlSection.classList.add('note', 'ciYellow');

    //     const htmlTable = document.createElement('table');
    //     const htmlTrF = document.createElement('tr')
    //     for (let i = 0; i < 12; i++) {
    //         const htmlTh = document.createElement('th');
    //         const a = new Date(noteforecast.hourly[i].dt * 1000);
    //         htmlTh.innerHTML = a.toLocaleTimeString();
    //         htmlTrF.appendChild(htmlTh);
    //     }
    //     const htmlTrS = document.createElement('tr')
    //     for (let i = 0; i < 12; i++) {
    //         const htmlTemp = document.createElement('th');
    //         htmlTemp.innerHTML = noteforecast.hourly[i].temp + " °C";
    //         htmlTrS.appendChild(htmlTh);
    //     }

    //     htmlSection.appendChild(htmlTable);
    //     htmlTable.appendChild(htmlTrF);
    //     htmlTable.appendChild(htmlTrS);


    //     article.appendChild(htmlSection)
    // }

}