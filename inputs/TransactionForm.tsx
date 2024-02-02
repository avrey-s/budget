import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles';

export default function TransactionForm() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleDatePress = () => {
        if (Platform.OS === 'ios'){
            setShowDatePicker(true);
        }
        else {
            setShowDatePicker(true);
        }
    };

    const handleTransaction = () => {
        // Implement your transaction logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Description"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setAmount}
                    value={amount}
                    placeholder="Amount"
                />
            </View>
                <TouchableOpacity
    style={styles.inputContainer}
    onPress={handleDatePress}
>
    <Text style={styles.input}>
        {date.toDateString()}
    </Text>
</TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={handleTransaction}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
