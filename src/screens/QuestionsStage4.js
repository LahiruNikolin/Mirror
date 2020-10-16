import React,{ useState } from 'react';
import { StyleSheet,View, Text,FlatList,Button,Image,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native';



export default function QuestionsStage4() {
    const [questions4, setQuestions4] = useState([
        {text: 'Do you plan your entire day?',key:'1',value:0},
        {text: 'Do you find lists helpful?',key:'2',value:0},
        {text: 'Do you spend time getting organized before you start working?',key:'3',value:0},
        {text: 'Do you enjoy planning event for your friends?',key:'4',value:0},
        {text: 'Do schedules help you manage stress?',key:'5',value:0},
        {text: 'Do you always keep your promises?',key:'6',value:0},
        {text: 'Do you find the  most success when following a detailed  plan?',key:'7',value:0},
        {text: 'Are you always early?',key:'8',value:0},
        {text: 'Do you struggle underpressure?',key:'9',value:0},
        {text: 'Do you have a hard time being spontaneous??',key:'10',value:0}
        
    ]);

    const [counter4, setCounter4] = useState(0);
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
                <Text>Stage 4 of 4</Text>
                <Text>{counter4}</Text>
            </View>
            );
    };

    const getFooter = () => {
       
        return (  <View style={styles.ok} >
                    <Button
                    title='Im game'
                    onPress={() => navigation.navigate('Question1')}
                    /> 
                </View>
   
        );
    };

    return (
        <View style={styles.container}>
            
            <FlatList
                 data={questions4}
                 keyExtractor={item => item.key}
                 renderItem={({item})=>(
                     
                     <View style={styles.list_item}>
                         <View style={styles.drake_cont}>
                             <Text style={{ fontSize:20}}>{item.text}</Text>
                             <Text style={{ fontSize:20,paddingBottom:25}}>{ item.value==1 ? showIc() :showIc2(item.value) }</Text>
                             
                         </View> 
                             <View style={styles.btn_cont}>
                                 <TouchableOpacity  
                                     style={ item.value==1 ? styles.btn_selected :styles.btn }
                                 onPress={() =>  {
                                    
                                     flipValue(item.key);
                                 }}
                                 >
                                  <Text style={{color:'#fff',textAlign:"center"}}>Yeah</Text>
                                    
                                 </TouchableOpacity>
                                 <TouchableOpacity  
                                     style={ item.value==2 ? styles.noBtn_selected :styles.noBtn }
                                     onPress={() =>  {
                                         
                                         flipValueNo(item.key);
                                     }}
                                 >
                                  <Text style={{color:'#fff',textAlign:"center"}}>Nope</Text>
                                    
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
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
          
    },

    drake_cont: {
       
        justifyContent:"center",
        alignItems:"center"
    },
 
    list_item: {  
         
       // backgroundColor: '#ff3',  
        marginTop:10,
        padding:15
      
        
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
        backgroundColor:'#083d77'
  
        
    } ,
    noBtn:{
        marginVertical:10,
        marginHorizontal:5,
        flexGrow:1,
        padding:10,
        backgroundColor:'#083d77',

    },
    noBtn_selected:{
        marginVertical:10,
        marginHorizontal:5,
        flexGrow:1,
        padding:10,
        backgroundColor:'#bf0603',

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