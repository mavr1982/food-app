import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [getRestaurantApi, restaurant, errorMessage] = useRestaurant();
    getRestaurantApi(id);
    return (
     <>
        <Text>Results show screen. Id: {id}</Text>
        <Image style={styles.mainImage} source={{ uri: restaurant.image_url }} />
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.reviews}>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        <Text>{JSON.stringify(restaurant.photos)}</Text>
        <FlatList
            data={restaurant.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />                
            }}
        />
     </>
     );
};

const styles = StyleSheet.create({
    view: {},
    mainImage: {
        marginVertical: 10,
        height: 300,
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
    },
    reviews: {
        color: 'gray',
        marginLeft: 10,

    },
    image: {
        marginVertical: 10,
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;