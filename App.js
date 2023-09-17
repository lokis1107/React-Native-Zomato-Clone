import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import { BasketContext } from "./Context";

const App = () => {
  return (
    <BasketContext>
      <NavigationContainer>
        <StatusBar hidden />
        <AppNavigation />
      </NavigationContainer>
    </BasketContext>
  );
};

export default App;
