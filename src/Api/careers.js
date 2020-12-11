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
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Accountant</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Police Officer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Military Leader </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Computer Programmer </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  
               
              </View>
            );
          case 'ISFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Social Worker </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Counselor</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Nurse </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Child Care Provider </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Office Manager</Text>
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
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Physicist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Chemist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Physicist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Computer Programmer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Software Developer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
              </View>
            );
          case 'ESTP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Computer support technician</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Entrepreneur</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Police Officer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                 
              </View>
            );
          case 'ESFP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Artist </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Actor </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Musician</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Fashion Designer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
              </View>
            );
          case 'ENFP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Psychologist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Journalist</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Actor</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                   
              </View>
            );
          case 'ENTP':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Engineer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Lawyer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Inventor</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                   
              </View>
            );
          case 'ESTJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Business Manager</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>School Administrator</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Police Officer </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
  
                 
                   
              </View>
            );
          case 'ESFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                 <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Child Care</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Nursing</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Teaching</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                 
              </View>
            );
          case 'ENFJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}> Human Resource Manager</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Sales Representative</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Manager</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                 
                  
              </View>
            );
          case 'ENTJ':
            return(
                <View style={{paddingHorizontal:45,marginTop:40}}>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Human Resource Manager</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Company CEO </Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>


                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>Software Developer</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>

                  <View style={{flexDirection:'row'}}>
                    
                    <Text style={{fontSize:25,color:'#fff'}}>The Commander</Text>
                    <FontAwesomeIcon  style={{color:'#fff',color:'#2980b9',marginLeft:2,alignSelf:'center'}} size={ 25 } icon={ faCheckCircle } /> 

                  </View>
                   
              </View>
            );
     

    }
    }