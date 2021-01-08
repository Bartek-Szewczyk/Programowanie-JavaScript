const localStorageKey = 'notesApi';
const api = new Api(localStorageKey);
const ui = new Ui(localStorageKey);
const forecast = new Forecast();


ui.AddHtml();
ui.Icon();


const btn = document.querySelector('#findBtn')
let findCity = document.querySelector('#city')
btn.addEventListener('click', () => {
    api.ApiCity(findCity.value);
    ui.AddHtml()
})
btn.addEventListener('click', ui.AddHtml)

const btnRef = document.querySelector('#refBtn')
btnRef.addEventListener('click', () => {
    api.Refresh();
    ui.AddHtml();
})

setInterval(() => { api.Refresh() }, 120000)

let elementsArray = document.querySelectorAll(".note");
elementsArray.forEach(function(elem) {
    elem.addEventListener('click', function() {
        console.log(elem);

        console.log(this.firstChild.innerHTML);
        const i = notes.findIndex(note => note.city === this.firstChild.innerHTML)
        console.log(i);
        forecast.NewForecast(i)
        document.querySelector('.tb').classList.toggle('visible')
    });
});