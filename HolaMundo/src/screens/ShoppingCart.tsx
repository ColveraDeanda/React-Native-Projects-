import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

const ShoppingCart = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShoppingCart Screen</Text>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.popToTop()}
          title='Home Page'
        />
      </View>
    </View>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    margin: 20
  }
})