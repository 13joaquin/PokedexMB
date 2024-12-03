import React, { useState } from 'react'
import { Text } from 'react-native';

const App = () => {
  const[pokemon, setPokemon] = useState({name: '', next: ''});
  const {name, next} = pokemon;
  
  return (
  <Text>Pokedde</Text>
  )
};

export default App;
