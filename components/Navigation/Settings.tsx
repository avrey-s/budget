import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { SettingsPropsType } from "../Types/typeconfig";
import styles from "../Styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = (props: SettingsPropsType) => {
  const { navigation } = props;

  const handleChangeEmail = () => {
    // write the logic to change email
  };

  const handleDeleteAccount = () => {
    // write the logic to delete account
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem("loggedIn", "false");
    await AsyncStorage.removeItem("userData");
    navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.buttonblue} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
