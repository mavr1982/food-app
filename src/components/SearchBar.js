import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    const [counter, setCounter] = useState(0)
    return (
     <View style={styles.view}>
        <Feather name="search" style={styles.icon} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search..."
            style={styles.input}
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}
        />
     </View>
     );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    input: {
        fontSize: 18,
        flex: 1
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;