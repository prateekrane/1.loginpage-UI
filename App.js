import * as React from 'react';
import {View, Text, StyleSheet,TextInput,ImageBackground } from 'react-native';
import LoginScreen from './Screens/Login';

export default function App()
{
  return(
    <>
  <View style={maindeco.container}>
    <ImageBackground
        style={maindeco.opnent}
        source={require('./img/gif.gif')}
        resizeMode='cover'
        >
       <LoginScreen />
        </ImageBackground>
        
  </View>
  
  </>
  );
}

const maindeco=StyleSheet.create(
  {
    opnent:{
      flex:1,
      justifyContent:"center",
     
    },
    container:{
      flex:1,
      // padding:24,
      // marginTop:25,
      
      backgroundColor:"#ffffff",
    },

  }
)