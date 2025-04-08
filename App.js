import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CreateDrawerNavigator } from ".@react-navigation/drawer";

import { HomeScreen } from "./pages/home";
import DetailsScreen from "./screens/DetailsScreen";

const Drawer = CreateDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
