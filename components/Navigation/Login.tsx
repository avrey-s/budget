import React, { useState, useContext } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStackPropsType, UserLogin } from '../../Types/typeconfig';
import ThemeContext from '../../theme/ThemeContext';
import LightStyles from '../Styles/LightStyles';
import DarkStyles from '../Styles/DarkStyles';

const Login = (props: AuthStackPropsType) => {
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? LightStyles : DarkStyles;

  const goToRegistration = () => {
    navigation.push('Registration');
  };

  const [authForm, setAuthForm] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = async () => {
    if (!authForm.email) {
      Alert.alert('Email Error', 'You must include an email');
      return;
    }

    if (!authForm.password) {
      Alert.alert('Password Error', 'You must include a password');
      return;
    }
    try {
      const getUsers = await AsyncStorage.getItem('users');

      const parsedUsers = (JSON.parse(getUsers ?? '[]') as UserLogin[]) ?? ([] as UserLogin[]);

      const checkLogin = parsedUsers.find(
        (users: UserLogin) => users.email === authForm.email && users.password === authForm.password
      );

      if (!checkLogin) {
        Alert.alert('Login error', 'Try again');

        setAuthForm({
          email: '',
          password: '',
        });
        return;
      }
      await AsyncStorage.setItem('loggedIn', 'true');
      const userLoggedIn = await AsyncStorage.getItem('loggedIn');
      const loggedInParsed = JSON.parse(userLoggedIn ?? 'false') as boolean;
      setLoggedIn(loggedInParsed);
      navigation.push('Home');
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]} 
          placeholderTextColor="#999" 
          placeholder="Email"
          value={authForm.email}
          onChangeText={(text) =>
            setAuthForm((prevState: UserLogin) => ({
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
          placeholder="Password"
          value={authForm.password}
          onChangeText={(text) =>
            setAuthForm((prevState: UserLogin) => ({
              ...prevState,
              password: text,
            }))
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={goToRegistration}>
        <Text style={styles.registerButtonText}>Need to Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
