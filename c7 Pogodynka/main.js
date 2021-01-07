const localStorageKey = 'notesApi';
const api = new Api(localStorageKey);
const ui = new Ui(localStorageKey);

ui.AddHtml();
const btn = document.querySelector('#findBtn')
let findCity = document.querySelector('#city')
btn.addEventListener('click', () => {
    api.ApiCity(findCity.value);
    ui.AddHtml()
})