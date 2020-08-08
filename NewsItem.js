import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

class NewsItem extends Component{
   render(){
     console.log(this.props);
       return(
           <View>
             <Text>Welcome to React!</Text>
             <Text>{this.props.title}</Text>
             <Text>{this.props.description}</Text>


           </View>
       

           
       )
   }
}

export default NewsItem;