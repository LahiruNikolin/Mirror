import React,{ useState } from 'react';
import { StyleSheet,View, Text,StatusBar,TextInput,ActivityIndicator,TouchableOpacity
  ,Dimensions, SafeAreaView,KeyboardAvoidingView,ToastAndroid  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey,faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import firebase from 'firebase'

export default function HomeScreen({navigation}) {


  const [userInfo, setUserInfo] = useState({email:'',password:''});
  const [creating, setCreating] = useState(false);

  const sign=()=>{

   // console.log(userInfo);

    firebase.auth().createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    .then(()=>{
      console.log("im game");
      setCreating(false);
      navigation.navigate('Questions');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        console.log("crap");
        
        ToastAndroid.showWithGravity(
          errorMessage,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );

      } else {
        console.log(errorMessage);
      }
      console.log(error);
      setCreating(false);
    });


  }


  const  Offset = Platform.OS === 'ios' ? 40 : 0
    return (
      <SafeAreaView style={styles.container}>
      <View style={{ width: Dimensions.get('window').width,justifyContent:'center',alignItems:'center'}}>

       <Text style={{color:'#fff',fontSize:25, marginTop:35}}>Let's get you registered!</Text>
       <StatusBar   backgroundColor="#1a1a2e" />
        
      </View>
      <View style={{width: Dimensions.get('window').width,
      justifyContent:'center',alignItems:'flex-start',paddingLeft:15,
      
      }}
      
      >
        
        <Text style={{fontSize:15,marginBottom:20,marginTop:70,color:'#b2bec3'}}>Please Fill the fields</Text>
       
      </View>
      <View style={{position:"absolute",top:85}}>
            <ActivityIndicator size="large" color="#0000ff" animating={creating}/>
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
              onChangeText={(email) => setUserInfo(state =>{
                return {...state,email}
        
              })} 
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

            <View style={{...styles.input_subcont,marginBottom:30}}>
              <FontAwesomeIcon  style={{color:'#fff',marginTop:5}} size={ 32 } icon={ faKey } />
              <TextInput
                style={styles.text_inp}
                secureTextEntry={true}
                placeholder='Confirm Password'
                placeholderTextColor="#b2bec3" 
                onChangeText={(password) => setUserInfo(state =>{
                  return {...state,password}
          
                })} 
                
              />
              
            </View>
            
          <View>

            <TouchableOpacity style={styles.btn}
             onPress={() => {
              setCreating(true);
              sign()
             }
            }
            
            >
              <Text style={{color:'#fff',textAlign:"center",fontSize:20}} >Create Account</Text>
              </TouchableOpacity> 
            
          </View> 
          </KeyboardAvoidingView>
      </View>
      <View style={{width: Dimensions.get('window').width,
          
         // backgroundColor:'green',
         flexDirection:'row',
          justifyContent:'flex-end',
          alignItems:'flex-end',
          paddingHorizontal:15,
          paddingTop:10
          
          }}>
             <FontAwesomeIcon  style={{color:'#fff' ,marginRight:5}} size={ 22 } icon={ faArrowLeft } />

              <TouchableOpacity style={ {flexDirection:'row',  }}  
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text style={{color:'#fff',textAlign:"center",fontSize:16,
                  textDecorationLine:'underline',alignSelf:"center"
                  
                  }}>Go Back</Text>
                 
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
   width:Dimensions.get('window').width-80, 
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