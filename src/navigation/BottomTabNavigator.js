// ./navigation/BottomTabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, MainStackNavigator2} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarLabelStyle:{
    fontSize: 20,
    margin: 0,
    padding: 0,
    flex:1,
  },
  tabBarIconStyle: {
    display:'none',
  }
};


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="bottom1" component={MainStackNavigator} />
      <Tab.Screen name="bottom2" component={MainStackNavigator2}  />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;