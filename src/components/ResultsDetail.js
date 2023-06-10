import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ResultsDetail = ({ restaurant }) => {
    return (
     <View style={styles.view}>
        <Image style={styles.image} source={{ uri: restaurant.image_url}} />
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.reviews}>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
     </View>
     );
};

const styles = StyleSheet.create({
    view: {
        marginLeft: 10
    },
    image: {
        height: 120,
        width: 250,
        borderRadius: 2,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;