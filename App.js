import * as React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import Kereses from './Kereses.js'
import Header from './header.js'



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
  </Stack.Navigator>


  render(){

    return(
      <NavigationContainer>
        <BottomTab.Navigator barStyle={{backgroundColor:"gray"}}>
          <BottomTab.Screen name="Film" component={this.createHomeStack} options={{
            tabBarIcon: ({focused}) => 
            (<View>
              <MaterialCommunityIcons name={focused ? 'movie-open': 'movie-open-outline'} size={25} ></MaterialCommunityIcons>
            </View>)
          }}/>
        </BottomTab.Navigator>
      </NavigationContainer>

    );
  }
}