let listPokemon = window.POKEMON.pokemon
//funcion home icon
function homeIcon(){
	document.getElementById('pokedexScreen').style.display = "none";
	document.getElementById('compareScreen').style.display = "none";
	document.getElementById('exitScreen').style.display = 'none';
	document.getElementById('home').style.display = 'block';
}
document.getElementById('homeBtn').addEventListener('click',homeIcon);
//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn' se encuentran los selectores
function compare(event) {//
	 //console.log(event.target);	
	document.getElementById('home').style.display = "none"; //darle invisibilidad
	document.getElementById('compareScreen').style.display = "block"; //mostrar el bloque (pantalla/slide)
}
	document.getElementById('compareBtn').addEventListener('click', compare);

//funcion de salir en la pantalla de 'comparar'
function exit() {
	document.getElementById('compareScreen').style.display = "none"; //darle invisibilidad
	document.getElementById('exitScreen').style.display = "block";
}
	document.getElementById('exit').addEventListener('click', exit);


/**Funcion si escoge 'pokedex' lo mande a esa pantalla */
function pokedexInfo(){
	console.log('entro?');
	document.getElementById('home').style.display = "block";
	
	//document.getElementById('root').style.display = "none";
}
document.getElementById('pokedexScreen').style.display = "none";
	document.getElementById('pokedexBtn').addEventListener('click',pokedexInfo());

//función salir en pantalla 'pokedex'
function exit2() {
	document.getElementById('pokedexScreen').style.display = "none";
	document.getElementById('exitScreen').style.display = "block";
	
}
	document.getElementById('exitBtn').addEventListener('click', exit2);

//funcion para llenar los selectores de HTML y ordenarlos alfabeticamente
let fillInSelect = (selectId) => {
   let selectElement = document.getElementById(selectId);
   listPokemon.sort((a,b)=> {	//es la funcion que ordena alfabeticamente cada pokemon de la base de datos
       if (a.name < b.name) {
           return -1;
         }
         if (a.name > b.name) {
           return 1;
         }

         return 0;
   }).forEach(pokemon => {
       let option = document.createElement("option");
       option.text = pokemon.name;
       selectElement.add(option);
   });
};
fillInSelect("selectPokemon"); //aquí es donde se rellenan los selectores
fillInSelect("selectOpponent");

//es un string template donde se muestran: imagenes, tipos y debilidades de c/ pokemon elegido
function pokeCard(objetPoke) {
	//console.log(objetPoke);
  return `
	<div class="poke-box">
	<p><img src="${objetPoke.img}"></p>
	<p>Type: ${objetPoke.type}</p>
	<p>Weakness: ${objetPoke.weaknesses}</p>
	</div>
`;
}

//muestra en la pantalla el pokemon seleccionado por el usuario junto con imagene, tipo y debilidades
document.getElementById("selectPokemon").addEventListener("change", (event) => {
	let objetPoke = filterData(listPokemon, event.target.value)
	document.getElementById('featuresPokemon').innerHTML= pokeCard(objetPoke)
  
	
});
//muestra en la pantalla el oponente seleccionado por el usuario junto con imagene, tipo y debilidades
document.getElementById("selectOpponent").addEventListener("change", (event) => {
	const newObject = filterData(listPokemon, event.target.value);
	// console.log(newObject);
	document.getElementById("featuresOpponent").innerHTML = pokeCard(newObject);
	
});

//se manda llamar la función computerData y el resultado, lo muestra en la pantalla
document.getElementById('candies', 'selectPokemon').addEventListener("keyup", (event) => {
	console.log("hola");
	const candyObject = computerData(listPokemon, selectPokemon, event.target.value);
	console.log(candyObject);
	document.getElementById("results").innerHTML = candyObject;
	});