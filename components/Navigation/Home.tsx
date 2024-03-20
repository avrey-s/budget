import { TouchableOpacity, Text, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { AppStackPropsType, RegisteredUser } from "../../Types/typeconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LightStyles from "../Styles/LightStyles";
import DarkStyles from "../Styles/DarkStyles";
import ThemeContext from '../../theme/ThemeContext';


const Home = (props: AppStackPropsType) => {
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? LightStyles : DarkStyles;
  // for retrieving user data:
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<RegisteredUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const userLoggedIn = await AsyncStorage.getItem("loggedIn");
      const userData = await AsyncStorage.getItem("userData");
      const loggedInParsed = JSON.parse(userLoggedIn ?? "true") as boolean;
      const parsedUserData = JSON.parse(userData ?? "{}") as RegisteredUser;

      setLoggedIn(loggedInParsed);
      setUser(parsedUserData);
    };

    getUser();
  }, []);

  const NewTransaction = async () => {
    navigation.push("AddTransaction");
  };

  const Settings = () => {
    navigation.push("Settings");
  };

  //not displaying

  //<View>
  //{user ? (
  //<Text>User logged in as: {user.username}</Text>
  //) : (
  //<Text>success at home!</Text>
  //)}
  //</View>

  return (
    <View style={styles.container}>
  <View>
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.button} onPress={NewTransaction}>
        <Text style={styles.buttonText}>New Transaction</Text>
      </TouchableOpacity>
    </View>
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.buttonblue} onPress={Settings}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>

  );
};

export default Home;
