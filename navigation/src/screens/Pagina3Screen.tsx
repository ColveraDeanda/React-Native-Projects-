import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 Screen</Text>

            <View style={styles.marginButton}>
                <Button
                    title='Regresar'
                    onPress={() => navigation.pop()}
                />
            </View>

            <View style={styles.marginButton}>
                <Button
                    title='Ir a la página 1'
                    onPress={() => navigation.popToTop()}
                />
            </View>


        </View>
    )
}

export default Pagina3Screen;
