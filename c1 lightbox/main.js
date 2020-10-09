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



let NextEl;
let imgUrl;
let img;

function showLightbox(ev) {
    const prevEl = ev.target.prevElementSibling;
    NextEl = ev.target.nextElementSibling.currentSrc;

    img = document.querySelector('.lightbox img');
    console.log(NextEl)
    imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');

    const prev = document.querySelector('.next');
    prev.addEventListener('click', showNext);

    function showNext(ev) {
        img = NextEl;


        console.log(NextEl);
    }

}

// const background = document.querySelector('.lightbox')
// background.addEventListener('click', closeBackground)

// function closeBackground() {
//     lightbox.classList.remove('visible');
// }