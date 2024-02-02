import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../styles';

//salary form will contain the input for the salary and the date.
export default function SalaryForm() {
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const handleSalary = () => {
        // Implement your salary logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setSalary}
                    value={salary}
                    placeholder="Salary"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setDate}
                    value={date}
                    placeholder="Date"
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSalary}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}