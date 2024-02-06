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
    // Sample data for past transactions remove this and add your logic to display the data from db
    const [transactions, setTransactions] = useState<Transaction[]>([
        /* pass in your transactions here */
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
