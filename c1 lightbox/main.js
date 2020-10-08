//  1. Pobierz referencję do obiektu
// const firstImg = document.getElementById('firstimage');
// const firstImg = document.querySelectorAll('img');
// console.dir(firstImg);
//2. zapisz się na zdarzenie kliknięcia
// firstImg.addEventListener('click', showLightbox);


// function showLightbox(ev) {
//     console.log(ev.target.src);
// }


const imgs = document.querySelectorAll('.gallery img');


for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];
    console.log(img);
    img.addEventListener('click', showLightbox)

}

function showLightbox(ev) {
    const prevEl = ev.target.prevElementSibling;
    const NextEl = ev.target.nextElementSibling;
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');

}