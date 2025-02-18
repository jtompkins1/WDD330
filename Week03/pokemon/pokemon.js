const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
    results = data;
    console.log('first: ', results);

    // Populate the select element with pokemon names
    const select = document.getElementById('pokemonList');
    results.results.forEach((pokemon) => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.text = pokemon.name;
        select.appendChild(option);
    });
}

function doStuff(data) {
    results = data;
    console.log("first: ", results);
  }
  getPokemon(url);
  console.log("second: ", results);

