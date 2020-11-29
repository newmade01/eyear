//Launcher Activity
//main

//import 라이브러리
import { StatusBar } from 'expo-status-bar';
import *as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//export
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
