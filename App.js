// App.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/navigation/StackNavigator'
import MainBottomTabNavigator from './src/navigation/BottomTabNavigator'
import MainDrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () => {

  return (
    <NavigationContainer>
      <MainDrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
