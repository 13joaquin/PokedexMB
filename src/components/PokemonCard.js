import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback, } from 'react-native';
import { capitalize } from "lodash";
import { useNavigation } from '@react-navigation/native';
import getCollorByPokemonType from '../utils/getColorPokemonType';
import { number } from 'yup';

const PokemonCard = (props) => {
    const {pokemon} = props;
    const navigation = useNavigation();

    const pokemonColor = getCollorByPokemonType(pokemon.type);
    const bgStyles = { backgrooundColor: pokemonColor, ...PokeCardStyle.bgStyles};

    const goToPokemon = () => {
        navigation.navigate("Pokemon", {id: pokemon.id});
    };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={PokeCardStyle.card}>
            <View style={PokeCardStyle.spacing}>
                <View style={bgStyles}>
                    <Text style={PokeCardStyle.number}>
                        #{`${pokemon.order}`.padStart(3,0)}
                    </Text>
                    <Text style={PokeCardStyle.name}>{capitalize(pokemon.name)}</Text>
                    <Image source={{uri: pokemon.image}} style={style.image}/>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}
const PokeCardStyle = StyleSheet.create({
    card:{
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    number: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
});
export default PokemonCard;
