const opwApiKey = 'e00c0f7f8610475bd47ef7eab93ff980';
const openW = `https://api.openweathermap.org/data/2.5/weather?id=3094802&appid=${opwApiKey}`;

let showProgressBar = true;

const weather = fetch(openW)
console.log(weather);

let city;

weather
    .then((respObject) => {
        console.log('first .then', respObject);
        return respObject.json()
    })
    .then(pogoda => {
        console.log("seconds .then", pogoda);
        return pogoda;
    })
    .then(pogoda => {
        document.body.querySelector("#container").innerHTML =
            "Temperatura: " + pogoda.main.temp;

    })
    .catch((e) => {
        console.error("catched exception: ", e)
    })
    .finally(e => { showProgressBar = false })