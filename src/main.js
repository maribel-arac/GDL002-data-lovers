//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn'
function compare() {
	document.getElementById('home').style.display = "none"; //darle invisibilidad
	document.getElementById('compareScreen').style.display = "block"; //mostrar el bloque (pantalla/slide)
}
	document.getElementById('compareBtn').addEventListener('click', compare);


//funcion de salir en la pantalla de 'comparar'
function exit() {
	document.getElementById('compareScreen').style.display = "none";
	document.getElementById('exitScreen').style.display = "block";
}
	document.getElementById('exit').addEventListener('click', exit);

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
	document.getElementById('exit2').addEventListener('click', exit2);