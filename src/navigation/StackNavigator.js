// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../components/Home';
import Home2 from '../components/Home2';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  );
}

const MainStackNavigator2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, MainStackNavigator2 };
