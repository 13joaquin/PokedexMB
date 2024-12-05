import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StatusBar, Text } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="Pokedex"
    screenOptions={{headerShown: false}}
    tabBarOptions={{
      activeTintColor: "#000",
      activeBackgroundColor: "#E8E8E8",
      activeTintColor: "#6b57ff",
      inactiveTintColor: "grey",
      inactiveBackgroundColor: "white",
      tabStyle:{
        paddingBottom: 5,
        paddingTop: 5,
      }
    }}
    >
    <Tab.Screen 
    name="Pokedex"
    component={PokedexNavigation}
    options={{
      tabBarLabel:"",
      tabBarIcon:() => renderPokeball(),
    }}
    />
    </Tab.Navigator>
  );
}
function renderPokeball(){
  return(
    <Image 
      source={require("../assets/pokeball.png")}
      style={{width: 75, height: 75, top:-15}}
    />
  );
}
export default Navigation;
