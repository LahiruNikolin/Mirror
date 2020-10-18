import React from 'react';
import { StyleSheet,View, Text,Button,TextInput,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight} from '@fortawesome/free-solid-svg-icons'
export default showInfo=(letter)=>{
    
    switch(letter.toString()){
      case 'I,S,T,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>Firm dedication to rules, strict with peoples and time, care about reputation, 
              rely only on their self, no one knows the rules better than u.</Text>
           
          </View>
        );
      case 'I,S,F,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>kind hearted people, standup and fight for others, naturally social, reliable, social work, medical, 
            find happiness on education others and loving natures.</Text>
           
          </View>
        );
      case 'I,N,F,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>less than one percent of population, fly under the radar, underneath one of the strongest and creativity, have passionate opinions and string moral compass, pursue their dreams, work tiredless to change the world, lead in important movements, 
            neglect themselves in process, they are balance in work, family etc.</Text>
            
          </View>
        );
      case 'I,N,T,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:20}}>
            <Text style={{fontSize:15,color:'#fff'}}>represents some of the most accomplished life’s in history, spent lives on creating and innovating, chasing impossible ambitions, curious, always hungry for more, natural academy, careful planners and confident, affect their relationship, 
            work travel and succeed alone, they excel dependence.</Text>
              
          </View>
        )
      case 'I,S,T,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>unorthodox, enjoy getting their hands dirty, they are thrilled by puzzles and problems but have hard time on focusing on one thing, unpredictable, flexibility, saving lives, 
            straight forward and honest, interesting people u ever meet.</Text>
            
          </View>
        );
      case 'I,S,F,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>love to break the rules, unique and adventures ways of thinking, don’t like to be defined by others expectations, continuously search ways to set them selves apart, that’s y most of them success in arts, 
            they reinvent old tradition by out of the box thinking, friends can be little frustrate.</Text>
              
          </View>
        );
      case 'I,N,F,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>fine the good in everyone, excellent communicator, many learn to express their works through creative work, spend much time listening,
             the words may never leave the lips but they have plenty of more to say.</Text>
             
          </View>
        );
      case 'I,N,T,P':
        return(
          <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>innovative and sharp intellect, most logical people having a pattern recognition and problem solving as talent, scientist, some of the brilliant people on the planet but they can 
            leave others with bad impression because of their half-baked ideas</Text>
             
          </View>
        );
      case 'E,S,T,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>center of attention, entertainers whose energy and humors can charm others, risky and adventures life, follow their own rules but observes well, 
            live for the moment, most people crumble in crisis.</Text>
    
          </View>
        );
      case 'E,S,F,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>natural entertainer, actors, confident, generous with time and energy, encourage friends and family, enjoy the attention, sensitive people, 
            struggle when sit down and putting in hour, rely on others to catch the little things.</Text>
             
          </View>
        );
      case 'E,N,F,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>alternate between passionate idealism and free-spirited spontaneity, original thinking, leaders,
             their confidence move them to every move but of course sometimes their intuition leads them down the wrong path..</Text>
               
          </View>
        );
      case 'E,N,T,P':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>frustrating personality type, argue, incredibly clever, plays devil’s advocate for fun, prove their point, 
            creating honest visionaries in midst conflicts, when backed into corner they really began to shine.</Text>
               
          </View>
        );
      case 'E,S,T,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>pride them self in honesty and dignity, never shy away from hard decision, fantastic leaders, active in communities, social improvements, shortcuts are enemies, believes in right work, 
            team work needed, expect others to do what right.</Text>
               
          </View>
        );
      case 'E,S,F,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>extrovert personality 12 percent of population, social,
             they care about it, happiness of others is their first priority even they sacrifice, greet with people no matter what environment.</Text>
             
          </View>
        );
      case 'E,N,F,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>inspiring leaders, never back down from a challenge,
             communicate with others and excel bringing strangers to good cause, believe in others.</Text>
              
          </View>
        );
      case 'E,N,T,J':
        return(
            <View style={{paddingHorizontal:45,marginTop:40}}>
            <Text style={{fontSize:15,color:'#fff'}}>calculate confidence, 
            driven, rational, they make hard decision, always keep an eye on future, fearless strategies, no one can get best out of others like them. .</Text>
              
           
               
        
          </View>
        );

    }
    }