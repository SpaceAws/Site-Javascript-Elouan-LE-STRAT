/*Exercice 1
let age = 19
const cat = 7

if (age <= 60) {
    age = age / cat
    console.log('Your cat age is', age)
} else {
    console.log('The cat is too old')
}
*/

/*Exercice 2 
let name = 'Hector'
let money = 50
let lingotOr = 3
let lingotPrix = 12
let lingotOrAchete = 0

function achat(number1, number2) {
    return number1 - number2
}

while (money >= lingotPrix && lingotOr > 0){
    money = achat(money, lingotPrix)
    lingotOr--
    lingotOrAchete++
}

console.log(name, 'a acheté', lingotOrAchete, 'lingots')
console.log(name, 'garde', money, '€')
console.log('Il reste', lingotOr, 'lingots au magasin')
*/

//Exercice 3
class Character {
    constructor(attack, precision, health) {
        this.attack = attack;
        this.precision = precision;
        this.health = health;
    }
}

//Fonction qui vérifie la précision en la comparant à un nombre aléatoire
function Précision(random, précision, hit){
    if(random > précision){
        hit = true
        return hit
    } else {
        hit = false
        return hit
    }
}

//Fonction qui inflige des dégâts (active lorsque la précision est vraie)
function Attaque(attack, health){
    return health - attack
}

let Barnabé = new Character(10, 0.4, 100);
let Léonard = new Character(8, 0.3, 100);
let hit1 = false
let h1 = true
let hit2 = false
let h2 = true

//Boucle du combat qui vérifie la précision puis qui inflige les dégâts si c'est nécessaire, jusqu'à ce qu'un des combattant soit mort
while (Barnabé.health > 0 && Léonard.health > 0){
    let r1 = Math.random()
    console.log(r1)
    h1 = Précision(r1, Barnabé.precision, hit1)
    console.log(h1)
    if(h1 == true){
        Léonard.health = Attaque(Barnabé.attack, Léonard.health)
        console.log('Barnabé hits Léonard !')
        console.log('Léonard has', Léonard.health, 'HP left')
    } else {
        console.log('Barnabé missed')
    }
    if(Léonard.health > 0){
        let r2 = Math.random()
        console.log(r2)
        h2 = Précision(r2, Léonard.precision, hit2)
        console.log(h2)
        if(h2 == true){
            Barnabé.health = Attaque(Léonard.attack, Barnabé.health)
            console.log('Léonard hits Barnabé !')
            console.log('Barnabé has', Barnabé.health, 'HP left')
        } else {
            console.log('Léonard missed')
        }
    }
}

//Annonce l'issue du combat
if(Barnabé.health <= 0){
    console.log('Léonard wins !')
} else {
    console.log('Barnabé wins !')
}