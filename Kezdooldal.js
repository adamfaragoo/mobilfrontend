import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image, ImageBackground  } from 'react-native';



export default class Filmek extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{flex: 1, paddingTop:20,backgroundColor:"#262626", }}>
        
     
        
      </View>
    );
  }
}