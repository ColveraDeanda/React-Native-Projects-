import React from 'react';
import { SafeAreaView } from 'react-native';
import FlexScreen from './src/screens/styledScreenComponentsEj/FlexScreen';

/* rafc = Snippet component*/

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
       {/* <ContadorScreen/> */}
       {/* <HolaMundoScreen/> */}
       {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
       {/* <DimensionsScreen/> */}
       {/* <PositionScreenRelative></PositionScreenRelative> */}
       {/* <PositionScreenAbsolute></PositionScreenAbsolute> */}
       <FlexScreen></FlexScreen>
    </SafeAreaView>
     
  );
};

export default App;
