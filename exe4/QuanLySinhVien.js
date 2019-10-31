import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Button, ActivityIndicator} from 'react-native';

export default class QuanLySinhVien extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            arrSinhVien:null,
            refresh: true
        }
    }


        render()
        {
            if(this.state.refresh) {
                return (
                    <View>
                        <ActivityIndicator/>
                    </View>
                );
                
            }
            else {
                 let student = this.state.arrSinhVien.map((val,key) => {
                    return <View key={key} style={Styles.left}>
                        <Image source={{uri: val.hinhanh}}
                        style={Styles.hinh} />
                        <View style={Styles.main}>
                            <Text style={Styles.text}>MSSV: {val.masv}</Text>
                            <Text style={Styles.text}>Tên sinh viên: {val.tensv}</Text>
                        </View>
                    </View>
                });

                return (
                    <ScrollView>
                        <View>
                            {student}
                        </View>
                    </ScrollView>
                    
                );
            }
           
        }

    componentDidMount()
    {
        return fetch("https://api.myjson.com/bins/b8s5w")
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({
                arrSinhVien: responseJson.sinhvien,
                refresh: false 
            })
        })
        .catch((e) => {console.log(e)});
    }
    
}


var Styles = StyleSheet.create({
    inside:{
        borderBottomWidth: 1,
        padding:50,
        borderRightWidth: 1,
        flexDirection: "row"
    },
    
    hinh:{
        width:100,
        height:100,
    },
   
    main: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        margin: 5,
    }, 

    left:{
        marginHorizontal:10,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    button:{
        flex: 1,
        flexDirection: 'column',
        
    }
});