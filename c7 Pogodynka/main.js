const localStorageKey = 'notesApi';
const api = new Api(localStorageKey);
const ui = new Ui(localStorageKey);
const forecast = new Forecast();

const btn = document.querySelector('#findBtn')
let findCity = document.querySelector('#city')
btn.addEventListener('click', () => {
    api.ApiCity(findCity.value);
})



const btnRef = document.querySelector('#refBtn')
btnRef.addEventListener('click', () => {
    api.Refresh();

})

setInterval(() => { api.Refresh() }, 120000);

function add() {
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageKey));
    aNote = notesFromStorage
    if (aNote != null) {

        ui.AddHtml();
        ui.Icon();
    }
}
add();