import React from 'react';
import { StyleSheet,View, Text,Button,TextInput,TouchableOpacity  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser } from '@fortawesome/free-solid-svg-icons'

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text style={{fontSize:25,paddingTop:20,marginBottom:70}}>Welcome</Text>
          <View style={styles.input_cont}>
              <View style={styles.input_subcont}>
                <FontAwesomeIcon  style={{color:'#212121',marginTop:5}} size={ 32 } icon={ faUser } />
                
                <TextInput
                  style={styles.text_inp}
                  placeholder='Email'
                    
                />
              </View>
              <View style={{...styles.input_subcont,marginBottom:15}}>
                <FontAwesomeIcon  style={{color:'#212121',marginTop:5}} size={ 32 } icon={ faKey } />
                <TextInput
                  style={styles.text_inp}
                  secureTextEntry={true}
                  placeholder='Password'
                  
                  
                />
                
              </View>
              <View>

                <TouchableOpacity style={styles.btn}>
                  <Text style={{color:'#fff',textAlign:"center",fontSize:20}} >Login</Text>
                  </TouchableOpacity> 
                <TouchableOpacity style={styles.btn}  
                 onPress={() => navigation.navigate('SignUp')}  >
                  <Text style={{color:'#fff',textAlign:"center",fontSize:20}}>Sign Up</Text>
                </TouchableOpacity> 

              </View> 

          </View>
          <Button title="Just take me to questions"
         onPress={() => navigation.navigate('Questions')}
        />
         
       
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#e8e8e8'
      

    },
    input_cont:{
      flexDirection:'column',
      //backgroundColor:'red',
      justifyContent:'center',
      marginBottom:20
    },
    input_subcont:{
      
      flexDirection:'row',
     // backgroundColor:'yellow',
      marginBottom:40
     
    },
    text_inp:{
      marginLeft:15,
      height: 45,
      width:240, 
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius:5,
      
      fontSize:15,
      padding:4
    
    },
    btn: {
         
      marginVertical:10,
      marginHorizontal:5,
      padding:10,
      backgroundColor:'#005086'


      
  } ,

  });