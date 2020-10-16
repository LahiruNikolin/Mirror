import React from 'react';
import { StyleSheet,View, Text,Button,TextInput,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser } from '@fortawesome/free-solid-svg-icons'

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text>Let's Register</Text>
          <View style={styles.input_cont}>
              <View style={styles.input_subcont}>
                <FontAwesomeIcon  style={{color:'#22f'}} size={ 52 } icon={ faUser } />
                
                <TextInput
                  style={styles.text_inp}
                  placeholder='Email'
                    
                />
              </View>
              <View style={styles.input_subcont}>
                <FontAwesomeIcon  style={{color:'#22f'}} size={ 52 } icon={ faKey } />
                <TextInput
                  style={styles.text_inp}
                  secureTextEntry={true}
                  placeholder='Password'
                  
                  
                />
                
              </View>
              <View style={{...styles.input_subcont,marginBottom:15}}>
                <FontAwesomeIcon  style={{color:'#22f'}} size={ 52 } icon={ faKey } />
                <TextInput
                  style={styles.text_inp}
                  secureTextEntry={true}
                  placeholder='Confirm Password'
                  
                  
                />
                
              </View>
              <View>

                <TouchableOpacity style={styles.btn}>
                  <Text style={{color:'#fff',textAlign:"center",fontSize:24}} >Register</Text>
                  </TouchableOpacity> 
                
              </View> 

          </View>
         
       
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'

    },
    input_cont:{
      flex:1,
      flexDirection:'column',
      //backgroundColor:'red',
      justifyContent:'center'
    },
    input_subcont:{
     
      flexDirection:'row',
     // backgroundColor:'yellow',
      marginBottom:40
     
    },
    text_inp:{
      marginLeft:15,
      height: 40,
      width:240, 
      borderColor: 'gray',
      borderWidth: 1,
      marginTop:7,
      fontSize:23,
      padding:4
    
    },
    btn: {
         
      marginVertical:10,
      marginHorizontal:5,
      padding:10,
      backgroundColor:'#083d77'

      
  } ,

  });