import React from 'react';
import {capitalize} from "lodash";
import getCollorByPokemonType from '../../utils/getColorPokemonType';
import {
    StyleSheet, 
    View,
    SafeAreaView,
    Text,
    Image,
    StatusBar, } from 'react-native';

const Header = (propos) => {
  const {name, order, image, type} = propos;
  const color = getCollorByPokemonType(type);
  const bgStyleH =[{backgroundColor: color, ...Hstyles.bg}];
    return (
    <>
        <View style={bgStyleH}/>
        <StatusBar 
            animated={true}
            backgroundColor={color}
            barStyle="light-content"
        />
        <SafeAreaView style={Hstyles.content}>
            <View style={Hstyles.hearder}>
                <Text style={Hstyles.name}>{capitalize(name)}</Text>
                <Text style={Hstyles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={Hstyles.contentImg}>
                <Image source={{uri: image}} style={Hstyles.image}/>
            </View>
        </SafeAreaView>
    </>
  );
}
const Hstyles = StyleSheet.create({
    bg:{
        width:"100%",
        height:400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    hearder:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop: 40,
    },
    name:{
        color:"#fff",
        fontWeight: "bold",
        fontSize: 27,
    },
    order: {
        color: "#fff",
        fontWeight: "bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        top: 30,
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain",
    },
});
export default Header;
