import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';

export default function LoginForm({}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
    };

    const handleRegister = () => {
        // Implement navigation to the registration screen
        //navigation use routing here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Form</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
            >
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
