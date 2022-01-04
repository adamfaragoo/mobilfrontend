import * as React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons,MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import Kereses from './Kereses.js'
import Header from './header.js'
import Filmsajat from './Filmsajat.js'



const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();


export default class App extends React.Component{
  constructor(props) {
    super(props);
  }
  createHomeStack = () =>
  <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:"#2596be"}
    }} >
    <Stack.Screen
    name="Filmek"
    component={Kereses}
    options={{
    headerTitle:()=><Header/>
  }}
    />
    <Stack.Screen name='Filmsajat' component={Filmsajat} options={({route})=>({title: route.params.filmnev})}/>
  </Stack.Navigator>


  render(){

    return(
      <NavigationContainer>
        <BottomTab.Navigator barStyle={{backgroundColor:"lightgrey"}}>
          
           <BottomTab.Screen name="Kezdőoldal" component={this.createHomeStack} options={{
            tabBarIcon: ({focused}) => 
            (<View>
              <Ionicons name={focused ? 'home-sharp': 'home-outline'} size={25} ></Ionicons>
            </View>)
          }}/>
          
           <BottomTab.Screen name="Sorozat" component={this.createHomeStack} options={{
            tabBarIcon: ({focused}) => 
            (<View>
              <Ionicons name={focused ? 'tv-sharp': 'tv-outline'} size={25} ></Ionicons>
            </View>)
          }}/>
          <BottomTab.Screen name="Film" component={this.createHomeStack} options={{
            tabBarIcon: ({focused}) => 
            (<View>
              <MaterialCommunityIcons name={focused ? 'movie-open': 'movie-open-outline'} size={25} ></MaterialCommunityIcons>
            </View>)
          }}/>
           <BottomTab.Screen name="Ajánlás" component={this.createHomeStack} options={{
            tabBarIcon: ({focused}) => 
            (<View>
              <MaterialIcons name={"recommend"} size={25} ></MaterialIcons>
            </View>)
          }}/>
        </BottomTab.Navigator>
        
      </NavigationContainer>

    );
  }
}