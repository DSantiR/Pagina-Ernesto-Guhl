

const categories = document.getElementsByClassName("categories_li")
const categories_li_a = document.getElementsByClassName("categories_li_a")
const filter_one = document.getElementsByClassName("filter_one")
const filter_two = document.getElementsByClassName("filter_two")
const filter_three = document.getElementsByClassName("filter_three")
const filter_four = document.getElementsByClassName("filter_four")


//  funcion que elimina todos los filtros o el div del subfiltro osea los que se muestran las opciones  al dar clic en el filtro principal(analisís territorial etc)
function removeFilterSubtipo(selectedFilter) {
    const filters = [filter_one[0], filter_two[0], filter_three[0], filter_four[0]];
    for (let i = 0; i < filters.length; i++) {
      if (filters[i] !== selectedFilter) {
        filters[i].classList.remove("add");
      }
    }
  }
  
//agregamos el evento a todos los filtros para que aldarle clic se muestren los sub tipos y borre los selec  anteriores
Array.from(categories).forEach((categorie) => {
    categorie.addEventListener("click", () => {
        if (categorie.id == "Análisis territorial") {
            removeFilterSubtipo(filter_one[0])
            filter_one[0].classList.toggle("add")
            removeFilterSelec(0)
            addSelecFilter(0)
        } else if (categorie.id == "Formulación de politicas") {
            removeFilterSubtipo( filter_two[0])
            filter_two[0].classList.toggle("add")

            removeFilterSelec(1)
            addSelecFilter(1)
        } else if (categorie.id == "Tecnologias limpias") {
            removeFilterSubtipo( filter_three[0])
            filter_three[0].classList.toggle("add")
            removeFilterSelec(2)
            addSelecFilter(2)
        } else if (categorie.id == "Fecha") {
            removeFilterSubtipo(filter_four[0])
            filter_four[0].classList.toggle("add")
            removeFilterSelec(3)
            addSelecFilter(3)

        }

    })
})

// funcion que  quita el color establecido  azul al darle clic, es diferente al del hover 
function removeFilterSelec(p) {
  for (let i = 0; i < categories.length; i++) {
    if (i !== p) {
      categories[i].classList.remove("categorie_select");
      categories_li_a[i].style.color = "#60762e";
    }
  }
}

// funcion que cambia el color y deja ver que hicieron clic en en filtro
function addSelecFilter(p) {
    if(categories[p].classList.contains("categorie_select")){
        categories[p].classList.toggle("categorie_select")
        categories_li_a[p].style.color = "#60762e"
    }else{
        categories[p].classList.toggle("categorie_select")
        categories_li_a[p].style.color = "white"
    }
    
}