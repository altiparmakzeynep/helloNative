import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import NewsItem from './NewsItem';

class News extends Component{
    render(){
      
        return(
            <View style={styles.container}>
          {
             this.props.news.map(news =>
                <NewsItem
                key ={news.id}
                title= {news.title}
                description = {news.description} />
            
                
                )
          }
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#72D4D4"
        
    
    },
    welcome:{
        fontSize:20,
        textAlign:"center"
    }
});

export default News;