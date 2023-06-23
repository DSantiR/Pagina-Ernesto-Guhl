import publicaciones from '../data/publicaciones.js'


window.addEventListener("load", main);

let libros_regional = document.getElementById('books_escala-regional')
let libros_local = document.getElementById('books_escala-local')
let libros_ambiental = document.getElementById('books_investigacion-ambiental')
let libros_agua = document.getElementById('books_manejo-agua')
let libros_tec = document.getElementById('books_tec-limpias')
let fecha_div = document.getElementById('books_tec-fecha')
let template_elemento = document.getElementById('template_elemento')
let template_content = document.getElementById('template_content')
let boton_eliminar_filtro = document.getElementById('Borrar')
let books_div = document.getElementById('categorie_books')
let caps_div = document.getElementById('categorie_caps')
let render_años = false



let libros = []
let capitulos = []
let años_libros = []
let años_capitulos = []
let temporal = []
let cap_temporal = []
let años_temporal = []
let años_capitulost = []


function main() {

    clasificación()
    ordenar()
    mostrar()
    renderAños()
}

function renderAños() {
    let concat_años = []
    if (render_años === false) {
        concat_años = [...años_libros, ...años_capitulos]
        renderAños = true
    }
    concat_años = concat_años.filter((item, index) => {
        return concat_años.indexOf(item) === index;
    })
    concat_años.sort((a, b) => {
        return b - a;
    });

    concat_años.forEach((item) => {
        let cadenaHtml = `
        <p class="filter_tipo" id="filter_año">${item}</p>
        `
        fecha_div.innerHTML += cadenaHtml
    })


    let p = document.querySelectorAll('#filter_año')
    p[0].addEventListener("click", (e) => {
        eliminarFiltro()

        p[0].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 0) {
                p[index].classList.remove("btn-select")
            }
        }
        
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2015}`)
        year.innerHTML = 2015
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2015) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2015}`)
        yearc.innerHTML = 2015
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2015) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })
    })
    p[1].addEventListener("click", (e) => {
        eliminarFiltro()
        p[1].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 1) {
                p[index].classList.remove("btn-select")
            }
        }
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2014}`)
        year.innerHTML = 2014
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2014) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2014}`)
        yearc.innerHTML = 2014
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2014) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })
    })
    p[2].addEventListener("click", (e) => {
        eliminarFiltro()

        p[2].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 2) {
                p[index].classList.remove("btn-select")
            }
        }
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2013}`)
        year.innerHTML = 2013
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2013) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2013}`)
        yearc.innerHTML = 2013
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2013) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

    })
    p[3].addEventListener("click", (e) => {
        eliminarFiltro()

        p[3].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 3) {
                p[index].classList.remove("btn-select")
            }
        }
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2012}`)
        year.innerHTML = 2012
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2012) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2012}`)
        yearc.innerHTML = 2012
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2012) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



    })
    p[4].addEventListener("click", (e) => {
        eliminarFiltro()

        p[4].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 4) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2011}`)
        year.innerHTML = 2011
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2011) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2011}`)
        yearc.innerHTML = 2011
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2011) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



    })
    p[5].addEventListener("click", (e) => {
        eliminarFiltro()
        p[5].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 5) {
                p[index].classList.remove("btn-select")
            }
        }
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2010}`)
        year.innerHTML = 2010
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2010) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2010}`)
        yearc.innerHTML = 2010
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2010) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })
    })
    p[6].addEventListener("click", (e) => {
        eliminarFiltro()
        p[6].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 6) {
                p[index].classList.remove("btn-select")
            }
        }

        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2009}`)
        year.innerHTML = 2009
        books_div.appendChild(template)

        libros.forEach((item) => {
            if (item.fecha === 2009) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2009}`)
        yearc.innerHTML = 2009
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2009) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

    })
    p[7].addEventListener("click", (e) => {
        eliminarFiltro()
        p[7].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 7) {
                p[index].classList.remove("btn-select")
            }
        }
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2008}`)
        year.innerHTML = 2008
        books_div.appendChild(template)

        libros.forEach((item) => {
            if (item.fecha === 2008) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2008}`)
        yearc.innerHTML = 2008
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2008) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

    })
    p[8].addEventListener("click", (e) => {
        eliminarFiltro()
        p[8].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 8) {
                p[index].classList.remove("btn-select")
            }
        }
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2007}`)
        year.innerHTML = 2007
        books_div.appendChild(template)

        libros.forEach((item) => {
            if (item.fecha === 2007) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2007}`)
        yearc.innerHTML = 2007
        caps_div.appendChild(templatec)


        capitulos.forEach((item) => {
            if (item.fecha === 2007) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

    })

    p[9].addEventListener("click", (e) => {
        eliminarFiltro()
        p[9].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 9) {
                p[index].classList.remove("btn-select")
            }
        }

        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2006}`)
        year.innerHTML = 2006
        books_div.appendChild(template)


        libros.forEach((item) => {
            if (item.fecha === 2006) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2006}`)
        yearc.innerHTML = 2006
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2006) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })




    })
    p[10].addEventListener("click", (e) => {
        eliminarFiltro()
        p[10].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 10) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2005}`)
        year.innerHTML = 2005
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 2005) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2005}`)
        yearc.innerHTML = 2005
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2005) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[11].addEventListener("click", (e) => {
        eliminarFiltro()
        p[11].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 11) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2004}`)
        year.innerHTML = 2004
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 2004) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2004}`)
        yearc.innerHTML = 2005
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2004) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[12].addEventListener("click", (e) => {
        eliminarFiltro()
        p[12].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 12) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2003}`)
        year.innerHTML = 2003
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 2003) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2003}`)
        yearc.innerHTML = 2003
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2003) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[13].addEventListener("click", (e) => {
        eliminarFiltro()
        p[13].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 13) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2002}`)
        year.innerHTML = 2002
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 2002) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2002}`)
        yearc.innerHTML = 2002
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2002) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[14].addEventListener("click", (e) => {
        eliminarFiltro()
        p[14].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 14) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2001}`)
        year.innerHTML = 2001
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 2001) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2001}`)
        yearc.innerHTML = 2001
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2001) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[15].addEventListener("click", (e) => {
        eliminarFiltro()
        p[15].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 15) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2000}`)
        year.innerHTML = 2000
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 2000) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2000}`)
        yearc.innerHTML = 2000
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 2000) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[16].addEventListener("click", (e) => {
        eliminarFiltro()
        p[16].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 16) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${1999}`)
        year.innerHTML = 1999
        books_div.appendChild(template)



        libros.forEach((item) => {
            if (item.fecha === 1999) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${1999}`)
        yearc.innerHTML = 1999
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 1999) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })
    p[17].addEventListener("click", (e) => {
        eliminarFiltro()
        p[17].classList.add("btn-select")
        for (let index = 0; index < p.length; index++) {
            if (index !== 17) {
                p[index].classList.remove("btn-select")
            }
        }

        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${1998}`)
        year.innerHTML = 1998
        books_div.appendChild(template)

        libros.forEach((item) => {
            if (item.fecha === 1998) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })

        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${1998}`)
        yearc.innerHTML = 1998
        caps_div.appendChild(templatec)

        capitulos.forEach((item) => {
            if (item.fecha === 1998) {
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`cap-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                let libro_minuscula = item.titulo.toLowerCase()
                p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
                div.appendChild(template_c)
            }

        })


    })


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
        div_books.setAttribute("id", `book-${año}`)
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
        let libro_minuscula = item.titulo.toLowerCase()
        p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
        div.appendChild(template_c)
    })


    años_capitulos.forEach((año) => {
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `cap-${año}`)
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
        let libro_minuscula = item.titulo.toLowerCase()
        p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
        div.appendChild(template_c)
    })


}

function filtrar(i) {
    let boton_esc_Reg = document.getElementById("books_escala-regional")
    let boton_esc_Loc = document.getElementById("books_escala-local")
    let boton_inv_Amb = document.getElementById("books_investigacion-ambiental")
    let boton_man_Agua = document.getElementById("books_manejo-agua")
    let boton_man_Tecn = document.getElementById("books_tec-limpias")
    eliminarFiltro()
    temporal = []
    cap_temporal = []
    años_temporal = []
    años_capitulost = []

    if (i === 1) {
        boton_esc_Reg.classList.add("btn-select")
        boton_esc_Loc.classList.remove("btn-select")
        boton_inv_Amb.classList.remove("btn-select")
        boton_man_Agua.classList.remove("btn-select")
        boton_man_Tecn.classList.remove("btn-select")
        libros.forEach((item) => {
            if (item.escalas_regionales === true) {
                temporal.push(item)
                años_temporal.push(item.fecha)
            }
        })


        capitulos.forEach((item) => {
            if (item.escalas_regionales === true) {
                cap_temporal.push(item)
                años_capitulost.push(item.fecha)
            }
        })
    } else if (i === 2) {
        boton_esc_Reg.classList.remove("btn-select")
        boton_esc_Loc.classList.add("btn-select")
        boton_inv_Amb.classList.remove("btn-select")
        boton_man_Agua.classList.remove("btn-select")
        boton_man_Tecn.classList.remove("btn-select")
        libros.forEach((item) => {
            if (item.escalas_locales === true) {
                temporal.push(item)
                años_temporal.push(item.fecha)
            }
        })


        capitulos.forEach((item) => {
            if (item.escalas_locales === true) {
                cap_temporal.push(item)
                años_capitulost.push(item.fecha)
            }
        })

    } else if (i === 3) {
        boton_esc_Reg.classList.remove("btn-select")
        boton_esc_Loc.classList.remove("btn-select")
        boton_inv_Amb.classList.add("btn-select")
        boton_man_Agua.classList.remove("btn-select")
        boton_man_Tecn.classList.remove("btn-select")
        libros.forEach((item) => {
            if (item.investigacion_ambiental === true) {
                años_temporal.push(item.fecha)
                temporal.push(item)
            }
        })


        capitulos.forEach((item) => {
            if (item.investigacion_ambiental === true) {
                cap_temporal.push(item)
                años_capitulost.push(item.fecha)
            }
        })

    }
    else if (i === 4) {
        boton_esc_Reg.classList.remove("btn-select")
        boton_esc_Loc.classList.remove("btn-select")
        boton_inv_Amb.classList.remove("btn-select")
        boton_man_Agua.classList.add("btn-select")
        boton_man_Tecn.classList.remove("btn-select")
        libros.forEach((item) => {
            if (item.manejo_de_agua === true) {
                temporal.push(item)
                años_temporal.push(item.fecha)
            }
        })


        capitulos.forEach((item) => {
            if (item.manejo_de_agua === true) {
                cap_temporal.push(item)
                años_capitulost.push(item.fecha)
            }
        })

    }
    else if (i === 5) {
        boton_esc_Reg.classList.remove("btn-select")
        boton_esc_Loc.classList.remove("btn-select")
        boton_inv_Amb.classList.remove("btn-select")
        boton_man_Agua.classList.remove("btn-select")
        boton_man_Tecn.classList.add("btn-select")

        libros.forEach((item) => {
            if (item.tecnologias_limpias === true) {
                temporal.push(item)
                años_temporal.push(item.fecha)
            }
        })


        capitulos.forEach((item) => {
            if (item.tecnologias_limpias === true) {
                cap_temporal.push(item)
                años_capitulost.push(item.fecha)
            }
        })

    }


    mostrarFiltro()
}

function mostrarFiltro() {
    unificarAños()
    renderFiltro()
}

function eliminarFiltro() {
    while (books_div.hasChildNodes()) {
        books_div.removeChild(books_div.firstChild);
    }


    while (caps_div.hasChildNodes()) {
        caps_div.removeChild(caps_div.firstChild);
    }

    let boton_esc_Reg = document.getElementById("books_escala-regional").classList.remove("btn-select")
    let boton_esc_Loc = document.getElementById("books_escala-local").classList.remove("btn-select")
    let boton_inv_Amb = document.getElementById("books_investigacion-ambiental").classList.remove("btn-select")
    let boton_man_Agua = document.getElementById("books_manejo-agua").classList.remove("btn-select")
    let boton_man_Tecn = document.getElementById("books_tec-limpias").classList.remove("btn-select")
    let p = document.querySelectorAll('#filter_año')
    for (let index = 0; index < p.length; index++) {
        p[index].classList.remove("btn-select")

    }
}

function unificarAños() {
    años_temporal = años_temporal.filter((item, index) => {
        return años_temporal.indexOf(item) === index;
    })

    años_capitulost = años_capitulost.filter((item, index) => {
        return años_capitulost.indexOf(item) === index;
    })



}

function renderFiltro() {
    años_temporal.forEach((año) => {
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `bookt-${año}`)
        year.innerHTML = año
        books_div.appendChild(template)
    })

    temporal.forEach((item) => {
        let template_c = template_content.content.cloneNode(true)
        let div = document.getElementById(`bookt-${item.fecha}`)
        let image = template_c.querySelector("img")
        let a = template_c.querySelector("a")
        let p = template_c.querySelector("p")
        image.setAttribute('src', item.url_image)
        a.setAttribute('href', item.url)
        let libro_minuscula = item.titulo.toLowerCase()
        p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
        div.appendChild(template_c)
    })


    años_capitulost.forEach((año) => {
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `capt-${año}`)
        year.innerHTML = año
        caps_div.appendChild(template)
    })

    cap_temporal.forEach((item) => {
        let template_c = template_content.content.cloneNode(true)
        let div = document.getElementById(`capt-${item.fecha}`)
        let image = template_c.querySelector("img")
        let a = template_c.querySelector("a")
        let p = template_c.querySelector("p")
        image.setAttribute('src', item.url_image)
        a.setAttribute('href', item.url)
        let libro_minuscula = item.titulo.toLowerCase()
        p.innerHTML = libro_minuscula[0].toUpperCase() + libro_minuscula.slice(1)
        div.appendChild(template_c)
    })

}





libros_regional.addEventListener("click", function () {
    filtrar(1)
});
libros_local.addEventListener("click", function () {
    filtrar(2)
});
libros_ambiental.addEventListener("click", function () {
    filtrar(3)
});
libros_agua.addEventListener("click", function () {
    filtrar(4)
});
libros_tec.addEventListener("click", function () {
    filtrar(5)
});
boton_eliminar_filtro.addEventListener("click", function () {
    eliminarFiltro()
    libros = []
    capitulos = []
    años_libros = []
    años_capitulos = []
    temporal = []
    cap_temporal = []
    años_temporal = []
    años_capitulost = []
    main()
});



