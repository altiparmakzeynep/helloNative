import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';


import NewsItem from './NewsItem';
import News from './News';




class App extends Component{
    render(){
    
        const news = [{
            id:"1",
            title:"title 1",
            description:"description 1"
        },
       {
           id:"2",
           title:"title 2",
          description:"description 2"
        },
        {
          id:"3",
          title:"title 3",
          description:"description 3" 
        }];

      
        return(
         
            <News news={news}/>
            

        );
 }
}

export default App;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink"
    },
    welcome:{
        fontSize:20,
        textAlign:"center"
    }
});