import React,{ useState,useEffect } from 'react';
import { StyleSheet,View, Text,Button,TextInput,TouchableOpacity,Dimensions,ToastAndroid } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faCheckCircle,faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import personalityDetector from './../Api/PersonalityTypes'

import firebase from 'firebase'

 




export default function HomeScreen({route,navigation}) {

 
    
 

  const { letter } = route.params;

  useEffect(() => {
   
    getEmail();
  }, []);

  const getEmail=()=>{

    // console.log(userInfo);
 
        var user = firebase.auth().currentUser;
       
          if (user) {
            // User is signed in.

            var database = firebase.database();

            ToastAndroid.showWithGravity(
              user.email,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM
            );

            database.ref('users/' + user.uid).set({
              ptype: letter.join(''),
           
            }, (error) => {
              if (error) {
                // The write failed...
              } else {
                // Data saved successfully!
              }
            });

           
          } else {
            // No user is signed in.

          }

         /*
          ToastAndroid.showWithGravity(
            "errorMessage",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );

          */
  
    } 


  
    return (
      
        <View style={styles.container}>

 
                

          <Text style={{fontSize:25,textAlign:'center',color:'#fff'}}>Myer Briggs Personality Type Detected!</Text>
          <FontAwesomeIcon  style={{color:'#fff' ,marginTop:25,color:'#20bf6b'}} size={ 68 } icon={ faCheckCircle } />
          <Text style={{fontSize:50,marginTop:10,color:'#fff'}}>{letter.join('')}</Text>
           
          <View style={{  }} >
          {personalityDetector(letter)}
          </View>
          <View style={{  }}>
         
            <View style={styles.down_linkCont } >
              <TouchableOpacity  
                    onPress={() => navigation.navigate('Related',{ letter: letter})}
                    style={styles.down_link}
                  >
                     <FontAwesomeIcon  style={{color:'#fff' ,marginLeft:5}} size={ 20 } icon={ faArrowLeft } />
                    <Text style={{color:'#fff',textAlign:"center",fontSize:12,
                    textDecorationLine:'underline',alignSelf:"center"
                    
                    }}>Celebrities of type {letter.join('')}</Text>
                   
                </TouchableOpacity> 
              <TouchableOpacity  
                    onPress={() => navigation.navigate('Careers', { letter: letter})}
                    style={styles.down_link}
                  >
                    <Text style={{color:'#fff',textAlign:"center",fontSize: 12,
                    textDecorationLine:'underline',alignSelf:"center"
                  }}>  
                  Carreers that suits you</Text>
                    <FontAwesomeIcon  style={{color:'#fff' ,marginLeft:5}} size={ 20 } icon={ faArrowRight } />
              </TouchableOpacity> 
            </View>
            <View>
   

              
              <TouchableOpacity style={ {  }}  
                  onPress={() => navigation.navigate('Questions')}
                >
                  <Text style={{color:'#fff',textAlign:"center",fontSize:16,
                  textDecorationLine:'underline',alignSelf:"center",marginTop:20
                  
                  }}>Take The Test Again</Text>
                  
              </TouchableOpacity> 
           
            </View>
          
          </View>
         
       
      </View>
      
      
    );
  }



const styles = StyleSheet.create({
    container: {
       
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor: '#132743',
      height: Dimensions.get('window').height,
      paddingTop:40,
      paddingBottom:5

    },

    down_linkCont:{
      flexDirection:"row", 
      alignItems:'flex-start',
      justifyContent:'space-between',
      width:Dimensions.get('window').width,
      paddingHorizontal:10,
      marginTop:40
      
    
    },
    down_link:{
      backgroundColor:'#a5b1c2',
      flexDirection:'row',
      padding:8,
      borderRadius:10

    }

  });