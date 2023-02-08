import { Button, Text, View } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any> {}

// * Pagina1Screen está recibiendo Props de StackNavigator.tsx
// * Con la propiedad navigation.navigate, se puede navegar a otra screen.
const Pagina1Screen = ( { navigation }: Props ) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina1Screen</Text>

            <Button
                title='Ir página 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
        </View>
    )
}

export default Pagina1Screen
