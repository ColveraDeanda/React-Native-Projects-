import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/components/Navigator';
import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Banner from './src/screens/Banner';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fontAwesomeLibreary } from './src/icons/FontAwesomeIcons';
import { DATA } from './src/data/items';


library.add(...fontAwesomeLibreary);



type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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
        {/* <View style={{ top: 100 }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </View> */}
      </SafeAreaView>
    </NavigationContainer>

  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#787A91',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
