import React, { useState, useEffect } from 'react';
import { 
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Platform,
    TextInput,
    Text,
    Button,
    View, } from 'react-native';
    import PokemonCard from './PokemonCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/FontAwesome5";

const PokemonList = (props) => {
    const {
        pokemons,
        loadPokemons,
        isNext,
        filterdata,
        setFilterData,
        valor,
        load,
    } = props;

    const loadMore = () => {
        loadPokemons();
    };

    const [search, setSearch] = useState("");
    const [poke, setPoke] = useState(false);

    useEffect(() => {}, [search]);

    const searchFilter = (text) => {
        setSearch(text);
        if(text){
            setFilterData(pokemons);
        }
    };
    const searchFilterDone = () => {
        if(search) {
            const newData = filterdata.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });

            setFilterData(newData);
            setSearch("");
            if(Object.keys(newData).length == 0){
                setPoke(true);
            }else{
                setPoke(false);
            }
            console.log(`aqui ${Object.keys(newData).length}`);
        }else{
            setFilterData(pokemons);
            setSearch(search);
        }
    };
    const Reload = () => {
        setFilterData(pokemons);
    };
  return (
    <SafeAreaView>
        {valor && (
            <View style={PokeListStyles.search}>
                <TextInput
                style={PokeListStyles.textInputStyle}
                value={search}
                placeholder="Nombre del Pokemon"
                onChangeText={(text) => searchFilter(text)}
            />
            <Button title="Search" color="#6890f0" onPress={searchFilterDone}/>
            <Button title="All" color="#6890f0" onPress={Reload}/>    
            </View>
        )}
        <FlatList
        data={filterdata}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        contentContainerStyle={PokeListStyles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
            <View style={PokeListStyles.list}>
                {poke && (
                    <View style={PokeListStyles.aviso}>
                        <Text style={PokeListStyles.alertaText}>
                            No encontramos POkemons con ese Nombre
                        </Text>
                    </View>
                )}
                {!load && (
                    <View style={PokeListStyles.alerta}>
                        <Text style={PokeListStyles.alertaText}>Cargando...</Text>
                        <ActivityIndicator 
                            size="large"
                            style={PokeListStyles.spinner}
                            color="#6b57ff"
                        />
                    </View>
                )}
            </View>
        }
        />
    </SafeAreaView>
  );
}
const PokeListStyles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 5: 0,
    },
    list: {
        marginBottom: 100,
    },
    alerta: {
        width: "100%",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
    },
    alertaText: {
        fontSize: 17,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90:60,
    },
    textInputStyle: {
        height: 40,
        margin: 12,
        marginLeft: 0,
        marginTop: 0,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width:"60%",
    },
    search: {
        flexDirection: "row",
        marginBottom: 12,
        marginTop: 25,
        heigh: 40,
        width: "100%",
        justifyContent: "space-evenly",
    },
    aviso: {
        width: "100%",
        height: 300,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default PokemonList;
