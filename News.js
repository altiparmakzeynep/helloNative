import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View,Text,Button} from 'react-native';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';


class News extends Component{
    // state = {
    //     name:"zeynep"
    // };
    //sadece burası değiştiği için sadece burası render edilir.
    // changeName = () => {
    //     this.setState({
    //        name:"selin" + Math.floor(Math.random()*10)
    //     });
    // }
  

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

// static defaultProps = {
//     name:"duru"
// }

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

{/* <Text style={styles.zeynep}>{this.state.name}</Text>

<Button onPress={()=>this.changeName()}title="change the name"></Button> */}

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
    },
    zeynep:{
        fontSize:40,
        alignItems:"center"
        
    }
});

//2.yöntem
// News.PropTypes = {
//     news:PropTypes.array
// }

export default News;