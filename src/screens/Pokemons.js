import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';

import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';

const Pokemons = (propos) => {
  const {
    navigation,
    route: {params},
  }= propos;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch(error){
        navigation.goBack();
      }
    })();
  }, [params]);
  
  if(!pokemon) return null;

    return (
        <ScrollView>
            <Header 
            name={pokemon.name}
            order={pokemon.order} 
            image={pokemon.sprites.other["official-artwork"].front_default} 
            type={pokemon.type[0].type.name}
            />
            <Type types={pokemon.types}/>
            <Stats stats={pokemon.stats} />
        </ScrollView>
  );
}

export default Pokemons;
