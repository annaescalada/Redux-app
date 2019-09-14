import React, {useEffect} from 'react'
import pokemonService from './Service/pokemon-service';

const CallPokemons = props => {
    const {getPokemons} = pokemonService;
    useEffect(() => {
        getPokemons();
    });

    return (
        <h1>Pokemons</h1>
    )
}

export default CallPokemons