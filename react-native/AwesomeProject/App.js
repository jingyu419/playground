import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BlinkApp from './components/Blink/BlinkApp';
import FlexDimensionsBasics from './components/FlexBasics/FlexDimensionsBasics';
import PizzaTranslator from './components/TextInput/PizzaTranslator';
import ButtonBasics from './components/ButtonBasics/ButtonBasics';
import Touchables from './components/ButtonBasics/Touchables';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Touchables />
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
