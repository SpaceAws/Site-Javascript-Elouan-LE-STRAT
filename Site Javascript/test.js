/*function fetchPokemon(pokemon){
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then((Response) => Response.json())
}

async function diplayPokemon(pokemon){
    const data = await fetchPokemon(pokemon)
    document.getElementById("pokemon").innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.sprites.front_default}" alt="${data.name}"/>
    `
}

diplayPokemon("machamp");*/

function fetchPotter(character){
    return fetch('https://hp-api.lainocs.fr/characters/' + character)
        .then((Response) => Response.json())
}

async function diplayPotter(character, potter){
    const data = await fetchPotter(character)
    document.getElementById(potter).innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}"/>
    `
}

diplayPotter("harry-potter", "potter");
diplayPotter("rubeus-hagrid", "hagrid");
diplayPotter("sirius-black", "sirius");