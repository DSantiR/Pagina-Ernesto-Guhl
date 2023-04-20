
const categories = document.getElementsByClassName("categories_li")

const filter_one = document.getElementsByClassName("filter_one")
const filter_two = document.getElementsByClassName("filter_two")
const filter_three = document.getElementsByClassName("filter_three")

Array.from(categories).forEach((categorie) => {

    categorie.addEventListener("click", () => {
        if (categorie.id == "Análisis territorial") {
            filter_two[0].classList.remove("two")
            filter_three[0].classList.remove("three")
            filter_one[0].classList.toggle("one")
          


        } else if (categorie.id == "Formulación de politicas") {
            filter_one[0].classList.remove("one")
            filter_three[0].classList.remove("three")
            filter_two[0].classList.toggle("two")

        } else if (categorie.id == "Tecnologias limpias") {
            filter_one[0].classList.remove("one")
            filter_two[0].classList.remove("two")
            filter_three[0].classList.toggle("three")
        }


    })
})
