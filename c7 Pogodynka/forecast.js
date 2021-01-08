let noteforecast = []
class Forecast {
    constructor() {
        let openF
        let addForecast

    }
    NewForecast(arrayIndex) {
        const notesFromStorage = JSON.parse(localStorage.getItem(localStorageKey));
        notes = notesFromStorage.map(note => {
            note.createDate = new Date(note.createDate);

            return note;

        })
        noteforecast = []
        console.log(notes);
        const opwApiKey = 'e00c0f7f8610475bd47ef7eab93ff980';
        this.openF = `https://api.openweathermap.org/data/2.5/onecall?lat=${notes[arrayIndex].lat}&lon=${notes[arrayIndex].lon}&exclude=minutely,daily&units=metric&lang=pl&appid=${opwApiKey}`;

        this.addForecast = fetch(this.openF)

        this.addForecast
            .then((respObject) => {
                console.log('first .then', respObject);
                return respObject.json()
            })
            .then(pogoda => {
                console.log("seconds forecast .then", pogoda);
                return pogoda;
            })
            .then(pogoda => {
                const forecast = {
                    hourly: pogoda.hourly
                }
                noteforecast.push(forecast)
                for (let i = 0; i < 12; i++) {
                    const a = new Date(noteforecast[0].hourly[i].dt)
                    console.log(a.toLocaleTimeString());

                }
                this.UiForecast();

            })
            .catch((e) => {
                console.error("catched exception: ", e)
            })
    }
    UiForecast() {



        // const htmlTime = document.createElement('h4');
        // const htmlTempF = document.createElement('p');

        // const a = [];
        // for (let i = 0; i < 12; i++) {
        //     const b = new Date(noteforecast[0].hourly[i].dt * 1000);
        //     a.push(b.toLocaleTimeString())
        // }
        // htmlTime.innerHTML = a.toString()

        // const te = [];
        // for (let i = 0; i < 12; i++) {
        //     const b = noteforecast[0].hourly[i].temp + " °C";
        //     te.push(b)
        // }
        // htmlTempF.innerHTML = te.toString()

        // const htmlTable = document.querySelector('.tb');
        for (let i = 0; i < 12; i++) {
            let th = document.querySelector(`.th1${i}`)

            th.innerHTML = noteforecast[0].hourly[i].temp + " °C";
        }
        for (let i = 0; i < 12; i++) {
            let td = document.querySelector(`.td${i}`)
            td.innerHTML = '';
            const icon = document.createElement('img');
            icon.src = `http://openweathermap.org/img/wn/${noteforecast[0].hourly[i].weather[0].icon}@2x.png`;

            td.appendChild(icon);

        }
        for (let i = 0; i < 12; i++) {
            let th = document.querySelector(`.th2${i}`)

            let a = new Date(noteforecast[0].hourly[i].dt * 1000);
            th.innerHTML = a.toLocaleTimeString();

        }
        // const htmlTrS = document.createElement('tr')
        // for (let i = 0; i < 12; i++) {
        //     const htmlTh = document.createElement('th');
        //     htmlTemp.innerHTML = noteforecast[0].hourly[i].temp + " °C";
        //     htmlTrS.appendChild(htmlTh);
        // }

        // htmlSection.appendChild(htmlTable);
        // htmlTable.appendChild(htmlTrf);


    }

}