
const categories = document.getElementsByClassName("categories_li")
const categories_li_a = document.getElementsByClassName("categories_li_a")
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
            removeFilterSelec(0)
            addSelecFilter(0)


        } else if (categorie.id == "Formulación de politicas") {

            filter_one[0].classList.remove("one")
            filter_three[0].classList.remove("three")
            filter_four[0].classList.remove("four")
            filter_two[0].classList.toggle("two")
            removeFilterSelec(1)
            addSelecFilter(1)



        } else if (categorie.id == "Tecnologias limpias") {
            filter_one[0].classList.remove("one")
            filter_two[0].classList.remove("two")
            filter_four[0].classList.remove("four")
            filter_three[0].classList.toggle("three")
            removeFilterSelec(2)
            addSelecFilter(2)


        } else if (categorie.id == "Fecha") {
            filter_one[0].classList.remove("one")
            filter_two[0].classList.remove("two")
            filter_three[0].classList.remove("three")
            filter_four[0].classList.toggle("four")
            removeFilterSelec(3)
            addSelecFilter(3)

        }


    })
})




// FUNCION PARA REMOVER EL SELEC DE OTROS FILTERS
function removeFilterSelec(p) {
    if (p == 0) {
        categories[1].classList.remove("categorie_select");
        categories_li_a[1].style.color = "#60762e"
        categories[2].classList.remove("categorie_select");
        categories_li_a[2].style.color = "#60762e"
        categories[3].classList.remove("categorie_select");
        categories_li_a[3].style.color = "#60762e"
    } else if (p == 1) {
        categories[0].classList.remove("categorie_select");
        categories_li_a[0].style.color = "#60762e"
        categories[2].classList.remove("categorie_select");
        categories_li_a[2].style.color = "#60762e"
        categories[3].classList.remove("categorie_select");
        categories_li_a[3].style.color = "#60762e"
    } else if (p == 2) {
        categories[0].classList.remove("categorie_select");
        categories_li_a[0].style.color = "#60762e"
        categories[1].classList.remove("categorie_select");
        categories_li_a[1].style.color = "#60762e"
        categories[3].classList.remove("categorie_select");
        categories_li_a[3].style.color = "#60762e"
    } else if (p == 3) {
        categories[0].classList.remove("categorie_select");
        categories_li_a[0].style.color = "#60762e"
        categories[1].classList.remove("categorie_select");
        categories_li_a[1].style.color = "#60762e"
        categories[2].classList.remove("categorie_select");
        categories_li_a[2].style.color = "#60762e"
    }

 


}


function addSelecFilter(p) {
    if(categories[p].classList.contains("categorie_select")){
        categories[p].classList.toggle("categorie_select")
        categories_li_a[p].style.color = "#60762e"
    }else{
        categories[p].classList.toggle("categorie_select")
        categories_li_a[p].style.color = "white"
    }
    
}