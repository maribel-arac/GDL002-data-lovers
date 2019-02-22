//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn'
function compare(event) {//
	 console.log(event.target);	
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

// 	//funcion para limpiar y poder comparar otro
// function compareAgain(){
// 	document.getElementById('imagePokemon').value="";
// }
// 	document.getElementById('compareAgain').addEventListener('click', compareAgain);



//funcion por si escoge 'debilidades' lo mande a esa pantalla
function weaknessScreen(){
	document.getElementById('home').style.display = "none";
	document.getElementById('weaknessScreen').style.display = "block";
}
	document.getElementById('weaknessBtn').addEventListener('click',weaknessScreen);

//funcion para cambiar de la 'weaknessScreen' a 'resultsScreen'
function weaknessResults(){
	document.getElementById('weaknessScreen').style.display = "none";
	document.getElementById('weaknessResults').style.display = "block";
}
    document.getElementById('btnGo').addEventListener('click', weaknessResults);


//función salir en pantalla 'debilidades'
function exit2() {
	document.getElementById('weaknessResults').style.display = "none";
	document.getElementById('exitScreen').style.display = "block";
}
	document.getElementById('exit').addEventListener('click', exit2);




 //funcion para llamar a namePokemon para que lo mande al selector   
let listPokemon = POKEMON.pokemon
 //Esta función compara .name por .name para ordenar alfabeticamente cada valor y lo enlaza con el forEach, ya que .sort devuelve un arreglo y forEach no.
 let dropDownBox=document.getElementById("selectPokemon");
 listPokemon.sort((a,b)=> {  
	//console.log(a.name);
	if (a.name < b.name) {
		return -1;
	  }
	  if (a.name > b.name) {
		return 1;
	  }
	 
	  return 0;
}).forEach(pokemon => {
	//console.log(dropDownBox);

	let option = document.createElement("option");
	option.text = pokemon.name;
	dropDownBox.add(option);
	
});

dropDownBox.addEventListener("change", (event) => {
	console.log(event.target.value);
	document.getElementById("imagePokemon").src = filterImage(POKEMON.pokemon, event.target.value)

})
// dropDownBox.forEach(element=>{
// 	j = image.innerHTML += `<div> <img class = "boxImage" src = "${element.img}" >`
// })
// let image= document.getElementById('imagePokemon');
// image.setAttribute('src', ''+ listPokemon.img);















/**Esta función compara .name por .name para ordenar alfabeticamente cada valor y lo enlaza con el forEach, ya que .sort devuelve un arreglo y forEach no*/
let namePokemonOpponent = POKEMON.pokemon
 
 namePokemonOpponent.sort((a,b)=> {  
	//console.log(a.name);
	if (a.name < b.name) {
		return -1;
	  }
	  if (a.name > b.name) {
		return 1;
	  }
	 
	  return 0;
}).forEach(pokemon => {
	let dropDownBox=document.getElementById("selectOpponent");
	//console.log(dropDownBox);
	let option = document.createElement("option");
	option.text = pokemon.name;
	dropDownBox.add(option);
});

