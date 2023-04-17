
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) { /* Convertendo o PokeDetail que é o modelo da API para o meu modelo de pokemon. */
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlote) => typeSlote.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json()) /* "fetch(pokemon.url)" novo Fetch para a url do pokemon */
                                                                  /* ".then((response) => response.json()" Convertendo a resposta do novo Fetch para json. */
        .then(convertPokeApiDetailToPokemon)
}                                                                 

pokeApi.getPokemons = (offset = 0, limit = 30) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)   /* Fazendo requisição da lista de pokemons. */
        .then((response) => response.json()) /* Convertendo o body da api em Json. */
        .then((jsonBody) => jsonBody.results) /* Pegando da resposta apenas a parte do results. */
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) /* Mapeando os pokemons em uma lista de detalhes de pokemons. */
        .then((detailRequests) => Promise.all(detailRequests)) /* "Promise.all(detailRequests))" Esperar que todas as requisições terminem. */
        .then((pokemonsDetails) => pokemonsDetails)
    }
