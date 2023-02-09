import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/components/Navigator';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Banner from './src/screens/Banner';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fontAwesomeLibreary } from './src/icons/FontAwesomeIcons';
import { DATA } from './src/data/items';
import ItemList from './src/components/ItemList';


library.add(...fontAwesomeLibreary);


/* rafc = Snippet component*/

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ContadorScreen/> */}
        {/* <HolaMundoScreen/> */}
        {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
        {/* <DimensionsScreen/> */}
        {/* <PositionScreenRelative></PositionScreenRelative> */}
        {/* <PositionScreenAbsolute></PositionScreenAbsolute> */}
        {/* <FlexScreen></FlexScreen> */}
        {/* <FlexDirection></FlexDirection> */}
        {/* <JustifyContent></JustifyContent> */}
        {/* <AlignItems></AlignItems> */}
        {/* <AlignSelf></AlignSelf> */}
        {/* <FlexWrap></FlexWrap> */}
        {/* <TareaScreen></TareaScreen> */}
        <Navigator/>
        {/* Sample data List */}
       
      </SafeAreaView>
    </NavigationContainer>

  );
};




export default App;
