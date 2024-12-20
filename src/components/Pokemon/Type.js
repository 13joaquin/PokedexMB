import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {map, capitalize } from "lodash";
import getCollorByPokemonType from '../../utils/getColorPokemonType';

const Type = (propos) => {
  const {types} = propos;

    return (
        <View style={Tstyle.content}>
            {map(types, (item, index) => (
                <View
                key={index}
                style={{
                    ...Tstyle.pill,
                    backgroundColor: getCollorByPokemonType(item.type.name),
                }}>
                    <Text style={Tstyle.type}>{capitalize(item.type.name)}</Text>
                </View>
            ))}
        </View>
  );
}
const Tstyle = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    type:{
        color: "white",
        fontSize: 15,
    },
});
export default Type;
