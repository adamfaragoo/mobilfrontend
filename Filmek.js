import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image  } from 'react-native';

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
      <View style={{flex: 1, paddingTop:20,backgroundColor:"#262626"}}>
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
    );
  }
}