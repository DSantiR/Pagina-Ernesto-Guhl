import publicaciones from '../data/publicaciones.js'


let libros_regional = document.getElementById('books_escala-regional')
let libros_local = document.getElementById('books_escala-local')
let libros_ambiental = document.getElementById('books_investigacion-ambiental')
let libros_agua = document.getElementById('books_manejo-agua')
let libros_tec = document.getElementById('books_tec-limpias')
let template_elemento = document.getElementById('template_elemento')
let template_content = document.getElementById('template_content')
let books_div = document.getElementById('categorie_books')
let caps_div = document.getElementById('categorie_caps')





const libros = []
const capitulos = []
let años_libros = []
let años_capitulos = []


function main() {
    clasificación()
    ordenar()
    mostrar()
}

function clasificación() {
    publicaciones.forEach((item, i) => {
        if (item.tipo === 1) {
            libros.push(item)
            años_libros.push(item.fecha)
        } else if (item.tipo === 2) {
            capitulos.push(item)
            años_capitulos.push(item.fecha)
        }

    })

}

function ordenar() {
    libros.sort(function (a, b) {
        return a.fecha > b.fecha;
    })

    capitulos.sort(function (a, b) {
        return a.fecha > b.fecha;
    })

    años_libros = años_libros.filter((item, index) => {
        return años_libros.indexOf(item) === index;
    })

    años_libros.sort(function (a, b) {
        return a > b;
    })


    años_capitulos = años_capitulos.filter((item, index) => {
        return años_capitulos.indexOf(item) === index;
    })

    años_capitulos.sort(function (a, b) {
        return a > b;
    })
}

function mostrar() {

    años_libros.forEach((año) => {
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id",`book-${año}`)
        year.innerHTML = año
        books_div.appendChild(template)
    })

    libros.forEach((item) => {
        let template_c = template_content.content.cloneNode(true)
        let div = document.getElementById(`book-${item.fecha}`)
        let image = template_c.querySelector("img")
        let a = template_c.querySelector("a")
        let p = template_c.querySelector("p")
        image.setAttribute('src', item.url_image)
        a.setAttribute('href', item.url)
        p.innerHTML = item.titulo
        div.appendChild(template_c)
    })


    años_capitulos.forEach((año) => {
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id",`cap-${año}`)
        year.innerHTML = año
        caps_div.appendChild(template)
    })

    capitulos.forEach((item) => {
        let template_c = template_content.content.cloneNode(true)
        let div = document.getElementById(`cap-${item.fecha}`)
        let image = template_c.querySelector("img")
        let a = template_c.querySelector("a")
        let p = template_c.querySelector("p")
        image.setAttribute('src', item.url_image)
        a.setAttribute('href', item.url)
        p.innerHTML = item.titulo
        div.appendChild(template_c)
    })


}


window.addEventListener("load", main)