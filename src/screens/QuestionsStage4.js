import React,{ useState } from 'react';
import { StyleSheet,View, Text,FlatList,Button,Image,
    TouchableOpacity,SafeAreaView,Dimensions,StatusBar  } from 'react-native';
    import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes,faCheck,faEye } from '@fortawesome/free-solid-svg-icons'



export default function QuestionsStage4({route,navigation}) {

    const { letter } = route.params;

    const [questions4, setQuestions4] = useState([
        {text: 'Do you plan your entire day?',key:'1',value:0,up:1},
        {text: 'Do you find lists helpful?',key:'2',value:0,up:1},
        {text: 'Do you spend time getting organized before you start working?',key:'3',value:0,up:1},
        {text: 'Do you enjoy planning event for your friends?',key:'4',value:0,up:1},
        {text: 'Do schedules help you manage stress?',key:'5',value:0,up:1},
        {text: 'Do you always keep your promises?',key:'6',value:0,up:1},
        {text: 'Do you find the  most success when following a detailed  plan?',key:'7',value:0,up:1},
        {text: 'Are you always early?',key:'8',value:0,up:1},
        {text: 'Do you struggle underpressure?',key:'9',value:0,up:1},
        {text: 'Do you have a hard time being spontaneous?',key:'10',value:0,up:1},
        {text: 'Have you ever been late to meet your friends because of your work?',key:'11',value:0,up:0},
        {text: 'Have you ever stimulated by an approaching deadline?',key:'12',value:0,up:0},
        {text: 'Do you appear to be a task oriented person?',key:'13',value:0,up:0},
        {text: 'Do you prefer to keep minimum plans?',key:'14',value:0,up:1},
        {text: 'Have you ever failed to make decisions by staying open to new information for so long?',key:'15',value:0,up:0},
        
    ]);

    const [counter4, setCounter4] = useState(0);

    function setCount(index,flag){

        let tempQues=questions4;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1 && flag=="Y")return;//avoid counting twice

        if(target.value==1 && flag=="N") minusCounter(1); 

        if(flag=="Y" && target.up==1){
            setCounter4(counter4 + 1);
            target.value=1;
          
        }
        else if(flag=="Y" && target.up==0){

           // setCounter1(counter1 + 1);
           if(target.value==2)minusCounter(1);

            target.value=1;
            
        }
        else if(flag=="N" && target.up==0){

            setCounter4(counter4 + 1);
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

        console.log(counter4);


        setQuestions4([...tempQues]);
    }

    function minusCounter(targetVal){

        if(counter4>0 && targetVal==1){
            setCounter4(counter4 - 1);
        }

        

    }



    function flipValue(index){
        let tempQues=questions4;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1)return;

        setCounter4(counter4 + 1);
        target.value=1;
        tempQues=tempQues.filter(el=>el.key!=index);
        //console.log(tempQues);
        tempQues=[...tempQues,target];

        tempQues.sort(function (a, b) {
            return a.key - b.key;
          });

         // console.log(tempQues);


        setQuestions4([...tempQues]);
    }

    function flipValueNo(index){
        let tempQues=questions4;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1){
            setCounter4(counter4 - 1); 
             
        }

        target.value=2;
        tempQues=tempQues.filter(el=>el.key!=index);
        //console.log(tempQues);
        tempQues=[...tempQues,target];

        tempQues.sort(function (a, b) {
            return a.key - b.key;
          });

         // console.log(tempQues);


        setQuestions4([...tempQues]);
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
                <Text style={{color:'#fff'}}>Stage 4 of 4</Text>
       
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
                letter.splice(3);
                if(counter4>=9){
                    letter.push('J')
                    navigation.navigate('Result', { letter: letter});
                }
                else{
                    letter.push('P')
         
                    navigation.navigate('Result', { letter: letter});
                    
                }}}
            > 
            <Text  style={{color:'black',fontSize:16,marginRight:10}}>Show Personality Type</Text> 
            <FontAwesomeIcon  style={{color:'black'}} size={ 20 } icon={ faEye } />
          </TouchableOpacity>
      
);
    };

    return (
        <View style={styles.container}>
            
            <FlatList
                 data={questions4}
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