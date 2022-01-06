import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";



export default class Header2 extends React.Component{
    constructor(props) {
        super(props);
        
      }

      

      asd=async()=>{
        alert("alert")
    
        }
    render(){
        return(
            <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",width:"132%"}}>
                <View >
                <Text style={{fontWeight:"bold",color:"white",letterSpacing:1,fontSize:25, }}>Kezdőoldal</Text>
                </View>
                <TouchableOpacity onPress={async()=>this.asd()}>
                <View style={{paddingLeft:90}}>
                <Ionicons name="information-circle-sharp" size={30} color="white" />
            </View>
            </TouchableOpacity>
            </View>
        );
    }
}