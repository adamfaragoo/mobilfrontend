import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, Button, show,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";



export default class Header2 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            show:false,
        }
        
      }


    render(){
        return(
            <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",width:"132%"}}>
                <View >
                <Text style={{fontWeight:"bold",color:"white",letterSpacing:1,fontSize:25, }}>Kezdőoldal</Text>
                </View>

                <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
                <View style={{paddingLeft:90}}>
                <Ionicons name="information-circle-sharp" size={30} color="white" />
            </View>
            </TouchableOpacity>
            <Modal
            transparent={true}
            visible={this.state.show}
            animationType={"fade"}
            >
            <View style={{backgroundColor:"#000000aa", flex:1}}>
                <View style={{backgroundColor:"white",margin:50, padding:20, borderRadius:10}}>
                <Text style={{fontSize:20,}}>Modal text </Text>

                <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
                <View style={{alignItems:"center", marginTop:70,}}>
                <Ionicons name="close-circle" size={30} color="black" />
            </View>
            </TouchableOpacity>
                </View>

            </View>
            </Modal>
            </View>
        );
    }
}

/*
<TouchableOpacity onPress={async()=>this.asd()}>
                <View style={{paddingLeft:90}}>
                <Ionicons name="information-circle-sharp" size={30} color="white" />
            </View>
            </TouchableOpacity>
*/