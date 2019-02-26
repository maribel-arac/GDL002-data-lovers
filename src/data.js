// let imagePokemon = '';
const filterImage = (listPokemon, selectPokemon) => {  
  const image = listPokemon.filter(pokemon => (pokemon.name == selectPokemon));
  console.log(image[0].img);
  return image[0].img;
}
// console.log(filterImage(namePokemon,'img'));

const filterImageOpponent = (nameOpponent, selectOpponent) => {  
  const image = nameOpponent.filter(pokemon => (pokemon.name == selectOpponent));
  //console.log(image[0].img);
  return image[0].img;
}