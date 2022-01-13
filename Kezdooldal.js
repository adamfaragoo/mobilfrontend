import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image, ImageBackground, TouchableOpacity  } from 'react-native';



export default class Kezdooldal extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource:[],
      dataSource2:[],
    }
    
    setInterval(()=>{
      
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
      })

     
    }
    ,2000)
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
      
      <View style={{flex: 1, paddingTop:20,backgroundColor:"#262626",flexDirection:'column', paddingTop:170}}>
      <View style={{flex:3}}>
      <Text style={{color:'white', fontSize:20, textAlign:'center', fontWeight:'bold', marginBottom:5, marginTop:30}}>Legjobb sorozatok</Text>
        <FlatList 
          style={{height:60,}}
          showsHorizontalScrollIndicator={false}
          data={this.state.dataSource2}
          horizontal
          //numColumns={2}
          keyExtractor={({sorozat_id}, index) => sorozat_id}
          renderItem={({item}) =>
            <TouchableOpacity onPress={async()=>this.props.navigation.navigate('Sorozatsajat',{sorozatnev:item.sorozat_cim,
            sorozathossz:item.sorozat_hossz,
            sorozatid:item.sorozat_id,
            sorozatleiras:item.sorozat_leiras,
            sorozatev:item.sorozat_ev,
            sorozatido:item.sorozat_hossz,
            sorozatevad:item.sorozat_evadszam,
            sorozatepizod:item.sorozat_epizodszam
            })}>
            <Image 
            source={{uri:'http://172.16.0.29:3000/'+item.sorozat_kep}}
            style={{width:120,height:170,margin:5,borderRadius:15}}
            />
            <Text style={{color:"white",fontSize:13,fontWeight:"bold",textAlign:"center", width:135}}>{item.sorozat_cim}</Text>
            </TouchableOpacity>

  
        }
        />
        </View>

        <View style={{flex:3}}>
      <Text style={{color:'white', fontSize:20, textAlign:'center', fontWeight:'bold',paddingBottom:5,}}>Legjobb filmek</Text>

        <FlatList 
          style={{height:60}}
          showsHorizontalScrollIndicator={false}
          data={this.state.dataSource}
          horizontal
          keyExtractor={({film_id}, index) => film_id}
          renderItem={({item}) =>
            <TouchableOpacity onPress={async()=>this.props.navigation.navigate('Filmsajat',
            {
            filmid:item.film_id,
            filmnev:item.film_cim,
            filmev:item.film_ev,
            filmhossz:item.film_hossz,
            filmleiras:item.film_leiras
            })}>
            <Image 
            source={{uri:'http://172.16.0.29:3000/'+item.film_kep}}
            style={{width:120,height:170,margin:5,borderRadius:15}}
            />        
            <Text style={{color:"white",fontSize:13,fontWeight:"bold",textAlign:"center", width:125, alignItems:'center' }}>{item.film_cim}</Text>
            </TouchableOpacity>
  
        }
        />
        </View>

        
      </View>
    );
  }
}