import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {map, capitalize } from "lodash";
import { number } from 'yup';

const Stats = (propos) => {
  const {stats} = propos;
  
  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
        backgroundColor: color,
        with: `${num}%`,
    };
  };
    return (
    <View style={Sstyles.content}>
        <Text style={StyleSheet.title}>Base Stats</Text>
        {map(stats, (item, index) =>(
            <View key={index} style={Sstyles.block}>
                <View style={Sstyles.blockTitle}>
                    <Text style={Sstyles.statName}>{capitalize(item.stats.name)}</Text>
                </View>
                <View style={Sstyles.blockInfo}>
                    <Text style={Sstyles.number}>{item.base_stat}</Text>
                    <View style={Sstyles.bgBar}>
                        <View style={[Sstyles.bar, barStyles(item.base_stat)]}/>
                    </View>
                </View>
            </View>
        ))}
    </View>
  );
}
const Sstyles = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    block:{
        flexDirection: "row",
        paddingVertical: 5,
    },
    blockTitle:{
        width: "30%",
    },
    statName:{
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo:{
        width: "70%",
        flexDirection:"row",
        alignItems: "center",
    },
    number:{
        width:"12%",
        fontSize: 12,
    },
    bgBar:{
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    bar:{
        height: 5,
        borderRadius: 20,
    },
});
export default Stats;
