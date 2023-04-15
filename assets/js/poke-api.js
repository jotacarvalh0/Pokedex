


const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json()) /* "fetch(pokemon.url)" novo Fetch para a url do pokemon */
}                                                                 /* ".then((response) => response.json()" Convertendo a resposta do novo Fetch para json. */

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)
        .then((response) => response.json()) /* Transformando o body da api em Json. */
        .then((jsonBody) => jsonBody.results) /* Retornando a resposta apenas a parte do results. */
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) /* Mapeando os pokemons em uma lista de detalhes de pokemons. */
        .then((detailRequests) => Promise.all(detailRequests)) /* "Promise.all(detailRequests))" Esperar que todas as requisições terminem. */
        .then((pokemonsDetails) => pokemonsDetails)
    }
