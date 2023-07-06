import Articulos_pdf from '../data/Articulos_pdf.js';



// selecionamos el contenedor donde iran las imagenes despues recooreremos el array de articulos y crearemos un div por cada articulo
const swiperWrapper = document.querySelector('.swiper-wrapper');

Articulos_pdf.forEach(articulo => {
    const newDiv1 = document.createElement('div');
    newDiv1.classList.add('swiper-slide', 'swiper_slide_articulo');
    newDiv1.innerHTML = `
    <a class="carrousel_icon" hrfe="${articulo.url_pdf}">
        <img class="carrousel_icon_img" src="../assets/icons/bxs-right-top-arrow-circle.svg">
    </a>
    <img class="carrousel_img" src="${articulo.img_principal}" alt="">
    <span class="carrousel_span" >${articulo.title}</span>
    <p class="carrousel_p">${articulo.year}</p>
    `;
    swiperWrapper.appendChild(newDiv1);
 
});



// selecionamos el contenedor para darles las propiedades de swiper para sus efectos 
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});




// funcion que obtinen el hrfe del enlace padre y abre una nueva pestaña con el enlace
const iconos = document.querySelectorAll('.carrousel_icon');
console.log(iconos)
iconos.forEach(icono => {
  icono.addEventListener('click', (e) => {
    const url = e.target.parentNode.getAttribute('hrfe'); // Obtén el atributo hrfe del elemento padre (el enlace <a>)
    window.open(url, '_blank');
   
  });
});










