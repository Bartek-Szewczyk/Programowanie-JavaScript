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

const lightbox = document.querySelector('.lightbox');

let imgUrl;
let NextEl;
let prevEl;

function showLightbox(ev) {
    prevEl = ev.target.prevElementSibling;
    NextEl = ev.target.nextElementSibling;
    img = document.querySelector('.lightbox img');
    console.dir(NextEl)
    console.dir(img)
    imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');

}

const next = document.querySelector('.next');
next.addEventListener('click', showNext);

function showNext(ev) {

    img.src = NextEl.src;
    const newNext = NextEl.nextElementSibling;
    console.dir(newNext);
    NextEl = newNext;


    console.log(NextEl);
}

// const background = document.querySelector('.lightbox')
// background.addEventListener('click', closeBackground)

// function closeBackground() {
//     lightbox.classList.remove('visible');
// }