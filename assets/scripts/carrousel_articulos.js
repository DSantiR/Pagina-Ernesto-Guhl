import Articulos_pdf from '../data/Articulos_pdf.js';





// selecionamos el contenedor donde iran las imagenes despues recooreremos el array de articulos y crearemos un div por cada articulo
const swiperWrapper = document.querySelector('.swiper-wrapper');
Articulos_pdf.forEach(articulo => {

    if (articulo.url_1) {
        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('swiper-slide', 'swiper_slide_articulo');
        newDiv1.innerHTML = `
        <img class="carrousel_icon" src="../assets/icons/bx-expand.svg">
        <img class="carrousel_img" src="${articulo.url_1}" alt="">
      <span class="carrousel_span" >${articulo.title}</span>
      <p class="carrousel_p">${articulo.year}</p>
    
    `;
        swiperWrapper.appendChild(newDiv1);
    }

    if (articulo.url_2) {
        const newDiv2 = document.createElement('div');
        newDiv2.classList.add('swiper-slide', 'swiper_slide_articulo');
        newDiv2.innerHTML = `
        <img class="carrousel_icon" src="../assets/icons/bx-expand.svg"> 
        <img class="carrousel_img" src="${articulo.url_2}" alt="">
        <span class="carrousel_span">${articulo.title}</span>
        <p class="carrousel_p">${articulo.year}</p>
     
    `;
        swiperWrapper.appendChild(newDiv2);
    }

    if (articulo.url_3) {
        const newDiv3 = document.createElement('div');
        newDiv3.classList.add('swiper-slide', 'swiper_slide_articulo');
        newDiv3.innerHTML = `
        <img class="carrousel_icon" src="../assets/icons/bx-expand.svg"> 
        <img class="carrousel_img" src="${articulo.url_3}" alt="">
        <span class="carrousel_span" >${articulo.title}</span>
        <p class="carrousel_p">${articulo.year}</p>
    `;
        swiperWrapper.appendChild(newDiv3);
    }
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

// funciones para abrir la imagen y cerrarla para poder leerla mejor 
const btn_cerrar = document.querySelector('.btn_cerrar');
const img_general = document.querySelector('.img_general_articulo');
const ver_foto = document.querySelector('.ver_foto');
const iconos = document.querySelectorAll('.carrousel_icon');

iconos.forEach(icono => {
  icono.addEventListener('click', (e) => {
    const imagenHermana = e.target.nextElementSibling;
    const url = imagenHermana.src;
    ver_foto.style.display = 'block';
    img_general.src=url;
  });
});


btn_cerrar.addEventListener('click', () => {
  ver_foto.style.display = 'none';
});

