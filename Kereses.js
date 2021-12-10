import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default class Kereses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cim: '',
      
    };
  }
  
  
  componentDidMount(){
    return fetch('http://172.16.0.29:3000/filmek')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  kereses=async () =>{
     let bemenet ={
       bevitel1:this.state.cim,


     }
     fetch('http://172.16.0.29:3000/kereses', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    )
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
 
   }

  render() {
    return (
    <View style={{flex:1,backgroundColor:"#262626"}}>
      <View style={{padding: 10, alignItems:"center", backgroundColor:"#262626"}}>
        <TextInput
        placeholderTextColor="black"
        style={{height: 45,backgroundColor:"#DCDCDC", borderRadius:10, padding:10, width:240,margin:20, textAlign:"center", }}
        placeholder="Keresés"
        onChangeText={(cim) => this.setState({cim})}
        value={this.state.cim}
        />

        <TouchableOpacity 
          onPress={async ()=>this.kereses()}>
          <View style={{width:120,backgroundColor:"#2596be", borderRadius:10,padding:5, marginBottom:15,}}>
            <Text style={{textAlign:"center", fontSize:15,}}>Keresés</Text>
          </View>
        </TouchableOpacity>
    
    <FlatList
          data={this.state.dataSource}      
          keyExtractor={({film_id}, index) => film_id}
          renderItem={({item}) =>
          <View style={{justifyContent:"center",alignItems:"center"}}>
            <Image 
            source={{uri:'http://172.16.0.29:3000/'+item.film_kep}}
            style={{width:175,height:250,margin:5,borderRadius:15}}
            />
            <Text style={{color:"white",margin:5}}>{item.film_cim} ({item.film_ev})</Text>
   
          </View>        
        }
        
        />

      </View>
      
      </View>
      
    );
  }
}