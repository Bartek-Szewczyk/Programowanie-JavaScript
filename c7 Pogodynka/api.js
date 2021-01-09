let notes = [];
let newNote = [];
class Api {
    constructor(localStorageKey) {
        let openW;
        let addWeather;
        this.localStorageNoteKey = localStorageKey;

    }
    ApiCity(findcity) {

        const opwApiKey = 'e00c0f7f8610475bd47ef7eab93ff980';
        this.openW = `https://api.openweathermap.org/data/2.5/weather?q=${findcity}&units=metric&lang=pl&appid=${opwApiKey}`;

        this.addWeather = fetch(this.openW)
        this.NewWeather()
    }
    NewWeather() {

        this.addWeather
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
                    tempO: pogoda.main.feels_like,
                    temp: pogoda.main.temp,
                    hum: pogoda.main.humidity,
                    pre: pogoda.main.pressure,
                    icon: pogoda.weather[0].icon,
                    des: pogoda.weather[0].description,
                    lat: pogoda.coord.lat,
                    lon: pogoda.coord.lon,
                    createDate: new Date()
                };
                notes.push(note);
                localStorage.setItem(this.localStorageNoteKey, JSON.stringify(notes));

                ui.AddHtml()

            })
            .catch((e) => {
                console.error("catched exception: ", e)
            })

    }
    Refresh() {
        newNote = [];
        for (let i = 0; i < notes.length; i++) {
            let ct = notes[i].city;

            newNote.push(ct)
        }
        localStorage.removeItem(this.localStorageNoteKey)

        notes = [];
        for (let i = 0; i < newNote.length; i++) {
            this.ApiCity(newNote[i])

        }
    }
    RemoveNote() {
        const notesFromStorage = JSON.parse(localStorage.getItem(localStorageKey));
        notes = notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);

            return note;

        })

        const i = notes.findIndex(note => note.city === this.parentElement.parentElement.firstChild.textContent)


        if (i !== -1) {
            notes.splice(i, 1)
        }


        localStorage.setItem(localStorageKey, JSON.stringify(notes));
        ui.AddHtml();
        document.querySelector('.tb').classList.remove('visible')
    }
}