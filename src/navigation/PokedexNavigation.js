import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokedexScreen from '../screens/Pokedex';
import PokemonsScreen from '../screens/Pokemons';

const Stack = createBottomTabNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
        }}
    >
    <Stack.Screen
        name='="Pokedex'
        component={PokedexScreen}
        
        options={{
            title: "Pokedex",
            headerStyle: {
                backgroundColor: "#6b57ff",
            },
            headerTitleStyle:{
                fontWeight:"bold",
                color:"#fff"
            },
        }}
        />
        <Stack.Screen
            name="Pokemon"
            component={PokemonsScreen}
            options={{title:"", headerTransparent: true}}
            />
    </Stack.Navigator>
  );
}

export default PokedexNavigation;
