import { Alert, TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  RegistrationStackPropsType,
  NewRegistration,
} from "../../Types/typeconfig";
import ThemeContext from '../../theme/ThemeContext';
import LightStyles from '../Styles/LightStyles';
import DarkStyles from '../Styles/DarkStyles';

const Registration = (props: RegistrationStackPropsType) => {
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? LightStyles : DarkStyles;

  const goToLogin = () => {
    navigation.push("Login");
  };

  const [registrationForm, setRegistrationForm] = useState<NewRegistration>({
    username: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = async () => {
    if (!registrationForm.username) {
      Alert.alert("Username Error", "You must have a valid username");
      return;
    }

    if (!registrationForm.email) {
      Alert.alert("Email Error", "You must have a valid email");
      return;
    }

    if (registrationForm.password !== confirmPassword) {
      Alert.alert("Password Error", "You must have matching passwords");
      return;
    }

    const getUsers = await AsyncStorage.getItem("users");

    const parsedusers = JSON.parse(getUsers ?? "[]") as NewRegistration[];

    const checkEmail = parsedusers.find(
      (users: NewRegistration) => users.email === registrationForm.email
    );

    if (checkEmail) {
      Alert.alert("Email Error", "That email is taken, try again.");
      setRegistrationForm({
        username: "",
        email: "",
        password: "",
      });
      return;
    }

    const newUser = [...parsedusers];
    newUser.push(registrationForm);

    Alert.alert("Successful Registration", "You may log in now!");
    await AsyncStorage.setItem("users", JSON.stringify(newUser));
    navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]} 
          placeholderTextColor="#999" 
          placeholder="username"
          value={registrationForm.username}
          onChangeText={(text) =>
            setRegistrationForm((prevState: NewRegistration) => ({
              ...prevState,
              username: text,
            }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]} 
          placeholderTextColor="#999" 
          placeholder="email"
          value={registrationForm.email}
          onChangeText={(text) =>
            setRegistrationForm((prevState: NewRegistration) => ({
              ...prevState,
              email: text,
            }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]} 
          placeholderTextColor="#999" 
          placeholder="password"
          value={registrationForm.password}
          onChangeText={(text) =>
            setRegistrationForm((prevState: NewRegistration) => ({
              ...prevState,
              password: text,
            }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]} 
          placeholderTextColor="#999" 
          placeholder="confirm password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSignUp}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={goToLogin}>
        <Text style={styles.registerButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
