//funcion home icon
function homeIcon(){
	document.getElementById('weaknessScreen').style.display = "none";
	document.getElementById('compareScreen').style.display = "none";
	document.getElementById('weaknessResults').style.display = 'none';
	document.getElementById('exitScreen').style.display = 'none';
	document.getElementById('home').style.display = 'block';
}
document.getElementById('homeBtn').addEventListener('click',homeIcon);
//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn'
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

// 	//funcion para limpiar y poder comparar otro
// function compareAgain(){
// 	document.getElementById('imagePokemon').value="";
// }
// 	document.getElementById('compareAgain').addEventListener('click', compareAgain);

/**Funcion por si escoge 'debilidades' lo mande a esa pantalla */
function weaknessScreen(){
	document.getElementById('home').style.display = "none";
	document.getElementById('weaknessScreen').style.display = "block";
}
	document.getElementById('weaknessBtn').addEventListener('click',weaknessScreen);

//funcion para cambiar de la 'weaknessScreen' a 'resultsScreen'
function weaknessResults(){
	document.getElementById('weaknessScreen').style.display = "none";
	document.getElementById('exitScreen').style.display = "block";
}
    document.getElementById('exitBtn').addEventListener('click', weaknessResults);


//función salir en pantalla 'debilidades'
function exit2() {
	document.getElementById('weaknessResults').style.display = "none";
	document.getElementById('exitScreen').style.display = "block";
}
	document.getElementById('exit').addEventListener('click', exit2);

//funcion para llenar los selectores de HTML
let listPokemon = POKEMON.pokemon
let fillInSelect = (selectId) => {
   let selectElement = document.getElementById(selectId);
   listPokemon.sort((a,b)=> {
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
fillInSelect("selectPokemon");
fillInSelect("selectOpponent");

document.getElementById("selectPokemon").addEventListener("change", (event) => {
   document.getElementById("imagePokemon").src = filterImage(listPokemon, event.target.value)
});

document.getElementById("selectOpponent").addEventListener("change", (event) => {
   document.getElementById("imageOpponent").src = filterImageOpponent(listPokemon, event.target.value)
});
