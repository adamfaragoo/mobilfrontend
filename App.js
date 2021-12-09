import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Filmek from './Filmek';

function Kezdooldal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Keződoldal">
        <Drawer.Screen name="Keződoldal" component={Kezdooldal} />
        <Drawer.Screen name="Filmek" component={filmek_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
