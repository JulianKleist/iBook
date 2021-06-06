import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { PlayCircleFilled } from '@ant-design/icons';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <View>
                <Ionicons style={{
                    position: 'absolute', 
                    bottom: 40,
                    right: 111
                }} name="md-menu" size={38} color="white" /> 
            </View>
            <View style={styles.pic} />
            <View>
                <Text style={styles.outSideText}>Welcome Back!</Text>
                <Text style={styles.outSideText2}>How are you doing today?</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.cardDiv1}>
                    <Text style={styles.title}>Welcome to iBook</Text>
                    <Text style={styles.paragraph}>iBook is an app developed with React{"\n"}
                    Native that allows you to manage your{"\n"}own 
                    library. To access the library press {"\n"} 
                    the button below
                    </Text>
                </View>
                <View style={styles.cardDiv2}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} 
                            onPress={() => 
                                navigation.navigate('iBook')
                            }
                            >ACCESS TO IBOOK</Text>
                        <FontAwesome style={{
                            left: 118,
                            bottom: 9,
                            color: '#FFF'
                        }}
                        name="play-circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height: 20}}></View>
            <View style={styles.card}>
                <View style={styles.cardDiv1}>
                    <Text style={styles.title}>About the author</Text>
                    <Text style={styles.paragraph}>
                        App developed by Julian Kleist
                    </Text>
                </View>
                <View style={styles.cardDiv2}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>REQUEST INFO</Text>
                    <FontAwesome style={{
                        left: 118,
                        bottom: 9,
                        color: '#FFF'
                    }}
                    name="play-circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273536',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        top: 40,
        height: 245,
        width: 345,
        backgroundColor: "#F7F3F0",
        borderRadius: 30,
    },
    cardDiv1: {
        flex: 1,
        top: 31,
        left: 31,
    },
    cardDiv2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    button:{
        height: 40,
        width: 150,
        backgroundColor: "#273536",
        borderRadius: 12,
        bottom: 31,
        left: 31,
    },
    buttonText: {
        color: "#FFF",
        textAlign: "center",
        top: 11,
        right: 12
    },
    outSideText: {
        color: "#FFF",
        fontSize: 32,
        right: 52,
        fontWeight: 'bold',
    },
    outSideText2: {
        color: "#FFF",
        right: 52,
        fontSize: 18,
    },
    title: {
        fontSize: 26,
        color: '#483E3E',
        fontWeight: '900'
    },
    paragraph: {
        fontSize: 18,
        color: '#483E3E',
    },
    pic:{
        height: 40,
        width: 40,
        backgroundColor: '#FFF',
        position: 'absolute',
        borderRadius: 60,
        bottom: 723, 
        right: 40
    },
})

export default HomeScreen;