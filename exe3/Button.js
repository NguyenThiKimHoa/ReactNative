import React, { Component } from 'react';
import { Text, View, Button, Alert, StyleSheet,TextInput } from 'react-native';

export default class ToanTu extends Component{
    constructor(props) {
        super(props);
        this.state = { text: "" };
      }

    _onPressButton = ()=>{Alert.alert(this.state.text)}; 
    render() {
        return(
            
            <View style= { { flex : 1, justifyContent:'center', alignItems:'center'}}>
                <TextInput
                style={{height: 40, borderColor: 'gray', marginBottom:50, paddingHorizontal: 100}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
                
                <Button onPress={this._onPressButton} title="Click" color='green'/>
            </View>
        );

    }
}