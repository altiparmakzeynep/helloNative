import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import NewsItem from './NewsItem';
import News from './News';

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


class App extends Component{

    // addNews(){
    //     console.log("It's working");
    // }
     addNews = () => {console.log("It's working")};


    render(){
        return(
        
            <News news={news} addNews={this}/>

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