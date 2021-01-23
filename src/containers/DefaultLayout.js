
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';

import Home from '../screens/home'
import Provision from '../screens/provision'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const DefaultLayout = () => {

  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Provision" component={Provision} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0) "
  },

});

export default DefaultLayout;
