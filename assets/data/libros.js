const Libros = [
    {
        titulo: "ANTROPOCENO: LA HUELLA HUMANA.",
        fecha: 2022,
        url_image: "../assets/images/Antropoceno.jpg",
        url: "",
        tipo: 1,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: false,
        tecnologias_limpias: false
    },
    {
        titulo: "NUESTRA AGUA ¿DE DONDE VIENE Y PARA DONDE VA?",
        fecha: 2015,
        url_image: "../assets/images/Libros_img/libro_2.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=d2dab6c789a846038fa1d4f9c6414a15",
        tipo: 1,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: true,
        tecnologias_limpias: false
    },
    {
        titulo: "LA GESTIÓN AMBIENTAL EN COLOMBIA, 1994-2014: ¿UN ESFUERZO INSOSTENIBLE?",
        fecha: 2015,
        url_image: "../assets/images/Libros_img/libro_3.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=f9eeeb83439743f89c349357b4b30922",
        tipo: 1,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: false,
        tecnologias_limpias: false
    },

    {
        titulo: "EL AGUA DE LOS ANDES",
        fecha: 2010,
        url_image: "../assets/images/Libros_img/libro_4.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=a7ec824cdb8e40598dfe2300a04b95f8",
        tipo: 1,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: true,
        tecnologias_limpias: false
    },
    {
        titulo: "GESTIÓN INTEGRADA DEL RECURSO HÍDRICO EN COLOMBIA",
        fecha: 2007,
        url_image: "../assets/images/Libros_img/libro_5.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=684157e17a1a47dca9aa6249d13097d6",
        tipo: 1,
        escalas_regionales: true,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: true,
        tecnologias_limpias: true
    },
    {
        titulo: "ATLAS DEL RIO GRANDE DE LA MAGDALENA",
        fecha: 2002,
        url_image: "../assets/images/Libros_img/libro_6.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=f4ff476fff9541dfb68c3213b0aa5b6a",
        tipo: 1,
        escalas_regionales: true,
        escalas_locales: false,
        investigacion_ambiental: true,
        manejo_de_agua: false,
        tecnologias_limpias: false
    },
    {
        titulo: "TECNOLOGÍAS LÍMPIAS EN PROYECTOS VIALES",
        fecha: 2000,
        url_image: "../assets/images/Libros_img/libro_7.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=13caae07ef6449e7aa2314e641c9fa6e",
        tipo: 1,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: false,
        tecnologias_limpias: true
    },
    {
        titulo: "GUÍA PARA LA GESTIÓN AMBIENTAL REGIONAL Y LOCAL",
        fecha: 1998,
        url_image: "../assets/images/Libros_img/libro_!.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=d38a48ab99ff4d308c322378ff09ca88",
        tipo: 1,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: false,
        tecnologias_limpias: true
    },
    {
        titulo: "LOS PARAMOS CIRCUNDANTES DE LA SABANA DE BOGOTA",
        fecha: 2015,
        url_image: "../assets/images/Libros_img/cap_1.png",
        url: "https://geogeeks2.maps.arcgis.com/apps/MapJournal/index.html?appid=00acaad4142948c6882dd794096f0c3c",
        tipo: 2,
        escalas_regionales: true,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: true,
        tecnologias_limpias: false
    },
    {
        titulo: "EL AGUA UN PATRIMONIO QUE CIRCULA DE MANO EN MANO",
        fecha: 2011,
        url_image: "../assets/images/Libros_img/cap_2.png",
        url: "../assets/images/Libros_img/cap_1.png",
        tipo: 2,
        escalas_regionales: true,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: true,
        tecnologias_limpias: false
    },
    {
        titulo: "SISTEMA NACIONAL AMBIENTAL",
        fecha: 2008,
        url_image: "../assets/images/Libros_img/cap_3.png",
        url: "",
        tipo: 2,
        escalas_regionales: true,
        escalas_locales: false,
        investigacion_ambiental: true,
        manejo_de_agua: false,
        tecnologias_limpias: false
    },
    {
        titulo: "HACIA EL DESARROLLO SOSTENIBLE EN COLOMBIA",
        fecha: 2008,
        url_image: "../assets/images/Libros_img/cap_4.png",
        url: "",
        tipo: 2,
        escalas_regionales: false,
        escalas_locales: false,
        investigacion_ambiental: false,
        manejo_de_agua: false,
        tecnologias_limpias: false
    },
    {
        titulo: "GOBERNABILIDAD INSTITUCIONES Y MEDIO AMBIENTE",
        fecha: 2007,
        url_image: "../assets/images/Libros_img/cap_5.png",
        url: "",
        tipo: 2,
        escalas_regionales: true,
        escalas_locales: false,
        investigacion_ambiental: true,
        manejo_de_agua: false,
        tecnologias_limpias: false
    },
    {
        titulo: "QUE ESTA PASANDO EN COLOMBIA",
        fecha: 2000,
        url_image: "../assets/images/Libros_img/cap_6.png",
        url: "",
        tipo: 2,
        escalas_regionales:false,
        escalas_locales:true,
        investigacion_ambiental:false,
        manejo_de_agua: false,
        tecnologias_limpias:false
    },
    {
        titulo: "VIDA Y REGION. GESTION AMBIENTAL EN EL VALLE DEL CAUCA",
        fecha: 2000,
        url_image: "../assets/images/Libros_img/cap_7.png",
        url: "",
        tipo: 2,
        escalas_regionales:false,
        escalas_locales:true,
        investigacion_ambiental:false,
        manejo_de_agua: false,
        tecnologias_limpias:false
    },
]

export default Libros