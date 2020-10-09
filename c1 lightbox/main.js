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
    img.addEventListener('mouseover', brd)
    img.addEventListener('mouseout', rbrd)

    function brd() {
        img.classList.add('border')
    }

    function rbrd() {
        img.classList.remove('border')
    }
}


const lightboxBackground = document.querySelector('.lightboxBackground');
const lightbox = document.querySelector('.lightbox')
const background = document.querySelector('.lightboxBackground')






let NextEl;
let prevEl;

function showLightbox(ev) {
    prevEl = ev.target.previousElementSibling;
    NextEl = ev.target.nextElementSibling;
    img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    console.dir(NextEl)
    img.src = imgUrl;
    lightboxBackground.classList.add('visible');
    lightbox.classList.add('visible');
}

const next = document.querySelector('.next');
next.addEventListener('click', showNext);

function showNext(ev) {
    img.src = NextEl.src;
    const newNext = NextEl.nextElementSibling;
    prevEl = NextEl.previousElementSibling;
    NextEl = newNext;
}

const prev = document.querySelector('.prev');
prev.addEventListener('click', showPrev);

function showPrev(ev) {
    img.src = prevEl.src;
    prev.classList.remove('novisible')
    const newPrev = prevEl.previousElementSibling;
    NextEl = prevEl.nextElementSibling;
    prevEl = newPrev;
}



background.addEventListener('click', closeBackground)

function closeBackground() {
    lightboxBackground.classList.remove('visible');
    lightbox.classList.remove('visible')
}