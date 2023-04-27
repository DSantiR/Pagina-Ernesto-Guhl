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
let template_p = document.getElementById('template_parrafo')
let books_div = document.getElementById('categorie_books')
let caps_div = document.getElementById('categorie_caps')



const libros = []
const capitulos = []
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
    let concat_años = [...años_libros, ...años_capitulos]
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
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })
    })
    p[1].addEventListener("click", (e) => {
        eliminarFiltro()



        eliminarFiltro()
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
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    })
    p[2].addEventListener("click", (e) => {
        eliminarFiltro()
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
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })



    })
    p[3].addEventListener("click", (e) => {
        eliminarFiltro()
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })



        let templatec = template_elemento.content.cloneNode(true);
        let div_booksc = templatec.querySelector(".categorie_cars")
        let yearc = templatec.querySelector("span")
        div_booksc.setAttribute("id", `cap-${2010}`)
        yearc.innerHTML = 2015
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })
    })
    p[4].addEventListener("click", (e) => {
        eliminarFiltro()

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
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    })
    p[5].addEventListener("click", (e) => {
        eliminarFiltro()
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
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    })

    p[6].addEventListener("click", (e) => {
        eliminarFiltro()

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
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })




    })
    p[7].addEventListener("click", (e) => {
        eliminarFiltro()
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2005}`)
        year.innerHTML = 2005
        books_div.appendChild(template)


        
        libros.forEach((item) => {
            if (item.fecha === 2005){
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    
    })
    p[8].addEventListener("click", (e) => {
        eliminarFiltro()
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2004}`)
        year.innerHTML = 2004
        books_div.appendChild(template)


        
        libros.forEach((item) => {
            if (item.fecha === 2004){
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    
    })
    p[9].addEventListener("click", (e) => {
        eliminarFiltro()
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2003}`)
        year.innerHTML = 2003
        books_div.appendChild(template)


        
        libros.forEach((item) => {
            if (item.fecha === 2003){
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    
    })
    p[10].addEventListener("click", (e) => {
        eliminarFiltro()
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2001}`)
        year.innerHTML = 2001
        books_div.appendChild(template)


        
        libros.forEach((item) => {
            if (item.fecha === 2001){
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    
    })
    p[11].addEventListener("click", (e) => {
        eliminarFiltro()
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${2000}`)
        year.innerHTML = 2000
        books_div.appendChild(template)


        
        libros.forEach((item) => {
            if (item.fecha === 2000){
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
                div.appendChild(template_c)
            }

        })

    
    })
    p[12].addEventListener("click", (e) => {
        eliminarFiltro()
        temporal = []
        cap_temporal = []
        let template = template_elemento.content.cloneNode(true);
        let year = template.querySelector("span")
        let div_books = template.querySelector(".categorie_cars")
        div_books.setAttribute("id", `book-${1999}`)
        year.innerHTML = 1999
        books_div.appendChild(template)


        
        libros.forEach((item) => {
            if (item.fecha === 1999){
                let template_c = template_content.content.cloneNode(true)
                let div = document.getElementById(`book-${item.fecha}`)
                let image = template_c.querySelector("img")
                let a = template_c.querySelector("a")
                let p = template_c.querySelector("p")
                image.setAttribute('src', item.url_image)
                a.setAttribute('href', item.url)
                p.innerHTML = item.titulo
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
                p.innerHTML = item.titulo
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
        p.innerHTML = item.titulo
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
        p.innerHTML = item.titulo
        div.appendChild(template_c)
    })


}

function filtrar(i) {
    eliminarFiltro()
    temporal = []
    cap_temporal = []
    años_temporal = []
    años_capitulost = []

    if (i === 1) {

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
        p.innerHTML = item.titulo
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
        p.innerHTML = item.titulo
        div.appendChild(template_c)
    })

}

function filtrar_año(año) {
    Libros.forEach((item) => {
        if (item.fecha === año) {
            console.log(item);
        }


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



