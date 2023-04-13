

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


fetch(url) /* Por padrão o fetch utiliza o get. */
    .then((response) => response.json()) /* Transformando o body da api em Json. */
    .then((jsonBody) => console.log(jsonBody)) /* Retornando a resposta da api. */
    .catch((error) => console.log(error)) /* Se der erro na requisição*/