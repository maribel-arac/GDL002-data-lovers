// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// var POKEMON = {
//   "pokemon": [{
//     "id": 1,
//     "num": "001",
//     "name": "Bulbasaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//     "type": [
//       "Grass",
//       "Poison"
//     ],
//     "height": "0.71 m",
//     "weight": "6.9 kg",
//     "candy": "Bulbasaur Candy",
//     "candy_count": 25,
//     "egg": "2 km",
//     "spawn_chance": 0.69,
//     "avg_spawns": 69,
//     "spawn_time": "20:00",
//     "multipliers": [1.58],
//     "weaknesses": [
//       "Fire",
//       "Ice",
//       "Flying",
//       "Psychic"
//     ],
//     "next_evolution": [{
//       "num": "002",
//       "name": "Ivysaur"
//     }, {
//       "num": "003",
//       "name": "Venusaur"
//     }]
//   }, {
//     "id": 2,
//     "num": "002",
//     "name": "Ivysaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
//     "type": [
//       "Grass",
//       "Poison"
//     ],
//     "height": "0.99 m",
//     "weight": "13.0 kg",
//     "candy": "Bulbasaur Candy",
//     "candy_count": 100,
//     "egg": "Not in Eggs",
//     "spawn_chance": 0.042,
//     "avg_spawns": 4.2,
//     "spawn_time": "07:00",
//     "multipliers": [
//       1.2,
//       1.6
//     ],
//     "weaknesses": [
//       "Fire",
//       "Ice",
//       "Flying",
//       "Psychic"
//     ],
//     "prev_evolution": [{
//       "num": "001",
//       "name": "Bulbasaur"
//     }],
//     "next_evolution": [{
//       "num": "003",
//       "name": "Venusaur"
//     }]
//   },
  //window.pokemon.data{}
// document.getElementById("compareAgain").addEventListener("click", getDataBase);
//   function getDataBase(data, namePokemon){
//     const allPokemons = [];
//     const nameP = document.getElementById('searchName').value;
//     for (let i = 0; i < POKEMON.length; i++){
//       pokemon[i].name == namePokemon;
//       allPokemons.push(POKEMON[i].name);
//       console.log(allPokemons);
//     }
//   }

//   function getDataBase(namePokemon){
//     const allPokemons = [];
//     for (let i = 0; i < POKEMON.pokemon.length; i++){
// 		if (POKEMON.pokemon[i].hasOwnProperty('name') === namePokemon) {
//      	allPokemons.push(POKEMON.pokemon[i].name);
//      }
//     }
// return allPokemons;
//   }

function getDataBase(namePokemon){
  let listPokemon = POKEMON.pokemon
  const allPokemons = [];
  for (let i = 0; i < listPokemon.length; i++){
    if
    (listPokemon[i].name == namePokemon){
      allPokemons.push(namePokemon);
    }
   
   
  }
return allPokemons;
}