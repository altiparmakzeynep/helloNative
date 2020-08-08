import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import{  Button } from 'react-native';

class NewsForm extends Component{

    addButton(){
        console.log("hello");
        this.props.addNews();
    }
    render(){
        return(
            <View>
                <Button onPress={()=>this.addButton()}title="add"></Button>
            </View>
            
        )
    }

}

export default NewsForm;