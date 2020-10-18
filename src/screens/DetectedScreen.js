import React,{ useState } from 'react';
import { StyleSheet,View, Text,Button,TextInput,TouchableOpacity,Dimensions, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faCheckCircle,faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import personalityDetector from './../Api/PersonalityTypes'

export default function HomeScreen({route,navigation}) {
  const { letter } = route.params;

  
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
                    onPress={() => navigation.navigate('Related')}
                    style={styles.down_link}
                  >
                     <FontAwesomeIcon  style={{color:'#fff' ,marginLeft:5}} size={ 20 } icon={ faArrowLeft } />
                    <Text style={{color:'#fff',textAlign:"center",fontSize:12,
                    textDecorationLine:'underline',alignSelf:"center"
                    
                    }}>Celebrities of type {letter.join('')}</Text>
                   
                </TouchableOpacity> 
              <TouchableOpacity  
                    onPress={() => navigation.navigate('Careers')}
                    style={styles.down_link}
                  >
                    <Text style={{color:'#fff',textAlign:"center",fontSize: 12,
                    textDecorationLine:'underline',alignSelf:"center"
                  }}>  
                  Carreers that suits you</Text>
                    <FontAwesomeIcon  style={{color:'#fff' ,marginLeft:5}} size={ 20 } icon={ faArrowRight } />
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