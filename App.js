import React,{ useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
export default function App() {

  return (
    <View style={styles.screen}>
      <Text>Project Setup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }

});