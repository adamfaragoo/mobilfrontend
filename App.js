import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, CreateStackNavigator } from '@react-navigation/stack';
import Kereses from './Kereses.js'
import Header from './header.js'



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
        <Drawer.Navigator initialRouteName='Filmek' >
          <Drawer.Screen name="Film" children={this.createHomeStack} options={{headerShown:false}}  />
        </Drawer.Navigator>
      </NavigationContainer>

    );
  }
}