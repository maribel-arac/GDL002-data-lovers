let listPokemon = window.POKEMON.pokemon;
//funcion home icon
function homeIcon() {
    document.getElementById('pokedexScreen').style.display = "none";
    document.getElementById('compareScreen').style.display = "none";
    document.getElementById('exitScreen').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}
document.getElementById('homeBtn').addEventListener('click', homeIcon);
//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn' se encuentran los selectores
function compare() {
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
function pokedexInfo() {
    document.getElementById('home').style.display = "none";
    document.getElementById('pokedexScreen').style.display = "block";
    //document.getElementById('root').style.display = "none";
}
document.getElementById('pokedexBtn').addEventListener('click', pokedexInfo);

//función salir en pantalla 'pokedex'
function exit2() {
    document.getElementById('pokedexScreen').style.display = "none";
    document.getElementById('exitScreen').style.display = "block";

}
document.getElementById('exitBtn').addEventListener('click', exit2);

//funcion para llenar los selectores de HTML y ordenarlos alfabeticamente
let fillInSelect = (selectId) => {
    let selectElement = document.getElementById(selectId);
    listPokemon.sort((a, b) => { //es la funcion que ordena alfabeticamente cada pokemon de la base de datos
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
let allList = document.getElementById("allList");

function pokeCard(filtered) {

    let result = "";
    allList.innerHTML = "";
    filtered.forEach(objetPoke => {
        result = allList.innerHTML += `
  <div class="poke-box">
  <p> ${objetPoke.name}</p>
  <p><img src="${objetPoke.img}"></p>
  <p>Type: ${objetPoke.type}</p>
  <p>Weakness: ${objetPoke.weaknesses}</p>
  </div>
`;
 });
return result;
}

/*función para mostrar nombre, imagen, tipo y debilidades cuando el usuario escoge del dropdown 
a su pokemon y oponente */
function pokeTemplate(objectPoke) {
    return `
  <div class="poke-box2">
  <p> ${objectPoke.name}</p>
  <p><img src="${objectPoke.img}"></p>
  <p>Type: ${objectPoke.type}</p>
  <p>Weakness: ${objectPoke.weaknesses}</p>
  </div>
`;
}

    //muestra en la pantalla el pokemon seleccionado por el usuario junto con imagen, tipo y debilidades
    document.getElementById("selectPokemon").addEventListener("change", (event) => {
        let objectPoke = window.allPokemons.filterData(listPokemon, event.target.value);
        document.getElementById('featuresPokemon').innerHTML = pokeTemplate(objectPoke);
        //console.log(JSON.stringify(objectPoke));
    });
    //muestra en la pantalla el oponente seleccionado por el usuario junto con imagen, tipo y debilidades
    document.getElementById("selectOpponent").addEventListener("change", (event) => {
        const newObject = window.allPokemons.filterData(listPokemon, event.target.value);

        document.getElementById("featuresOpponent").innerHTML = pokeTemplate(newObject);
    });
    //Se manda llamar la función computStats y el resultado, lo muestra en la pantalla
    document.getElementById('candies', 'selectPokemon').addEventListener("keyup", (event) => {
        //console.log("hola");
        let selectPokemon = document.getElementById("selectPokemon");
        const candyObject = window.allPokemons.computeStats(listPokemon, selectPokemon, event.target.value);
        console.log(JSON.stringify(candyObject));
        document.getElementById("results").innerHTML = candyObject;
    });

    let orderNameList = document.getElementById("orderName");
    orderNameList.addEventListener("click", () => {
        let pokeList = allPokemons.sortData(window.POKEMON.pokemon);
        let pokemonBox = document.getElementById("allList");
        let htmlBox = "";
        for (let contPokemon = 0; contPokemon < pokeList.length; contPokemon++) {
            htmlBox += `<section class="pokemonImgs"><span>${pokeList[contPokemon].name} </span> <img src="${pokeList[contPokemon].img}"/>
                <span> Spawn Chance: ${pokeList[contPokemon].spawn_chance} </span>
                <span> Weakness: ${pokeList[contPokemon].weaknesses.join(", ")}</span> <span>Type: ${pokeList[contPokemon].type} </span>
                </section> <br>`;
        }
        pokemonBox.innerHTML = htmlBox;
    });


    let typeSelect = document.getElementById("selectType");
    let typeOptions = ["Grass", "Poison", "Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Bug", "Fighting", "Ghost", "Dragon", "Normal"];
    typeOptions.forEach(optionType => {
        let options = document.createElement("option");
        options.textContent = optionType;
        options.id = optionType;
        options.value = optionType;
        typeSelect.appendChild(options);
    });

    const filterByType = document.getElementById("selectType");
    filterByType.addEventListener("change", () => {
        let pokeType = filterByType.value;
        let filtered = window.allPokemons.filterType(listPokemon, pokeType);
        pokeCard(filtered);
    });