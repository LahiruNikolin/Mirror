import React from 'react';
import { StyleSheet,View, Text,StatusBar,TextInput,Image,TouchableOpacity,
  Dimensions, SafeAreaView,KeyboardAvoidingView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser,faArrowRight } from '@fortawesome/free-solid-svg-icons'

import celebs from './../Api/celebs'

export default function RelatedScreen({navigation,route}) {

  
  const { letter } = route.params;

  let pType=letter.join('');

         
          
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={{ width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'}}>

          <Image 
              style={{ width: 240, height: 140 ,marginTop:35}}
              source={require('./../../assets/celeb.jpg')} />

           
           <StatusBar   backgroundColor="#1a1a2e" />
           </View>

           {celebs(pType)}
       
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