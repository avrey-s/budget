import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';

export default function RegistrationForm() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleRegister = () => {
        // Implement your registration logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Form</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(name) => setForm((prevState) => ({ ...prevState, name }))}
                    placeholder="Name"
                />
            </View>
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
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(confirmPassword) => setForm((prevState) => ({ ...prevState, confirmPassword }))}
                    placeholder="Confirm Password"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
