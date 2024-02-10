import { View, Text } from "react-native";
import React from "react";
import { AppStackPropsType } from "../Others/typeconfig";

const Home = (props: AppStackPropsType) => {
  const { navigation } = props;

  const Login = () => {
    navigation.push("Home");
  };

  return (
    <View>
      <Text>success at home!</Text>
    </View>
  );
};

export default Home;
