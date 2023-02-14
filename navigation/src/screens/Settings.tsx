import { Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const Settings = (  ) => {

  // El siguiente hook es para lograr que se vea bien solo en ios.
  const insets = useSafeAreaInsets();

  return (
     // En vez de usar un SafeArea, se puede usar de la siguiente manera:
    <View style={{ ...styles.globalMargin, marginTop: insets.top}}>
      <Text>Settings Screen</Text>
    </View>
  )
}

export default Settings
