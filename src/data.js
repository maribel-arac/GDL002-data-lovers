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
// function getDataBase(namePokemon){
//   const allPokemons = [];
 
//   let listPokemon = POKEMON.pokemon
//   for (let i = 0; i < listPokemon.length; i++){
//   listPokemon[i].hasOwnProperty('name') === namePokemon
//      allPokemons.push(listPokemon[i].name);
    
     
//   }
// return allPokemons;
// }

/**Función que devuelve la imagen del Pokemon (un sólo valor) según el nombre */
// filterData:(data,namePokemon) =>{
//   console.log(data,namePokemon);
//   for(let i=0; i<data.length; i++){
//     let pokemon = data[i];
//     if(pokemon.name == namePokemon){
//       return pokemon;
//     }
//   }
// }

/*Función para filtrar los pokemones por imagen. Se hizo una variable para en esta filtrar los pokemones donde 
se compara con el nombre del pokemon seleccionado por el usuario y despues para entrar al objeto, se comienza en [0] para
que de ahi, acceda solamente a la imagen*/
 
// console.log(photoPokemons);
// let imagePokemon = '';
const filterImage = (listPokemon, selectPokemon) => {  
  const image = listPokemon.filter(pokemon => (pokemon.name == selectPokemon));

  //console.log(image[0].img);
  return image[0].img;
}
// console.log(filterImage(namePokemon,'img'));


const filterImageOpponent = (nameOpponent, selectOpponent) => {  
  const image = nameOpponent.filter(pokemon => (pokemon.name == selectOpponent));
  //console.log(image[0].img);
  return image[0].img;
}
