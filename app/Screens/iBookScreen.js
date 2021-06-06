import React from 'react';
import { Button, StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { PlayCircleFilled } from '@ant-design/icons';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const DATA = [
    {
        id: 1, 
        photo: 'https://images-na.ssl-images-amazon.com/images/I/51ZaFL6B7lL._SX326_BO1,204,203,200_.jpg',
        name:'Hamlet',
        author:'William Shakespeare',
        year:'1603' 
    },
    {
      id: 2, 
      photo: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
      name:'1984',
      author:'Geoge Orwell',
      year:'1948'
    },
    {
      id: 3, 
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinPQVSSqGzGbuheQvGiHTWtLwabClhKrSgQ&usqp=CAU',
      name:'El cuervo',
      author:'Edgar Allan Poe',
      year:'1845'
    },
]

const Item = ({ name, author, year }) => (
    <View >
        <Text>{name}</Text>
        <Text>{author}</Text>
        <Text>{year}</Text>
    </View>
)

function iBookScreen(props, { navigation }) {
    const renderItem = ({ item }) => (
        <Item name={item.name} author={item.author} year={item.year} />
    )
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            ></FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273536',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default iBookScreen;