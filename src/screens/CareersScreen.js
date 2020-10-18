import React from 'react';
import { StyleSheet,View, Text,StatusBar,TextInput,Image,TouchableOpacity,
  Dimensions, SafeAreaView,KeyboardAvoidingView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function CareerScreen({navigation}) {

   
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={{ width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'}}>

           <Text style={{color:'#fff',fontSize:35, marginTop:15,textAlign:'center'}}>Still under development</Text>
           <StatusBar   backgroundColor="#1a1a2e" />
           </View>
       
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
    //justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1e272e',
      height:Dimensions.get('window').height
      

    },
    

  });