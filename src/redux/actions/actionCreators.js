import pokemonService from '../../components/Service/pokemon-service'

export const getPokemons = () => async dispatch => {
try {
    const {
        data: {
            results
        }
    } = await pokemonService.getPokemons()
    dispatch ({
        type:GET_POKEMONS,
        payload:results

    })
 } catch (e) {
    console.log(e);
}

}