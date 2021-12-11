import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, Image, TouchableOpacity,  ImageBackground } from 'react-native';


export default class Kereses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cim: '',
      filmmufaj: '',
      filmmufajid:1,
      services: [ 'one', 'two', 'three', 'four', 'five' ]
      
    };
  }
  
  
  componentDidMount(){
    fetch('http://192.168.1.90:3000/mufajok')
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


     fetch('http://192.168.1.90:3000/filmek')
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
     fetch('http://192.168.1.90:3000/kereses', {
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
    /*let serviceItems = this.state.services.map( (s, i) => {
      return <Picker.Item key={i} value={s} label={s} />
  });*/
    
    return (
  
    <View style={{flex:1,backgroundColor:"#262626"}}>
      <ImageBackground source={require('./kepek/hatter.jpg')} style={{width: '100%', height: '100%', flex:1}}>
      <View style={{padding: 10, alignItems:"center", backgroundColor:"#262626", }}>
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
            <Text style={{textAlign:"center", fontSize:15,paddingTop:6}}>Keresés</Text>
          </View>
        </TouchableOpacity>
        </View>



        


    <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.dataSource}      
          keyExtractor={({film_id}, index) => film_id}
          renderItem={({item}) =>
          <View style={{justifyContent:"center",alignItems:"center", paddingBottom: 20, }}>
            <Image 
            source={{uri:'http://172.16.0.29:3000/'+item.film_kep}}
            style={{width:175,height:250,margin:5,borderRadius:15,}}
            />
            
   
          </View>        
        }
        
        />

      </View>
      </ImageBackground>
      </View>
      
      
    );
  }
}

/*
  <View style={{}}>
                  <Picker
                    selectedValue={this.state.selectedService}
                    onValueChange={ (service) => ( this.setState({selectedService:service}) ) } >

                    {serviceItems}

                  </Picker>
        </View>*/

//<Text style={{color:"white",margin:5}}>{item.film_cim} ({item.film_ev})</Text>