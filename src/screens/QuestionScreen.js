import React,{ useState, useEffect } from 'react';
import { StyleSheet,View, Text,FlatList,Button,Image,
    TouchableOpacity,SafeAreaView,Dimensions,StatusBar,ToastAndroid  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes,faCheck,faForward } from '@fortawesome/free-solid-svg-icons'

export default function QuestionScreen({navigation}) {

    useEffect(() => {
 
        detectLetter();
     
      }, [] );

    const [questions, setQuestions] = useState([
        {text: 'Are you typically loud and outgoing?',key:'1',value:0,up:1},
        {text: 'Among your friends, are you often the first to find out about things?',key:'2',value: 0,up:1},
        {text: 'Do you have a large number of friends you don\'t know very well?',key:'3',value: 0,up:1},
        {text: 'Do you talk more than you listen?',key:'4',value: 0,up:1},
        {text: 'Can you comfortably talk to almost anyone?',key:'5',value: 0,up:1},
        {text: 'Do you introduce your friends to new people?',key:'6',value: 0,up:1},
        {text: 'Do strangers feel like they know you right away?',key:'7',value: 0,up:1},
        {text: 'Do you wear your hearts on your sleeve?',key:'8',value: 0,up:1},
        {text: 'Would a stranger describe you as lively and energetic?',key:'9',value: 0,up:1},
        {text: 'Do you jump too quickly into an activity and don’t allow enough time to think over?',key:'10',value: 0,up:1},
        {text: 'Do you see as “reflective” or “reserved”?',key:'11',value: 0,up:0},
        {text: 'Do like to be alone and do things in your own?',key:'12',value: 0,up:0},
        {text: 'Sometimes have you ever forgot to check with outside the world to see your ideas really fit with experience?',key:'13',value: 0,up:0},
        {text: 'Before starting a project have you ever stop and get clear about what project you are doing and why you are doing it?',key:'14',value: 0,up:0},
        {text: 'Do you feel that you are energized when you deal with ideas, memories and reactions that you think within you?',key:'15',value: 0,up:0}
 
    ]);

    const [counter1, setCounter1] = useState(0);
    const [letter, setLetter] = useState([]);
 
     

    const detectLetter=async()=>{

        if(counter1>=9){
          await setLetter(['E']);
         //  console.log('here');
         //  console.log(letter);
        }
        else{
 
            setLetter(['I']);
            
        }

       
       
    }

    function setCount(index,flag){

        let tempQues=questions;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1 && flag=="Y")return;//avoid counting twice

        if(target.value==1 && flag=="N") minusCounter(1); 

        if(flag=="Y" && target.up==1){
            setCounter1(counter1 + 1);
            target.value=1;
          
        }
        else if(flag=="Y" && target.up==0){

           // setCounter1(counter1 + 1);
           if(target.value==2)minusCounter(1);

            target.value=1;
            

        }
        else if(flag=="N" && target.up==0){

            setCounter1(counter1 + 1);
            target.value=2;
            

        }
        
        else if(flag=="N" && target.up==1){

           
           if(target.value==1)minusCounter(1);
           
           target.value=2;
            

        }
        else{
            target.value=2;
            
           
        }

        tempQues=tempQues.filter(el=>el.key!=index);
        //console.log(tempQues);
        tempQues=[...tempQues,target];

        tempQues.sort(function (a, b) {
            return a.key - b.key;
          });


         // console.log(tempQues);

         detectLetter();

        console.log(counter1);


        setQuestions([...tempQues]);
    }

    function minusCounter(targetVal){

        if(counter1>0 && targetVal==1){
            setCounter1(counter1 - 1);
        }

        

    }

 
    function showIc(){
   
       return(
         <Image 
         style={{ width: 90, height: 90 }}
         source={require('./../../assets/yeah.png')} />
       )
    }

    function showIc2(index){
        
      if(index==0)return('')
      else{
        return(
            <Image 
            style={{ width: 90, height: 90 }}
            source={require('./../../assets/nope.png')} />
          )
      }
    }
    const getHeader = () => {
        return (
            <View style={{justifyContent:'center',alignItems:'center',paddingVertical:10}}> 
                <Text style={{color:'#fff'}}>Stage 1 of 4</Text>
               
                <StatusBar backgroundColor="#1a1a2e"/>
            </View>
            );
    };

    const getFooter = () => {
       
        return (   
                    <TouchableOpacity
                    style={{backgroundColor:'#ecf4f3',
                    flexDirection:"row",
                    paddingVertical:15,justifyContent:'center',alignItems:'center',marginTop:25
                }}
                    onPress={() => {

                        if(counter1>=9){
                            navigation.navigate('Question2', { letter: ['E']});
                        }
                        else{
                 
                            navigation.navigate('Question2', { letter: ['I']});
                            
                        }
                             
                    }
                }
                    > 
                    <Text  style={{color:'black',fontSize:16,marginRight:10}}>Proceed to Stage 2</Text> 
                    <FontAwesomeIcon  style={{color:'black'}} size={ 20 } icon={ faForward } />
                  </TouchableOpacity>
              
        );
    };


    
    return (
        
        <SafeAreaView style={styles.container}>
            

           
            <FlatList
                data={questions}
                keyExtractor={item => item.key}
                renderItem={({item})=>(
                    
                    <View style={styles.list_item}>
                        <View style={{flexDirection:'row'}}>
                             <Text style={{ fontSize:20,color:'#fff'}}>{item.key})</Text>
                               <Text style={{ fontSize:20,color:'#fff',  flex:1}}>{item.text}</Text>   
                               
                        </View> 
                        <View style={styles.drake_cont}>
                        
                            <Text style={{ fontSize:20,paddingBottom:25}}>{ item.value==1 ? showIc() :showIc2(item.value) }</Text>
                            
                        </View> 
                            <View style={styles.btn_cont}>
                                <TouchableOpacity  
                                    style={ item.value==1 ? styles.btn_selected :styles.btn }
                                onPress={() =>  {
                                   
                                    setCount(item.key,"Y");
                                }}
                                >
                                  <View style={{justifyContent:'center',alignItems:'center'}}>
                                        <FontAwesomeIcon  style={{color:'#fff'}} size={ 20 } icon={ faCheck } />
                                  </View> 
                               
                                   
                                </TouchableOpacity>
                                <TouchableOpacity  
                                    style={ item.value==2 ? styles.noBtn_selected :styles.noBtn }
                                    onPress={() =>  {
                                        
                                        setCount(item.key,"N");
                                    }}
                                >
                                 <View style={{justifyContent:'center',alignItems:'center'}}>
                                        <FontAwesomeIcon  style={{color:'#fff'}} size={ 20 } icon={ faTimes } />
                                  </View> 
                               
                                   
                                </TouchableOpacity>
                            </View>                   
                    </View> 
                )} 

                ListHeaderComponent={getHeader}
                ListFooterComponent={getFooter}
            />
            
       
      </SafeAreaView>
     
    );
  }

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#132743',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
          
    },

    drake_cont: {
       
        justifyContent:"center",
        alignItems:"center"
    },
 
    list_item: {  
         
        
        marginTop:5,
       //backgroundColor:'red',
       width: Dimensions.get('window').width
         
        
      
        
    },
    btn_cont: {
          
          flexDirection:"row-reverse",
          alignItems:"center",
          justifyContent:"center"
    },
    btn: {
         
        marginVertical:10,
        marginHorizontal:5,
        flexGrow:1,
        padding:10,
        backgroundColor:'#454d66'
  
        
    } ,
    noBtn:{
        marginVertical:10,
        marginHorizontal:5,
        flexGrow:1,
        padding:10,
        backgroundColor:'#454d66',

    },
    noBtn_selected:{
        marginVertical:10,
        marginHorizontal:5,
        flexGrow:1,
        padding:10,
        backgroundColor:'#ec0101',

    },
    btn_selected: {
        backgroundColor:'#04e762',
        marginVertical:10,
        marginHorizontal:5,
        flexGrow:1,
        padding:10
        
    } ,
    ok: {


        marginVertical:10,
        paddingBottom:20
         
    } 
  });