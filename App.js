import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text,TouchableOpacity, View,Image,Button, Alert,ImageBackground,TextInput,ScrollView} from 'react-native';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons.js';


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular':require('./assets/fonts/InterVariable.ttf')
  })
}

export default function App() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} >
      
      <ImageBackground source={{uri:'https://jovelon.files.wordpress.com/2014/02/tumblr_n0bwlwivnr1qeodauo1_500.gif'}} style={{marginLeft:-20,marginRight:-20}} ><Text style={styles.text}>Home</Text></ImageBackground>
      <View>
        <TextInput style={styles.input} placeholder='Search Anime...' placeholderTextColor='white' >  </TextInput>
      </View>
      <View style={styles.bg}>
      <ImageBackground source={{uri:'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fs38w1137734vmqyjmifzoeb/public'}}><Text style={{color:'black',fontSize:30,fontStyle:'normal',fontWeight:'bold'}}>Trending Anime</Text></ImageBackground>   
      </View>
      <ScrollView style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/1/19/K-On%21_DVD_volume_1_cover.jpg'}} style={{height:350,width:180,borderRadius:10,borderColor:'white',borderWidth:5,marginLeft:10}}></Image>
        </TouchableOpacity>
        
        
        <TouchableOpacity>
        <Image source={require('./assets/musaigen no phantom world.jpg')} style={{height:350,width:170,borderRadius:10,borderColor:'white',borderWidth:5,paddingTop:300,marginLeft:10}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assets/AMB.jpg')} style={{height:350,width:160,borderRadius:10,borderColor:'white',borderWidth:5,marginLeft:10}}></Image>
        </TouchableOpacity>
        </View>
        
        
      </ScrollView>
      <ScrollView style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <Image source={require('./assets/burningFightingfighter.jpg')} style={{height:350,width:180,borderRadius:10,borderColor:'white',borderWidth:5,marginLeft:10}}></Image>
        </TouchableOpacity>
        
        
        <TouchableOpacity >
        <Image source={require('./assets/sound-euphonium.jpg')} style={{height:350,width:170,borderRadius:10,borderColor:'white',borderWidth:5,paddingTop:300,marginLeft:10}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assets/AMB.jpg')} style={{height:350,width:160,borderRadius:10,borderColor:'white',borderWidth:5,marginLeft:10}}></Image>
        </TouchableOpacity>
        </View>
        
        
      </ScrollView>

      <ScrollView style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
        <Image source={{uri:'https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg'}} style={{height:350,width:180,borderRadius:10,borderColor:'white',borderWidth:5,marginLeft:10}}></Image>
        </TouchableOpacity>
        
        
        <TouchableOpacity >
        <Image source={require('./assets/sound-euphonium.jpg')} style={{height:350,width:170,borderRadius:10,borderColor:'white',borderWidth:5,paddingTop:300,marginLeft:10}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assets/AMB.jpg')} style={{height:350,width:160,borderRadius:10,borderColor:'white',borderWidth:5,marginLeft:10}}></Image>
        </TouchableOpacity>
        </View>
        
        
      </ScrollView>
      
      <View style={{paddingTop:10,width:100,alignSelf:'center'}}>
        <Button style={{fontWeight:'bold',color:'black'}} color="orange" title='MORE'  onPress={() => Alert.alert("LMFAO","BRUH",[{text:"YES"},{text:"NO"},])}></Button>
        <TextInput></TextInput>
        </View>
        
    </ScrollView>
    


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'black',
    paddingTop: Platform.OS == 'android' ? 20:0,
    paddingEnd: Platform.OS == 'android'? 0:0,  

  },
  text:{
     textAlign:'center',
     borderWidth:1,
     color:'hwb(120,269%,10%)',
     fontWeight:'bold',
     borderColor:'white',
     borderCurve:'continuous',
     fontSize:35,
     textAlignVertical:'center',
     paddingTop:0,
     borderWidth: 9.6,
     borderRadius:55,
     fontWeight:'400',
     
     
     
     },
     input:{
      borderWidth:1,
      marginLeft:10,
      borderColor:'white',
      width:200,
      height:30,
      color:'white',
      alignSelf:'center',
     },
     bg:{
      paddingTop:10,
      borderWidth:1,
      borderColor:'white',
      borderCurve:'continuous',
      borderRadius:55,
     }
     

      
     
  
});
