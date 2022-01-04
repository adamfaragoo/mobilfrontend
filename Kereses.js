import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, Image, TouchableOpacity,  TouchableHighlight, StyleSheet  } from 'react-native';
import { color } from 'react-native-reanimated';


export default class Kereses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cim: '',
      filmmufaj: '',
      filmmufajid:1,
      akttema:0,  
      dataSource:[],
      dataSource2:[],    
      aktmufaj:0,
      asd:1,
    };
  }
  
  
  componentDidMount(){
     fetch('http://172.16.0.29:3000/mufajok')
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
  


     fetch('http://172.16.0.29:3000/filmek')
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
  
  kivalaszt = async(szam)=>{
    //alert(szam)
    this.setState({akttema:szam})
    let bemenet={
      bevitel2:szam
    }
    return fetch('http://172.16.0.29:3000/filmszures', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      } )
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
   
  osszes= async() =>
  {
    fetch('http://172.16.0.29:3000/filmek')
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
    /*let serviceItems = this.state.services.map( (s, i) => {
      return <Picker.Item key={i} value={s} label={s} />
  });*/
    
    return (
  
    <View style={{flex:1,backgroundColor:"#262626", alignItems:'center'}}>
      <View style={{flexDirection:'row'}}>
        <TextInput
        placeholderTextColor="black"
        style={{height: 45,backgroundColor:"#DCDCDC", borderRadius:10, padding:10, width:240,margin:20, textAlign:"center", }}
        placeholder="Keresés"
        onChangeText={(cim) => this.setState({cim})}
        value={this.state.cim}
        />

        <TouchableOpacity 
          onPress={async ()=>this.kereses()}>
          <View style={{width:100,backgroundColor:"#2596be", borderRadius:10,padding:5,marginTop:20, height:45,marginRight:20}}>
        
            <Text style={{textAlign:"center", fontSize:15,paddingTop:6, color:'white'}}>Keresés</Text>
          </View>
        </TouchableOpacity>
 
        </View>
        <View style={{height:50, marginBottom:10,flexDirection:'row', }}>

        <TouchableOpacity
            style={{borderWidth:1,borderRadius:10,width:80,height:30,margin:5,width:100, backgroundColor:"#2596be",marginLeft:16}}
            onPress={async ()=>this.osszes()}
            >
          <Text style={{textAlign:"center",fontSize:15,color:"white", paddingTop:3,}}>Összes</Text>
          </TouchableOpacity>

        <FlatList
          data={this.state.dataSource2}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginRight:17, marginLeft:10}}
          renderItem={({item}) => 
          <View style={{alignItems:"center",marginTop:10,flexDirection:'row',marginBottom:19 }}>
           
            <TouchableOpacity
            style={{borderWidth:1,borderRadius:10,width:100,height:27,margin:5,backgroundColor:"#262626", borderColor:"white", }}
            onPress={async ()=>this.kivalaszt(item.mufaj_id)}
            >
            
           
          <Text style={{textAlign:"center",fontSize:15,color:"white", marginTop:1}}>{item.mufaj_nev} </Text>
          </TouchableOpacity>
          </View>
        
        }
          keyExtractor={({mufaj_id}, index) => mufaj_id}
        />
      
        
        </View>      

    <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.dataSource}      
          keyExtractor={({film_id}, index) => film_id}
          renderItem={({item}) =>
          
          <View style={{justifyContent:"center",alignItems:"center", paddingBottom: 20, }}>
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
            style={{width:175,height:250,margin:5,borderRadius:15,}}
            />
            
            <Text style={{color:"white",margin:5,width:160, height:35, textAlign:"center"}}>{item.film_cim}</Text>
            </TouchableOpacity>
   
          </View>        
        }
        
        />

          
      </View>
      
     
      
      
    );
  }
}

/*
   <{this.state.aktmufaj}==item.mufaj_id ? 
            <TouchableOpacity
            style={{borderWidth:1,borderRadius:10,width:100,height:27,margin:5,backgroundColor:"red", borderColor:"white", }}
            onPress={async ()=>this.kivalaszt(item.mufaj_id)}
            >
            :
            <TouchableOpacity
            style={{borderWidth:1,borderRadius:10,width:100,height:27,margin:5,backgroundColor:"#262626", borderColor:"white", }}
            onPress={async ()=>this.kivalaszt(item.mufaj_id)}
            >
            
            >
*/