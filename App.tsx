import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StackScreens } from './Types/typeconfig';
import Registration from './components/Navigation/Registration';
import Login from './components/Navigation/Login';
import Home from './components/Navigation/Home';
import AddTransaction from './components/Navigation/AddTransaction';
import Settings from './components/Navigation/Settings';
import LightStyles from './components/Styles/LightStyles';
import DarkStyles from './components/Styles/DarkStyles';
import ThemeContext, { ThemeProvider } from './theme/ThemeContext';

const Stack = createNativeStackNavigator<StackScreens>();

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = theme === 'light' ? LightStyles : DarkStyles;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerRight: () => (
            <Ionicons
              name={theme === 'light' ? 'sunny' : 'moon'}
              color={theme === 'light' ? 'black' : 'white'}
              size={20}
              onPress={toggleTheme}
              style={{ marginRight: 15 }}
            />
          ),
          headerStyle: {
            backgroundColor: theme === 'light' ? 'white' : '#3d4045',
          },
          headerTitleStyle: { color: theme === 'light' ? 'black' : 'white' },
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
