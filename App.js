import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';


import NewsItem from './NewsItem';
import News from './News';




export default class App extends Component{
    render(){
     return(
        // <View style={styles.container}>
        // <Text style={styles.welcome}>HELLO!</Text>
        // <NewsItem/>
        // </View>
        <News/>
  
   
    );
 
 }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"aqua"
    },
    welcome:{
        fontSize:20,
        textAlign:"center"
    }
});