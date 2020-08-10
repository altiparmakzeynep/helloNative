
import React, {Component}from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';



class Counter extends Component{
    state={
        number:0
    };
    increase = () => {
     this.setState({
         number:++this.state.number
     })
    }
  
    decrease = () => {
       this.setState({
           number:--this.state.number
       })
    }
  

    render(){
        return(
            <View style={styles.back}>
                <Text style={styles.number}>{this.state.number}</Text>
                <Button onPress={()=>this.increase()} title="+"></Button>
                <Button  onPress={()=>this.decrease()}title="-"></Button>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    number:{
     fontSize:50
    },
    back:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"  
    } 
})

export default Counter;