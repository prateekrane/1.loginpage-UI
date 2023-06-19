import * as React from 'react';
import {View, Text, StyleSheet,TextInput } from 'react-native';
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Pressable } from 'react-native';

const LoginScreen =()=>
{
    const[email,onchangeEmail]=useState(" ");
    const[password,onchangePassword]=useState(" ");
    const[login,setlogin]=useState(false);
    return(
        <>
      <View style={logdeco.container}>
      <Text style={logdeco.uppertext}> Log in</Text>
      
        <TextInput
        style={logdeco.innertext}
        value={email}
        onChangeText={onchangeEmail}
        placeholder={'email'}
        keyboardType="email-address"
        textAlign="center"
        justifyContent="center"
        
       />
       <TextInput
        style={logdeco.innertext}
        value={password}
        onChangeText={onchangePassword}
        placeholder='password'
        secureTextEntry={true}
        />
           <Pressable 
           style={({pressed})=>[{backgroundColor:pressed?"#DFC1F5":"#B86EEF"},logdeco.button]}
           onPress={()=>{setlogin(true)}}>
           <Text style={logdeco.buttontext}>Login</Text>
           </Pressable>  
      </View>

    
      </>
    );
}
export default  LoginScreen;

const logdeco=StyleSheet.create(
    {
        container:{
            height:300,
            wigth:300,
            backgroundColor:"#ffffff",
            borderRadius:50,
            marginLeft:50,
            marginRight:50,
             opacity:0.80,
            
        },
       uppertext:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        padding:10,
        textAlign:"center",
        // opacity:0.25,
       },
       innertext:{
           height:40,
           width:250,
           padding:0,
           borderRadius:10,
           borderColor:"black",
           fontSize:15,
           color:"black",
           borderWidth:1,
           margin:10,
           marginTop:25,
           textAlign:"center",
           marginTop:25,
           marginVertical:-10,
           marginLeft:20, 
       },
       button:{
        height:50,
        width:200,
        borderRadius:50,
        // backgroundColor:"#B86EEF",
        marginTop:35,
        // flexDirection:"row",
        alignSelf:'center',
       
       },
       buttontext:{
        fontSize:20,
        padding:10,
        textAlign:"center",
       },

    }
)