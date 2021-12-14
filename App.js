import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Filmek from './Filmek';
import Kereses from './Kereses';

function Kezdooldal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:"#262626"}}>
      <Button
        onPress={() => navigation.navigate('Filmek')}
        title="Go to notifications"
      />
    </View>
  );
}


function filmek_lap({ navigation }) {
  return (
    <Filmek/>
    );
};
function kereses_lap({ navigation }) {
  return (
    <Kereses/>
    );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Keződoldal">
        <Drawer.Screen name="Keződoldal" component={Kezdooldal} options={{headerStyle:{backgroundColor: '#2596be'}}} />
        <Drawer.Screen name="Filmek" component={filmek_lap} options={{headerStyle:{backgroundColor: '#2596be'}}} />
        <Drawer.Screen name="Keresés" component={kereses_lap} options={{headerStyle:{backgroundColor: '#2596be'}}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
