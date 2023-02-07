import React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Banner = () => {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <FontAwesomeIcon style={styles.bars} icon="fa-solid fa-bars" size={26} />
                <TextInput style={styles.inputSearch} placeholder='Search'></TextInput>
                <FontAwesomeIcon style={styles.cartShopping} icon="fa-solid fa-cart-shopping" size={23} />
            </View>
            <View style={styles.rowUser}>
                <FontAwesomeIcon style={styles.user} icon="fa-solid fa-user" size={21} />
                <Text style={styles.username}>(Username here)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#263159',
        height: 100,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

    },
    row: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },
    rowUser: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'flex-start',
    },
    bars: {
        top: 3,
        color: '#FFF',
    },
    inputSearch: {
        height: 35,
        width: '80%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 35,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    cartShopping: {
        top: 3,
        color: '#FFF',
    },
    user: {
        top: 8,
        left: 3,
        color: '#FFF',
    },
    username: {
        color: '#FFF',
        left: 20,
        top: 10,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },


})

export default Banner