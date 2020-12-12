import React,{ useState } from 'react';
import { StyleSheet,View, Text,FlatList,Button,Image,
    TouchableOpacity,SafeAreaView,Dimensions,StatusBar  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes,faCheck,faForward } from '@fortawesome/free-solid-svg-icons'


export default function QuestionsStage2({navigation,route}) {
    const [questions2, setQuestions2] = useState([
        {text: 'When accomplishing a task do you prefer to do things the accepted way?',key:'1',value:0,up:1},
        {text: 'If you were a teacher,would you prioritize evidence over theoroeis?',key:'2',value:0,up:1},
        {text: 'Do you admire people who are normal and discreet over people who are original and carefree?',key:'3',value:0,up:1},
        {text: 'Do you get along with realistic people better than idealistic people?',key:'4',value:0,up:1},
        {text: 'Do you enjoy when authors say exactly what they mean?',key:'5',value:0,up:1},
        {text: 'Do you conside yourself a practical person?',key:'6',value:0,up:1},
        {text: 'Would you  rather befriend someone who is grounded instead of someone with an active imagination',key:'7',value:0,up:1},
        {text: 'Are you more interested in facts than ideas?',key:'8',value:0,up:1},
        {text: 'Do your friends describe you as "matter-of-fact"?',key:'9',value:0,up:1},
        {text: 'Do you like concrete answers over theoretical questions?',key:'10',value:0,up:1},
        {text: 'Are you pragmatic and look to the “bottom line”?',key:'11',value:0,up:1},
        {text: 'Do you trust experience over words and symbol?',key:'12',value:0,up:1},
        {text: 'Are you a person who involves in a process to make new possibilities into reality?',key:'13',value:0,up:0},
        {text: 'Would you rather learn by thinking a problem through than by hands-on experience?',key:'14',value:0,up:0},
        {text: 'Do you like to see big pictures before finding out the facts?',key:'15',value:0,up:0}
    
    ]);

    const [counter2, setCounter2] = useState(0);
    const { letter } = route.params;

    
    function setCount(index,flag){

        let tempQues=questions2;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1 && flag=="Y")return;//avoid counting twice

        if(target.value==1 && flag=="N") minusCounter(1); 

        if(flag=="Y" && target.up==1){
            setCounter2(counter2 + 1);
            target.value=1;
          
        }
        else if(flag=="Y" && target.up==0){

           // setCounter1(counter1 + 1);
           if(target.value==2)minusCounter(1);

            target.value=1;
            
        }
        else if(flag=="N" && target.up==0){

            setCounter2(counter2 + 1);
            target.value=2;
            
        }
        
        else if(flag=="N" && target.up==1){

           
           if(target.value==1)minusCounter(1);
           
           target.value=2;
            

        }
        else{
            target.value=2;
            console.log("im game");
           
        }

        tempQues=tempQues.filter(el=>el.key!=index);
        //console.log(tempQues);
        tempQues=[...tempQues,target];

        tempQues.sort(function (a, b) {
            return a.key - b.key;
          });


         // console.log(tempQues);

       //  detectLetter();

        console.log(counter2);


        setQuestions2([...tempQues]);
    }

    function minusCounter(targetVal){

        if(counter2>0 && targetVal==1){
            setCounter2(counter2 - 1);
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
                <Text style={{color:'#fff'}}>Stage 2 of 4</Text>
             
                <StatusBar backgroundColor="#1a1a2e"   />
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

                 letter.splice(1);

                if(counter2>=9){
                    letter.push('S')
                    navigation.navigate('Question3', { letter: letter});
                }
                else{
                    letter.push('N')
         
                    navigation.navigate('Question3', { letter: letter});
                    
                }
                     


            }
        
        }
            > 
            <Text  style={{color:'black',fontSize:16,marginRight:10}}>Proceed to Stage 3</Text> 
            <FontAwesomeIcon  style={{color:'black'}} size={ 20 } icon={ faForward } />
          </TouchableOpacity>
      
        );
    };


    return (
        <View style={styles.container}>
            
        
         
            <FlatList
                data={questions2}
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
 
          
       
      </View>
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