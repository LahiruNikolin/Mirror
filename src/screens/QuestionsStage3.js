import React,{ useState } from 'react';
import { StyleSheet,View, Text,FlatList,Button,Image,
    TouchableOpacity,SafeAreaView,Dimensions,StatusBar  } from 'react-native';
    import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
    import { faTimes,faCheck,faForward } from '@fortawesome/free-solid-svg-icons'

export default function QuestionsStage3({route,navigation}) {


    const { letter } = route.params;
    const [questions3, setQuestions3] = useState([
        {text: 'Do you follow your heart over your head?',key:'1',value:0},
        {text: 'Would you rather be called empathetic than reasonable?',key:'2',value:0},
        {text: 'Do you value  emotion over logic?',key:'3',value:0},
        {text: 'Do  you like sad stories over thought-provoking stories?',key:'4',value:0},
        {text: 'Amoung your friends are you the peacemaker?',key:'5',value:0},
        {text: 'Do you try to sympathize with your friends problems instead of analyzing them?',key:'6',value:0},
        {text: 'Would your friends say you are a devoted friend?',key:'7',value:0},
        {text: 'When a problem arises,do you handle it gently and  carefully?',key:'8',value:0},
        {text: 'Do you value compassion over strenght?',key:'9',value:0},
        {text: 'Do people describe you as soft or comfortable?',key:'10',value:0}
      
    ]);
    const [counter3, setCounter3] = useState(0);

    function flipValue(index){
        let tempQues=questions3;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1)return;

        setCounter3(counter3 + 1);
        target.value=1;
        tempQues=tempQues.filter(el=>el.key!=index);
        //console.log(tempQues);
        tempQues=[...tempQues,target];

        tempQues.sort(function (a, b) {
            return a.key - b.key;
          });

         // console.log(tempQues);


        setQuestions3([...tempQues]);
    }

    function flipValueNo(index){
        let tempQues=questions3;
        let target=tempQues.find(el=> el.key==index);
        if(target.value==1){
            setCounter3(counter3 - 1); 
             
        }

        target.value=2;
        tempQues=tempQues.filter(el=>el.key!=index);
        //console.log(tempQues);
        tempQues=[...tempQues,target];

        tempQues.sort(function (a, b) {
            return a.key - b.key;
          });

         // console.log(tempQues);


        setQuestions3([...tempQues]);
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
            <Text style={{color:'#fff'}}>Stage 3 of 4</Text>
            
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
            onPress={() =>{
                letter.splice(2);
                if(counter3>=6){
                    letter.push('F')
                    navigation.navigate('Question4', { letter: letter});
                }
                else{
                    letter.push('T')
         
                    navigation.navigate('Question4', { letter: letter});
                    
                }}
            }
            > 
            <Text  style={{color:'black',fontSize:16,marginRight:10}}>Proceed to Stage 4</Text> 
            <FontAwesomeIcon  style={{color:'black'}} size={ 20 } icon={ faForward } />
          </TouchableOpacity>
      
);
    };


    return (
        <View style={styles.container}>
            
        
         
            <FlatList
                data={questions3}
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
                               
                                flipValue(item.key);
                            }}
                            >
                              <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <FontAwesomeIcon  style={{color:'#fff'}} size={ 20 } icon={ faCheck } />
                              </View> 
                           
                               
                            </TouchableOpacity>
                            <TouchableOpacity  
                                style={ item.value==2 ? styles.noBtn_selected :styles.noBtn }
                                onPress={() =>  {
                                    
                                    flipValueNo(item.key);
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