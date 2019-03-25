require('../src/data.js');
const pokemon = require ('../src/data/pokemon/pokemon.json');
const filterData = require ('../src/data/pokemon/filterData.json');
const candiesData = require ('../src/data/pokemon/candiesFilter.json');

describe("filterData", ()=>{
it("Should be a function", ()=>{
    expect(typeof window.allPokemons.filterData).toBe("function");
  });
  it("Should return one pokemon Bulbasaur", ()=>{
    expect(window.allPokemons.filterData(pokemon.pokemon, 'Bulbasaur')).toEqual(filterData);
  });
});


describe("computeStats", () => {
  it("Should be a function", () => {
    expect(typeof window.allPokemons.computeStats).toBe("function");
  });
  it("Should return candy_count substraction", () => {
    expect(window.allPokemons.computeStats(pokemon.pokemon)).toEqual(candiesData);
  });
});