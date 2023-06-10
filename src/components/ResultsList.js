import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation'
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, filteredResults, navigation }) => {
    if (!filteredResults.length) {
        return null;
    }
    
    return (
     <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredResults}
            keyExtractor={(filteredResults) => filteredResults.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                        <ResultsDetail restaurant={item} />
                    </TouchableOpacity>
                );
            }}
        />
     </View>
     );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginVertical: 5
    }
});

export default withNavigation(ResultsList);