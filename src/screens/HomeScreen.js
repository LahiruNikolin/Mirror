import React from 'react';
import { StyleSheet,View, Text,StatusBar,TextInput,Image,TouchableOpacity,
  Dimensions, SafeAreaView,KeyboardAvoidingView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser,faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HomeScreen({navigation}) {

  const  Offset = Platform.OS === 'ios' ? 40 : 0

         

          
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={{ width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'}}>

           <Text style={{color:'#fff',fontSize:35, marginTop:15}}>Mirror</Text>
           <StatusBar   backgroundColor="#1a1a2e" />
            <Image 
              style={{ width: 50, height: 50,marginTop:20,borderRadius:50 }}
              source={require('./../../assets/atom.png')} />
          </View>
          <View style={{width: Dimensions.get('window').width,
          justifyContent:'center',alignItems:'flex-start',paddingLeft:15,
          
          }}
          
          >
            <Text style={{fontSize:32 ,marginTop:30,color:'#fff'}}>Welcome Back</Text>
            <Text style={{fontSize:15,marginBottom:30,color:'#b2bec3'}}>Login to Continue</Text>
          </View>
         
          <View style={styles.input_cont}>
          <KeyboardAvoidingView 
            behavior='position'
            keyboardVerticalOffset={Offset}>
      
      
              <View style={styles.input_subcont}>
                <FontAwesomeIcon  style={{color:'#fff',marginTop:5}} size={ 32 } icon={ faUser } />
                
                <TextInput
                  style={styles.text_inp}
                  placeholder='Email'
                  placeholderTextColor="#b2bec3" 
                    
                />
              </View>
              <View style={{...styles.input_subcont,marginBottom:30}}>
                <FontAwesomeIcon  style={{color:'#fff',marginTop:5}} size={ 32 } icon={ faKey } />
                <TextInput
                  style={styles.text_inp}
                  secureTextEntry={true}
                  placeholder='Password'
                  placeholderTextColor="#b2bec3" 
                  
                  
                />
                
              </View>
              <View>

                <TouchableOpacity style={styles.btn}>
                  <Text style={{color:'#fff',textAlign:"center",fontSize:20}} >LOGIN</Text>
                  </TouchableOpacity> 
                <TouchableOpacity style={styles.btn}  
                 onPress={() => navigation.navigate('SignUp')}  >
                  <Text style={{color:'#fff',textAlign:"center",fontSize:20}}>SIGN UP</Text>
                </TouchableOpacity> 

              </View> 
              </KeyboardAvoidingView>
          </View>
          <View style={{width: Dimensions.get('window').width,
          
         // backgroundColor:'green',
          justifyContent:'flex-end',
          alignItems:'flex-end',
          paddingHorizontal:15,
          paddingTop:5
          
          }}>
              <TouchableOpacity style={ {flexDirection:'row',  }}  
                  onPress={() => navigation.navigate('Questions')}
                >
                  <Text style={{color:'#fff',textAlign:"center",fontSize:16,
                  textDecorationLine:'underline',alignSelf:"center"
                  
                  }}>Just Take Me To Test</Text>
                  <FontAwesomeIcon  style={{color:'#fff' ,marginLeft:5}} size={ 22 } icon={ faArrowRight } />
              </TouchableOpacity> 

          </View>
         
         
       
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
      
     // justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1e272e',
      height:Dimensions.get('window').height
      

    },
    input_cont:{
      paddingLeft:15,
      flexDirection:'column',
     // backgroundColor:'red',
      justifyContent:'center',
      marginBottom:20,
      width: Dimensions.get('window').width,

    },
    input_subcont:{
      
      flexDirection:'row',
     // backgroundColor:'yellow',
      marginBottom:20
     
    },
    text_inp:{
      marginLeft:15,
      height: 45,
      width:260, 
      borderColor: '#2f3640',
      borderWidth: 1,
      borderRadius:5,
      
      fontSize:15,
      padding:4,
      color:'#fff'

      
    
    },
    btn: {
         
      marginVertical:10,
      marginRight:15,
      padding:10,
      paddingVertical:16,
      backgroundColor:'#0984e3',
      borderRadius:5,
      


      
  } ,

  });