import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import BlinkApp from './components/Blink/BlinkApp';
import FlexDimensionsBasics from './components/FlexBasics/FlexDimensionsBasics';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <FlexDimensionsBasics />
      </View>
    );
  }
}

//Do not use alignItems and justifyContent if I just want to setup the background color for FlexDimensionsBasics example

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center', 
  //  justifyContent: 'center',
  },
});
