import axios from 'axios';

class PokemonService {
    constructor() {
      this.api = axios.create({
        baseURL: 'https://pokeapi.co/api'
      })
    }
  
    getPokemons = async () => {
        try {
            const {data:{results}} = await this.api.get('/v2/pokemon')
            console.log(results);
            return results;
        } catch (error) {
            console.log(error);
        }
    }
}

const pokemonService = new PokemonService();

export default pokemonService;