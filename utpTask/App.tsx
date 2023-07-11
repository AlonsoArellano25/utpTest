/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './src/views/Gallery/Gallery';
import ItemGallery from './src/views/ItemGallery/ItemGallery';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{title: 'Galeria'}}
          />
          <Stack.Screen
            name="ItemGallery"
            component={ItemGallery}
            options={{title: 'Italia'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
