import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image, ImageBackground  } from 'react-native';



export default class Filmek extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
      

  fetch('http://172.16.0.29:3000/legjobbfilmek')
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

      fetch('http://172.16.0.29:3000/legjobbsorozatok')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource2: responseJson,
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
        
      <Text style={{color:'white', fontSize:25, textAlign:'center', fontWeight:'bold', marginBottom:15}}>Legjobb sorozatok</Text>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          data={this.state.dataSource2}
          horizontal
          //numColumns={2}
          keyExtractor={({film_id}, index) => film_id}
          renderItem={({item}) =>
          <View >
            <Image 
            source={{uri:'http://172.16.0.29:3000/'+item.sorozat_kep}}
            style={{width:175,height:250,margin:5,borderRadius:15}}
            />
            <Text style={{color:"white",fontSize:13,fontWeight:"bold",textAlign:"center"}}>{item.sorozat_cim}</Text>
            
          </View>
  
        }
        />

      <Text style={{color:'white', fontSize:25, textAlign:'center', fontWeight:'bold', marginBottom:15}}>Legjobb filmek</Text>

        <FlatList 
          showsHorizontalScrollIndicator={false}
          data={this.state.dataSource}
          horizontal
          //numColumns={2}
          keyExtractor={({film_id}, index) => film_id}
          renderItem={({item}) =>
          <View >
            <Image 
            source={{uri:'http://172.16.0.29:3000/'+item.film_kep}}
            style={{width:175,height:250,margin:5,borderRadius:15}}
            />
            <Text style={{color:"white",fontSize:13,fontWeight:"bold",textAlign:"center"}}>{item.film_cim}</Text>
            
          </View>
  
        }
        />
        

        
      </View>
    );
  }
}