import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

class NewsItem extends Component{
   render(){
    // const {title,description} = this.props.newsData;
     console.log(this.props);
       return(
           <View>
             {/* <Text>Welcome to React!</Text> */}
             <Text style={styles.title}>{this.props.title}</Text>
             <Text style={styles.description}>{this.props.description}</Text>


           </View>
       

           
       )
   }
}

const styles = StyleSheet.create({
  title:{
   fontSize:40,
   color:"purple"
  },
  description:{
    fontSize:30,
    color:"black"
    
  }

});




export default NewsItem;