import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';

export default class Header4 extends React.Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",width:"130%"}}>
                <View >
                <Text style={{fontWeight:"bold",color:"white",letterSpacing:1,fontSize:25}}>Ajánlás</Text>
                </View>
            </View>
        );
    }
}