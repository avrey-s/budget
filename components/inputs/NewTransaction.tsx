import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Transactions, IncomeOrCharge } from "../Types/typeconfig";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "../Styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-modern-datepicker";

//input including {cost} and {charge or income}
//button to take you to form that uses values
//{$amount}+{charge or income} and also allows for name of transaction
//and a more defined description all saved as an array to be viewed
//visible as a touchable opacicity that opens transaction in seperate navigation stack
//dependent on transaction pressed

const NewTransaction = () => {
  const [transactionForm, setTransactionForm] = useState<Transactions>({
    id: 0,
    cost: "",
    posNeg: "",
    date: "",
    description: "",
  });

  //for selectlist
  const [selected, setSelected] = React.useState("");
  const incomeOrCharge: IncomeOrCharge = [
    { key: "income", value: "Income" },
    { key: "charge", value: "Charge" },
  ];

  const setNewId = async () => {
    const getLastId = await AsyncStorage.getItem("Transactions");
    if (getLastId !== null) {
      // Parse the JSON string to convert it back to an array of objects

      const parsedId = JSON.parse(getLastId);

      // Check if the array is not empty
      if (parsedId.length > 0) {
        // Find the maximum ID in the array
        const findMaxId = Math.max(
          ...parsedId.map((obj: Transactions, {}) => obj.id)
        );

        // Filter objects with the maximum ID
        const maxId: number = parsedId.filter(
          (obj: Transactions) => obj.id === findMaxId
        );

        //add one for new transactions to have unique IDs
        const newId = maxId + 1;

        setTransactionForm((prevState: Transactions) => ({
          ...prevState,
          id: newId, // Set the cost to an empty string
        }));
      }
    } else {
      // Handle empty array case
      console.log("Array is empty");
      return null;
    }
  };
  // setPosNeg to change cost to neg or positive, and save that to cost
  const setPosNeg = (posNeg: string) => {
    if (posNeg === "Income") {
      setTransactionForm((prevState: Transactions) => ({
        ...prevState,
        posNeg: posNeg,
      }));
    } else if (posNeg === "Charge") {
      setTransactionForm((prevState: Transactions) => ({
        ...prevState,
        posNeg: posNeg,
      }));
    } else {
      console.log("Cost Error");
    }
  };

  const toNum = async (value: string) => {
    // Check if the value is empty, if so, set the cost to an empty string
    if (!value.trim()) {
      setTransactionForm((prevState: Transactions) => ({
        ...prevState,
        cost: "", // Set the cost to an empty string
      }));
      return;
    }

    const costValue: number = parseFloat(value);
    if (transactionForm.posNeg === "Charge") {
      costValue * -1;
    } else if (transactionForm.posNeg === "Income") {
      costValue * 1;
    }
    // Check if the parsed value is not a number
    if (isNaN(costValue)) {
      Alert.alert("NaN Error", "Not a number");
      console.log("NaN error");
      // Handle the case where the value cannot be parsed as a number
      return;
    }

    // Convert the cost value to a string and set it to the state
    setTransactionForm((prevState: Transactions) => ({
      ...prevState,
      cost: costValue.toString(),
    }));
  };

  const [open, setOpen] = useState(false);

  const toggleCalendar = () => {
    setOpen(!open);
  };

  //to convert selection from date picker into {transactionForm:date} value
  const setSelectedDate = (dateString: string) => {
    setTransactionForm((prevState: Transactions) => ({
      ...prevState,
      date: dateString,
    }));
  };

  const setDescription = (newDescription: string) => {
    setTransactionForm((prevState: Transactions) => ({
      ...prevState,
      description: newDescription,
    }));
  };

  //When all info is collected, it can be saved via async storage
  const SubmitTransaction = async () => {
    const getTransactions = await AsyncStorage.getItem("Transactions");
    const parsedTransactions =
      (JSON.parse(getTransactions ?? "[]") as Transactions[]) ??
      ([] as Transactions[]);

    if (!transactionForm.cost) {
      Alert.alert("Cost Not Set, #149", "You must include cost");
      return;
    }

    toNum(transactionForm.cost);

    if (!transactionForm.posNeg) {
      Alert.alert(
        "Income or Charge Error, #147",
        "You must select if transaction is Income, or a Charge"
      );
      return;
    }
    if (!transactionForm.date) {
      Alert.alert("Date Error, #153", "You must select a date");
      return;
    } else {
      const newTransactions = [...parsedTransactions];
      newTransactions.push(transactionForm);
      await setNewId();
      const setNewTransaction = await AsyncStorage.setItem(
        "Transactions",
        "newTransactions"
      );

      console.log(newTransactions);
    }
  };

  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.newTransaction}>
        <View style={styles.posNegBox}>
          <SelectList
            boxStyles={{ borderColor: "transparent" }}
            dropdownStyles={{ backgroundColor: "gray" }}
            dropdownItemStyles={{ marginHorizontal: 10 }}
            dropdownTextStyles={{ color: "white" }}
            placeholder="+/-"
            save="value"
            setSelected={(key: string) => setSelected(key)}
            data={incomeOrCharge}
            onSelect={() => setPosNeg(selected)}
          />
        </View>
        <View style={styles.costBox}>
          <TextInput
            style={styles.input}
            placeholder={"1.00"}
            keyboardType="decimal-pad"
            value={transactionForm.cost}
            onChangeText={(text) =>
              setTransactionForm((f) => ({ ...f, cost: text }))
            }
          />
        </View>
      </View>
      <View style={styles.dateBox}>
        <View>
          <TouchableOpacity onPress={toggleCalendar}>
            <Text>{transactionForm.date || "Select Date"}</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker mode="calendar" onDateChange={setSelectedDate} />
              <TouchableOpacity onPress={toggleCalendar}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={SubmitTransaction}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionBox}>
        <TextInput
          style={styles.input}
          placeholder={"Description"}
          value={transactionForm.description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
    </View>
  );
};

export default NewTransaction;
