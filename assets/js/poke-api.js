


const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json()) /* Transformando o body da api em Json. */
        .then((jsonBody) => jsonBody.results) /* Retornando a resposta da api. */
        .catch((error) => console.error(error)) /* Se der erro na requisição*/
    }

