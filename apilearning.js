async function getData(file) {
    let x = await fetch(file);
    let y = await x.text();
    console.log(JSON.parse(y, null, 2));
}

console.log(getData("https://pokeapi.co/api/v2/pokemon/ditto"));