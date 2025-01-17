import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CalculateScreen from "./App/Screen/Calculate/CalculateScreen";

import HomeScreen from "./App/Screen/Home/HomeScreen";
import AddPlaceScreen from "./App/Screen/AddPlaces/AddPlaceScreen";
import LogInScreen from "./App/Screen/Login/LogInScreen";
import SignUpScreen from "./App/Screen/Login/SignUpScreen";
import AddDetailScreen from "./App/Screen/AddPlaces/AddDetailScreen";
const Stack = createStackNavigator();

export default function AppIndex() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CalculateScreen" component={CalculateScreen} />
        <Stack.Screen name="AddDetailScreen" component={AddDetailScreen} />
        <Stack.Screen
          name="AddPlaceScreen"
          component={AddPlaceScreen}
          screenOptions={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="LogInScreen"
          component={LogInScreen}
          screenOptions={{
            headerShown: true,
          }}
        /> 
        <Stack.Screen name="SignUpScreen" 
        component={SignUpScreen} screenOptions={{headerShown: true,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
