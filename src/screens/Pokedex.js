import React, { useState, useEffect } from 'react';
import {
    getPokemonsAPI,
    getPokemonDetailsByUrlApi,
    getPokemonsApiTotal,
} from "../api/pokemon";
import PokemonList from '../components/PokemonList';

const Pokedex = () => {
    const [pokemons, setPokemon] = useState([]);
    const [nexUrl, setNextUrl] = useState(null);
    const [load, setLoad] = useState(false);

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);
    const loadPokemons = async () => {
        try{
            const  response = await getPokemonsApiTotal(nexUrl);

            setNextUrl(response.next);
            const pokemonsArray = [];
            for await (const pokemon of response.results){
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                 pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other["official-artwork"].front_default,
                 });
            }
            console.log("uno");
            console.log([...pokemons]);
            console.log("dos");

            console.log([...pokemonsArray]);
            console.log("resultado");

            setPokemon([...pokemons, ...pokemonsArray]);
            setFilterData([...pokemons, ...pokemonsArray]);
            setLoad(true);
            console.log(pokemons);
        }catch(error){
            console.error(error);
        }
    }
  return (
    <>
      <PokemonList 
        pokemon={pokemons}
        loadPokemons={loadPokemons}
        isNext={nexUrl}
        filterdata={filterData}
        setFilterData={setFilterData}
        valor={true}
        load={load}
      />
    </>
  );
}

export default Pokedex;
