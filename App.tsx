import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import {RegistrationForm, LoginForm, SalaryForm, TransactionView, TransactionForm, AccountSettings} from './inputs';


export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm/>
      <StatusBar style="auto" />
    </View>
  );
}


