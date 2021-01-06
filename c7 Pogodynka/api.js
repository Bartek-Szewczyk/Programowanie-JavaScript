const localStorageNoteKey = 'notesApi';
let notes = [];


console.log(notes);
const opwApiKey = 'e00c0f7f8610475bd47ef7eab93ff980';
const openW = `https://api.openweathermap.org/data/2.5/weather?id=3094802&appid=${opwApiKey}`;

let showProgressBar = true;



function roundTo(value, places) {
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

const addWeather = fetch(openW)
console.log(addWeather);

function pp() {

    addWeather
        .then((respObject) => {
            console.log('first .then', respObject);
            return respObject.json()
        })
        .then(pogoda => {
            console.log("seconds .then", pogoda);
            let img = new Image;
            let icon = pogoda.weather[0].icon
            img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            document.body.querySelector("#container").appendChild(img);
            return pogoda;
        })
        .then(pogoda => {

            const note = {
                city: pogoda.name,
                temp: roundTo(pogoda.main.temp - 273.15, 2),
                colour: "red",
                pinned: false,
                hum: pogoda.main.humidity,
                icon: pogoda.weather[0].icon,
                createDate: new Date()
            };
            notes.push(note);
            localStorage.setItem(localStorageNoteKey, JSON.stringify(notes));
            console.log(notes);

        })
        .catch((e) => {
            console.error("catched exception: ", e)
        })
}
pp()

addHtml()

function addHtml() {
    console.log(notes);
    //odczytanie tablicy notatek 
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNoteKey));
    notes = notesFromStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })
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
        const htmlPin = document.createElement('i');
        const htmlEdit = document.createElement('i');


        htmlSection.classList.add('note');
        htmlCity.innerHTML = note.city;
        htmlTemp.innerHTML = "Temperstura: " + note.temp + " °C";
        htmlHum.innerHTML = "Wilgotność: " + note.hum + " %";
        htmlIcon.src = `http://openweathermap.org/img/wn/${note.icon}@2x.png`
        htmlDate.innerHTML = note.createDate.toLocaleString();



        htmlSection.appendChild(htmlCity);
        htmlSection.appendChild(htmlTemp);
        htmlSection.appendChild(htmlHum);
        htmlSection.appendChild(htmlIcon)
        htmlSection.appendChild(htmlDate);
        htmlSection.appendChild(htmlBtn);
        htmlSection.appendChild(htmlPin);
        htmlSection.appendChild(htmlDivIcon);
        htmlSection.appendChild(htmlEdit);
        htmlDivIcon.appendChild(htmlBtn);
        htmlDivIcon.appendChild(htmlPin);
        htmlDivIcon.appendChild(htmlEdit);

        console.dir(htmlSection);
        main.appendChild(htmlSection);

    }

}