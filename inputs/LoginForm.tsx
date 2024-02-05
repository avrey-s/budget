import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';

export default function LoginForm({}) {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleLogin = () => {
        // Implement login functionality here
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
                    onChangeText={(email) => setForm((prevState) => ({ ...prevState, email }))}
                    placeholder="Email"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(password) => setForm((prevState) => ({ ...prevState, password }))}
                    placeholder="Password"
                    secureTextEntry
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
