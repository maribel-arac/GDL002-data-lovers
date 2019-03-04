window.allPokemons = {
  /*Función para filtrar los pokemones por imagen. Se crea una variable para  filtrar los pokemones donde 
  se compara con el nombre del pokemon seleccionado por el usuario y despues para entrar al objeto, se comienza en
  [0] y de ahi, acceder solo a la imagen que pertenece al Pokemon seleccionado*/
  filterData: (listPokemon, selectPokemon) => {  
    //ESta función debe de recibir una data (arreglos de objetos) y un String (el nombre del pokemon)
    const data = listPokemon.filter(pokemon => (pokemon.name == selectPokemon));
    // Y retorna un objeto pokemon
    return data[0];

<<<<<<< HEAD
  },

  //Función es para saber cuantos candies le faltan al usuario para evolucionar su pokemon
  computeStats: (objectPokemon, selectPokemon, candies) => {
    //console.log(objectPokemon, selectPokemon, candies);
    return objectPokemon.find(pokemon => 
      pokemon.name === selectPokemon[selectPokemon.selectedIndex].innerText).candy_count - candies;
      
    },
    sortData: (allPokemons) => {

      let orderAllName = allPokemons.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      });
      return orderAllName;
    },
  };
=======
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
>>>>>>> master
