import React, { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import styles from '../styles';
import TransactionForm from './TransactionForm';

interface Transaction {
    id: number;
    description: string;
    amount: number;
    date: Date;
}

export default function TransactionView() {
    // Sample data for past transactions
    const [transactions, setTransactions] = useState<Transaction[]>([
        { id: 1, description: 'Transaction 1', amount: 100, date: new Date('2024-01-29') },
        { id: 2, description: 'Transaction 2', amount: 200, date: new Date('2024-01-28') },
        { id: 3, description: 'Transaction 3', amount: 300, date: new Date('2024-01-27') },
    ]);

    const remainingBalance = () => {
        // Implement your remaining balance logic here
        // sum up total transactions
        // subtract from salary
        // return remaining balance
    };

    const renderTransactionItem = ({ item }: { item: Transaction }) => (
        <View style={styles.transactionContainer}>
            <Text>{item.description}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.date.toDateString()}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Remaining Salary</Text>
                {/*insert remaining salary balance here from the function above*/}
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Add Transaction</Text>
                    <TransactionForm />
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Past Transactions</Text>
                    {transactions.map((transaction) => (
                        <View key={transaction.id} style={styles.transactionContainer}>
                            <Text>{transaction.description}</Text>
                            <Text>${transaction.amount}</Text>
                            <Text>{transaction.date.toDateString()}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
