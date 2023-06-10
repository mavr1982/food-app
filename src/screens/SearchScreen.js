import React, { useState } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
      return results.filter((result) => {
         return result.price === price;
      });
    };


    return (
     <>
        <SearchBar
         term={term}
         onTermChange={(newTerm) => setTerm(newTerm)}
         onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : <Text style={styles.message}>We have found {results.length} results.</Text>}
        <ScrollView>
         <ResultsList
            title="Cost effective"
            filteredResults={filterResultsByPrice('$')}
         />
         <ResultsList
            title="Bit pricer"
            filteredResults={filterResultsByPrice('$$')}
         />
         <ResultsList
            title="Big spender"
            filteredResults={filterResultsByPrice('$$$')}
         />
        </ScrollView>
     </>
     );
};

const styles = StyleSheet.create({
   view: {
      backgroundColor: 'white',
      flex: 1
   },
   message: {
      marginLeft: 10
   },
   errorMessage: {
      color: 'red',
      marginLeft: 10
   }
});

export default SearchScreen;