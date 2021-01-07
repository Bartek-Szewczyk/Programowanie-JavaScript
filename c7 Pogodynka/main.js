const localStorageKey = 'notesApi';
const api = new Api(localStorageKey);
const ui = new Ui(localStorageKey);

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