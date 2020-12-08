//Launcher Activity

//import 라이브러리
import { StatusBar } from 'expo-status-bar';
import *as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';//navigation 활성화
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import main from './screens/main';
import addVoice from './screens/addVoice';


const Stack=createStackNavigator();


//export
export default function App( ) {
  return (//화면 반환
    //Navigationxm틀//const stack 변수명에따라 변경됨 . navigator
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          headerShown:false,//상단바 없앰
        }}
      >
      
      <Stack.Screen name="main" component={main}/>
      <Stack.Screen name="addVoice" component={addVoice}/>
      </Stack.Navigator>
    </NavigationContainer>
    
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




