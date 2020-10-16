import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import QuestionsStage2 from './src/screens/QuestionsStage2';
import QuestionsStage3 from './src/screens/QuestionsStage3';
import QuestionsStage4 from './src/screens/QuestionsStage4';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ title: 'Register' }}/>
        <Stack.Screen name="Questions" component={QuestionScreen}  options={{
          
          headerStyle: {
            backgroundColor: '#1a1a2e',
          } ,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}/>
        <Stack.Screen name="Question2" component={QuestionsStage2}  options={{ title: 'Questions-Stage 2' }}/>
        <Stack.Screen name="Question3" component={QuestionsStage3}  options={{ title: 'Questions-Stage 3' }}/>
        <Stack.Screen name="Question4" component={QuestionsStage4}  options={{ title: 'Questions-Stage 4' }}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
