// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
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
//------------------------------------------------------------------
/**Con esta función nos devuelve el nombre del Pokemon (un sólo valor) ingresado por el usuario */
// function getDataBase(namePokemon){
//   let listPokemon = POKEMON.pokemon
//   const allPokemons = [];
//   for (let i = 0; i < listPokemon.length; i++){
//     if
//     (listPokemon[i].name == namePokemon){
//       allPokemons.push(namePokemon);
//     } 
//   }
// return allPokemons;
// }
//-------------------------------------------------------------------
/**Mandando a llamar a la función getDataBase, devuelve los 151 Pokemones
 * getDataBase();
(151) ["Bulbasaur", "Ivysaur"...] */
function getDataBase(namePokemon){
  const allPokemons = [];
let listPokemon = POKEMON.pokemon
  for (let i = 0; i < listPokemon.length; i++){
  listPokemon[i].hasOwnProperty('name') === namePokemon
     allPokemons.push(listPokemon[i].name);
   
  }
return allPokemons;
}

