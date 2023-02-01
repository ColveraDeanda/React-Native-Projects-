import React from 'react';
import { View, StyleSheet } from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.purpleBox}></View>
        <View style={styles.orangeBox}></View>
        <View style={styles.blueBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        top: 100,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    orangeBox: {
        left: 100,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    blueBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    }
});

export default TareaScreen;