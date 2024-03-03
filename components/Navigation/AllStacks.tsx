import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "../Types/typeconfig";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import AddTransaction from "./AddTransaction";
import Settings from "./Settings";

export const Stack = createNativeStackNavigator<StackScreens>();

const AllStacks = () => {
  return (
    <Stack.Navigator initialRouteName={"Login"}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default AllStacks;
