/*Définition des variables pour le mode nuit*/
let button = document.querySelector("#button")
let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")
let darkmode = false

/*Activation/Désactivation du mode nuit via un bouton, fonctionnement par id*/
button.addEventListener('click', function(){
    if (darkmode == false){
        darkmode = true                     /*Permet de savoir si le site est en darkmode ou non pour faire fonctionner la condition à la ligne au dessus*/
        document.getElementById('menu_bg').className = "dark_menu_bg"       /*Passage en mode dark des différents éléments par ID*/
        document.getElementById('cartes_bg').className = "dark_cartes_bg"
        document.getElementById('cours_bg').className = "dark_cours_bg"
        document.getElementById('header').className = "dark_hr"
        document.getElementById('button').className = "dark_bn"
        document.getElementById('footer').className = "dark_fr"
        button.innerHTML = "Dark Mode"
        image1.src = 'de_vinci.jpg'
        image2.src = 'de_vinci.jpg'
    } else {
        darkmode = false
        document.getElementById('menu_bg').className = "light_menu_bg"      /*Passage en mode light des différents éléments par ID*/
        document.getElementById('cartes_bg').className = "light_cartes_bg"
        document.getElementById('cours_bg').className = "light_cours_bg"
        document.getElementById('header').className = "light_hr"
        document.getElementById('button').className = "light_bn"
        document.getElementById('footer').className = "light_fr"
        button.innerHTML = "Light Mode"
        image1.src = 'de_vinci_light.png'
        image2.src = 'de_vinci_light.png'
    }
})

/*Mise en place du swiper*/
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*Définition des variables pour les tabs*/
let tab1 = document.querySelector('#li1')
let tab2 = document.querySelector('#li2')
let tab3 = document.querySelector('#li3')
let tab1_act = false
let tab2_act = false
let tab3_act = false


/*Tab 1, A propos*/
tab1.addEventListener('mouseenter', function(){     /*Mets le texte en évidence lors du passage de la souris*/
    this.classList.toggle('tab_active')
    this.classList.toggle('tab')
})
tab1.addEventListener('mouseleave', function(){
    this.classList.toggle('tab_active')
    this.classList.toggle('tab')
})
tab1.addEventListener('click', function(){          /*Mets la tab clickée en active et les autres en inactives lors du click*/
    document.getElementById('menu').className = "unactive"
    document.getElementById('cartes').className = "cartes_active"
    document.getElementById('cours').className = "unactive"
})


/*Tab 2, Menu*/
tab2.addEventListener('mouseenter', function(){
    this.classList.toggle('tab_active')
    this.classList.toggle('tab')
})
tab2.addEventListener('mouseleave', function(){
    this.classList.toggle('tab_active')
    this.classList.toggle('tab')
})
tab2.addEventListener('click', function(){
    document.getElementById('menu').className = "menu_active"
    document.getElementById('cartes').className = "unactive"
    document.getElementById('cours').className = "unactive"
})


/*Tab 3, Cours*/
tab3.addEventListener('mouseenter', function(){
    this.classList.toggle('tab_active')
    this.classList.toggle('tab')
})
tab3.addEventListener('mouseleave', function(){
    this.classList.toggle('tab_active')
    this.classList.toggle('tab')
})
tab3.addEventListener('click', function(){
    document.getElementById('menu').className = "unactive"
    document.getElementById('cartes').className = "unactive"
    document.getElementById('cours').className = "cours_active"
})

/*API Harry Potter*/
function fetchPotter(character){
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
        .then((Response) => Response.json())
}

async function diplayPotter(character, texte, image){
    const data = await fetchPotter(character)
    document.getElementById(texte).innerHTML = data.name
    document.getElementById(image).src = data.image
}

/*Appel de la fonction d'affichage avec trois personnages différents*/
diplayPotter("harry-potter", "text_chara1", "image_chara1");
diplayPotter("rubeus-hagrid", "text_chara2", "image_chara2");
diplayPotter("sirius-black", "text_chara3", "image_chara3");