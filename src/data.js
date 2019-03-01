
/*Función para filtrar los pokemones por imagen. Se crea una variable para  filtrar los pokemones donde 
se compara con el nombre del pokemon seleccionado por el usuario y despues para entrar al objeto, se comienza en
 [0] y de ahi, acceder solo a la imagen que pertenece al Pokemon seleccionado*/
 
// console.log(photoPokemons);
// let imagePokemon = '';
const filterData = (listPokemon, selectPokemon) => {  
  //ESta función debe de recibir una data (arreglos de objetos) y un String (el nombre del pokemon)
  const data = listPokemon.filter(pokemon => (pokemon.name == selectPokemon));
  //console.log(image[0].name);

  // Y retorna un objeto pokemon
  return data[0];
}

//esta función es para saber cuantos candies le faltan al usuario para evolucionar su pokemon
 const computerData = (objectPokemon, selectPokemon, candies) => {
  // console.log(objectPokemon);
   console.log(objectPokemon.find(pokemon => pokemon.name === selectPokemon[selectPokemon.selectedIndex].innerText).candy_count); 
   return objectPokemon.find(pokemon => pokemon.name === selectPokemon[selectPokemon.selectedIndex].innerText).candy_count - candies;
 }
  