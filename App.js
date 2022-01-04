import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import FiveCrowns from "./screens/FiveCrowns";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Five Crowns" component={FiveCrowns} />
      </Drawer.Navigator>
    </ NavigationContainer>
  )
}


export default App;