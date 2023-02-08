import 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

// https://reactnavigation.org/docs/getting-started
/**
    Para utilizar navigation en react-native, es necesario usar un paquete de tercero (link anterior).
    se tiene que seguir la doc para la instalación de las cosas necesarias, así mismi en el caso de 
    android se copio un código. Finalmente se envuelve la app con la etiqueta <NavigatorContainer></NavigatorContainer>
    y listo. Con eso ya se puede usar los diferentes tipos de navegación.
 */

const App = () => {
  return (
      <NavigationContainer>
          <StackNavigator/>
      </NavigationContainer>
  )
}


const styles = StyleSheet.create({

})


export default App;