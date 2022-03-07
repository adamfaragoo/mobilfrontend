import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, Button, show,} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons,Entypo } from "@expo/vector-icons";



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
                <Text style={{fontSize:20, textAlign:'center', fontWeight:"bold"}}>Készítette:</Text>

                <View style={{flexDirection:"row", alignItems:'center',marginRight:40, marginLeft:25}}>
                <Entypo name="user" size={24} color="black" style={{marginTop:25, marginRight:10}}/>
                <Text style={{fontSize:20, textAlign:'center', marginTop:30}}>Ákos Zsombor</Text>
                </View>

                <View style={{flexDirection:"row", alignItems:'center',marginRight:40, marginLeft:25}}>
                <Entypo name="user" size={24} color="black" style={{marginTop:5, marginRight:10}}/>
                <Text style={{fontSize:20, textAlign:'center', marginTop:10}}>Faragó Ádám</Text>
                </View>
                <View>
                <MaterialCommunityIcons name="copyright" size={20} color="black" style={{top:87,position:'absolute'}} />
                <Text style={{fontSize:10, textAlign:'center', top:90,position:'absolute', left:20}}>2022</Text>

                </View>
                
                
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