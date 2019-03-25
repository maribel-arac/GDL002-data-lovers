window.allPokemons = {
  allPokemons:() =>{
    return POKEMON.pokemon;
  },
  /*Función para filtrar los pokemones por imagen. Se crea una variable para  filtrar los pokemones donde 
  se compara con el nombre del pokemon seleccionado por el usuario y despues para entrar al objeto, se comienza en
  [0] y de ahi, acceder solo a la imagen que pertenece al Pokemon seleccionado*/
  filterData: (listPokemon, selectPokemon) => {  
    //ESta función debe de recibir una data (arreglos de objetos) y un String (el nombre del pokemon)
    const data = listPokemon.filter(pokemon => (pokemon.name == selectPokemon));
    // Y retorna un objeto pokemon
    return data[0];

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

  //Función para filtrar por tipo
  filterType: (listPokemon, pokeType) => {
    const filterByType = listPokemon.filter(listPokemon => listPokemon.type.includes(pokeType));
    return filterByType;
}
  };
