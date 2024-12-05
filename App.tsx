import React, { useState } from 'react'
import { StyleSheet,Text,View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor="#6b57ff" barStyle="light-content"/>
      <Navigation/>  
    </NavigationContainer>
  );
}
const appstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
