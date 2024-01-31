import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import RegistrationForm from './inputs/RegistartionForm';
import LoginForm from './inputs/LoginForm';
import SalaryForm from './inputs/SalaryForm';
import TransactionView from './inputs/TransactionView';
import TransactionForm from './inputs/TransactionForm';
import AccountSettings from './inputs/AccountSettings';


export default function App() {
  return (
    <View style={styles.container}>
      <AccountSettings/>
      <StatusBar style="auto" />
    </View>
  );
}


