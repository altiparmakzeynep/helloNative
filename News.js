import React, {Component} from 'react';
import {View} from 'react-native';
import NewsItem from './NewsItem';

class News extends Component{
    render(){
        return(
            <View>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            </View>

        )
    }
}

export default News;