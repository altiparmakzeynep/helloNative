import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text} from 'react-native';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';


class News extends Component{

    //ilk calisan metod
constructor(props){
    //bizim classımızın extend edildigi component sınıfının constructorı
    super();
    console.log(props);
}


    //proptype tanımlaması 1.yöntem class olursa bu yapılmalı
static propTypes = {
    news:PropTypes.array,
    name:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
 
};

static defaultProps = {
    name:"duru"
}
    render(){
        console.log(this.props.addNews);
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
          
          {/* <Text>{this.props.name}</Text> */}

           <Text>{"\n"}</Text>
          <NewsForm addNews={this.props.addNews}></NewsForm>
         
        
            </View>
              
        )
    }
}
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

//2.yöntem
// News.PropTypes = {
//     news:PropTypes.array
// }

export default News;