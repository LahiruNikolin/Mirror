import React from 'react';
import { StyleSheet,View, Text,StatusBar,TextInput,Image,TouchableOpacity,
  Dimensions, SafeAreaView,KeyboardAvoidingView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser,faArrowRight } from '@fortawesome/free-solid-svg-icons'

import careers from './../Api/careers'

export default function CareerScreen({route,navigation}) {

  const { letter } = route.params;

  let pType=letter.join('');

   
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={{ width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'}}>

          <Image 
              style={{ width: 140, height: 140 ,marginTop:15}}
              source={require('./../../assets/working.png')} />

    <Text style={{color:'#fff',fontSize:30, marginTop:15,textAlign:'center',textDecorationLine:"underline"}}>Carrers that suits you!</Text>
           <StatusBar   backgroundColor="#1a1a2e" />
           </View>

           <View style={{  }} >
          {careers(pType)}
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