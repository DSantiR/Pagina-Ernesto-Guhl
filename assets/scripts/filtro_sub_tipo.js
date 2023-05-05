
const categories = document.getElementsByClassName("categories_li")

const filter_one = document.getElementsByClassName("filter_one")
const filter_two = document.getElementsByClassName("filter_two")
const filter_three = document.getElementsByClassName("filter_three")
const filter_four = document.getElementsByClassName("filter_four")

Array.from(categories).forEach((categorie) => {
    categorie.addEventListener("click", () => {
        if (categorie.id == "Análisis territorial") {
            filter_two[0].classList.remove("two")
            filter_three[0].classList.remove("three")
            filter_four[0].classList.remove("four")
            filter_one[0].classList.toggle("one")
          

        } else if (categorie.id == "Formulación de politicas") {
            filter_one[0].classList.remove("one")
            filter_three[0].classList.remove("three")
            filter_four[0].classList.remove("four")
            filter_two[0].classList.toggle("two")


        } else if (categorie.id == "Tecnologias limpias") {
            filter_one[0].classList.remove("one")
            filter_two[0].classList.remove("two")
            filter_four[0].classList.remove("four")
            filter_three[0].classList.toggle("three")

        }   else if (categorie.id == "Fecha") {
            filter_one[0].classList.remove("one")
            filter_two[0].classList.remove("two")
            filter_three[0].classList.remove("three")
            filter_four[0].classList.toggle("four")
        }


    })
})
