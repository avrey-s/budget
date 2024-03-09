import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import styles from "../Styles/LightStyles";
import AddTransaction from "../Navigation/AddTransaction" ;
import { Transactions } from "../../Types/typeconfig";

//Some Minor Adjustments have been made to combine the types
//as well as combine with NewTransaction form.
//This file is not fully done - Avi

export default function TransactionView() {
  // Sample data for past transactions remove this and add your logic to display the data from db
  const [transactions, setTransactions] = useState<Transactions[]>([
    /* pass in your transactions here */
  ]);

  const remainingBalance = () => {
    // Implement your remaining balance logic here
    // sum up total transactions
    // subtract from salary
    // return remaining balance
  };

  const renderTransactionItem = ({ item }: { item: Transactions }) => (
    <View style={styles.transactionContainer}>
      <Text>{item.description}</Text>
      <Text>{item.cost}</Text>
      <Text>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Remaining Salary</Text>
        {/*insert remaining salary balance here from the function above*/}
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Add Transaction</Text>
          {/*<NewTransaction /> - fix this when coding we removed this unnecessary file and combined it in AddTransaction*/}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Past Transactions</Text>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionContainer}>
              <Text>{transaction.description}</Text>
              <Text>${transaction.cost}</Text>
              <Text>{transaction.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
