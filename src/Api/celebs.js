import React from 'react';
import { StyleSheet,View, Text,Button,TextInput,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
export default showInfo=(letter)=>{
    
    switch(letter){
        case 'ISTJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Warren Buffett</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Natalie Portman</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Sean Connery</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  
               
              </View>
            );
          case 'ISFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Mother Teresa</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> 50 Cent</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Anthony Hopkins</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
               
              </View>
            );
          case 'INFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Artists </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Actor </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Entrepreneur </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Musician </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Writer </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
                
              </View>
            );
          case 'INTJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:20}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Scientist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Mathematician </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Engineer </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Doctor </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                  
              </View>
            )
          case 'ISTP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Firefighter</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Forensic Science</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Computer Programming</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Software Engineering</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                
              </View>
            );
          case 'ISFP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
               <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Artist </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Musician </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Designer </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Chef </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  
              </View>
            );
          case 'INFP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Artist </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Counselor </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Graphic Designer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Psychologist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
              </View>
            );
          case 'INTP':
            return(
              <View style={{paddingHorizontal:45,marginTop:40}}>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Albert Einstein</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Paul Allen</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Tina Fey</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                   
                 
              </View>
            );
          case 'ESTP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Donald Trump</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Madonna</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Winston Churchill</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                 
              </View>
            );
          case 'ESFP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Leonardo Dicaprio</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Katy Perry</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Cameron Diaz</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Bill Clinton</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
              </View>
            );
          case 'ENFP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Walt Disney</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Ellen DeGeneres</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Mark Twain</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                   
              </View>
            );
          case 'ENTP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Steve Wozniak</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Tom Hanks</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Salma Hayek</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Robert Downey Jr.</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
                   
              </View>
            );
          case 'ESTJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Bill O’Reilly</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Martha Stewart</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Michelle Obama</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
  
                 
                   
              </View>
            );
          case 'ESFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Prince William, Duke of Cambridge</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Mariah Carey</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Sarah Palin</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Elton John</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
              </View>
            );
          case 'ENFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Paul David Hewson</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Pope John Paul II</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Oprah Winfrey</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Morgan Freeman</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                  
              </View>
            );
          case 'ENTJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Bill Gates</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Al Gore</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>


                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>David Letterman</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>George Clooney</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                   
              </View>
            );
     

    }
    }