const localStorageNoteKey = 'notesApi';
let notes = [];

const opwApiKey = 'e00c0f7f8610475bd47ef7eab93ff980';
let openW;
let addWeather;

let findCity = document.querySelector('#city')
const btn = document.querySelector('#findBtn')
btn.addEventListener('click', () => {
    console.log(findCity.value);
    openW = `https://api.openweathermap.org/data/2.5/weather?q=${findCity.value}&units=metric&appid=${opwApiKey}`;

    addWeather = fetch(openW)
    pp()




})
console.log(findCity.value);
console.log(notes);




function pp() {

    addWeather
        .then((respObject) => {
            console.log('first .then', respObject);
            return respObject.json()
        })
        .then(pogoda => {
            console.log("seconds .then", pogoda);
            return pogoda;
        })
        .then(pogoda => {

            const note = {
                city: pogoda.name,
                temp: pogoda.main.temp,
                colour: "red",
                pinned: false,
                hum: pogoda.main.humidity,
                icon: pogoda.weather[0].icon,
                createDate: new Date()
            };
            notes.push(note);
            localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));
            console.log(notes);
            addHtml()
        })
        .catch((e) => {
            console.error("catched exception: ", e)
        })

}



function addHtml() {
    console.log(notes);
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
        const htmlCity = document.createElement('h1');
        const htmlTemp = document.createElement('p');
        const htmlHum = document.createElement('p');
        const htmlIcon = document.createElement('img');
        const htmlDate = document.createElement('h4');
        const htmlDivIcon = document.createElement('div')
        const htmlBtn = document.createElement('i');


        htmlSection.classList.add('note', 'ciYellow');
        htmlCity.innerHTML = note.city;
        htmlTemp.innerHTML = "Temperatura: " + note.temp + " °C";
        htmlHum.innerHTML = "Wilgotność: " + note.hum + " %";
        htmlIcon.src = `http://openweathermap.org/img/wn/${note.icon}@2x.png`
        htmlDate.innerHTML = note.createDate.toLocaleString();
        htmlBtn.classList.add('fas', 'fa-trash-alt', `forRemove${rem}`);
        htmlDivIcon.classList.add('icon', 'noVisible');

        htmlSection.appendChild(htmlCity);
        htmlSection.appendChild(htmlTemp);
        htmlSection.appendChild(htmlHum);
        htmlSection.appendChild(htmlIcon)
        htmlSection.appendChild(htmlDate);
        htmlSection.appendChild(htmlBtn);
        htmlSection.appendChild(htmlDivIcon);

        htmlDivIcon.appendChild(htmlBtn);

        console.dir(htmlSection);
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

    const i = notes.findIndex(note => note.city === this.parentElement.parentElement.firstChild.textContent)

    if (i !== -1) {
        notes.splice(i, 1)
    }

    console.dir(this);

    localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));

    addHtml();
    icon();
}

function icon() {

    let elementsArray = document.querySelectorAll(".note");
    elementsArray.forEach(function(elem) {
        elem.addEventListener('mouseover', function() {
            elem.lastElementChild.classList.add('visible')
            console.dir(elem);
        });
    });

    elementsArray.forEach(function(elem) {
        elem.addEventListener('mouseout', function() {
            elem.lastElementChild.classList.remove('visible')

            console.log(' nie działa');
        });
    });
}

icon();