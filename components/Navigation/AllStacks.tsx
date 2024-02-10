import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "../Others/typeconfig";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";

export const Stack = createNativeStackNavigator<StackScreens>();

const AllStacks = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AllStacks;
