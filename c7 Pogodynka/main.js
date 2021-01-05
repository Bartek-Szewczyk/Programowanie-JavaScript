const opwApiKey = 'e00c0f7f8610475bd47ef7eab93ff980';
const openW = `https://api.openweathermap.org/data/2.5/weather?q=Cracow&appid=${opwApiKey}`;

const weather = fetch(openW)
console.log(weather);

weather
    .then((respObject) => {
        console.log('first .then', respObject);
        return respObject.json()
    })
    .then(pogoda => {
        console.log("seconds .then", pogoda);
    })
    .catch((e) => {
        console.error("catched exception: ", e)
    })