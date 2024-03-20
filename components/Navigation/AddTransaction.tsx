import { View, TextInput, Text, TouchableOpacity, Modal, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { Transactions, IncomeOrCharge, NewChargePropsType } from "../../Types/typeconfig";
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-modern-datepicker";
import ThemeContext from '../../theme/ThemeContext';
import LightStyles from '../Styles/LightStyles';
import DarkStyles from '../Styles/DarkStyles';

const AddTransaction = (props: NewChargePropsType) => {
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? LightStyles : DarkStyles;

  const [transactionForm, setTransactionForm] = useState<Transactions>({
    id: 0,
    cost: "",
    posNeg: "",
    date: "",
    description: "",
  });

  const [selected, setSelected] = useState("");
  const incomeOrCharge: IncomeOrCharge = [
    { key: "income", value: "Income" },
    { key: "charge", value: "Charge" },
  ];

  const setNewId = async () => {
    const getLastId = await AsyncStorage.getItem("Transactions");
    if (getLastId !== null) {
      const parsedId = JSON.parse(getLastId);

      if (parsedId.length > 0) {
        const findMaxId = Math.max(
          ...parsedId.map((obj: Transactions) => obj.id)
        );
        const maxId: number = parsedId.filter(
          (obj: Transactions) => obj.id === findMaxId
        );
        const newId = maxId + 1;

        setTransactionForm((prevState: Transactions) => ({
          ...prevState,
          id: newId,
        }));
      }
    } else {
      console.log("Array is empty");
      return null;
    }
  };

  const setPosNeg = (posNeg: string) => {
    setTransactionForm((prevState: Transactions) => ({
      ...prevState,
      posNeg: posNeg,
    }));
  };

  const toNum = async (value: string) => {
    if (!value.trim()) {
      setTransactionForm((prevState: Transactions) => ({
        ...prevState,
        cost: "",
      }));
      return;
    }

    let costValue: number = parseFloat(value);
    if (transactionForm.posNeg === "Charge") {
      costValue *= -1;
    } else if (transactionForm.posNeg === "Income") {
      costValue *= 1;
    }

    if (isNaN(costValue)) {
      Alert.alert("NaN Error", "Not a number");
      console.log("NaN error");
      return;
    }

    setTransactionForm((prevState: Transactions) => ({
      ...prevState,
      cost: costValue.toString(),
    }));
  };

  const [open, setOpen] = useState(false);

  const toggleCalendar = () => {
    setOpen(!open);
  };

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
        JSON.stringify(newTransactions)
      );

      console.log(newTransactions);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SelectList
          boxStyles={{ borderColor: "transparent" }}
          dropdownStyles={{ backgroundColor: theme === 'light' ? 'white' : 'black' }}
          dropdownItemStyles={{ marginHorizontal: 10 }}
          dropdownTextStyles={{ color: theme === 'light' ? 'black' : 'white' }}
          placeholder="+/-"
          save="value"
          setSelected={(key: string) => setSelected(key)}
          data={incomeOrCharge}
          onSelect={() => setPosNeg(selected)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]} 
          placeholderTextColor="#999"
          placeholder={"1.00"}
          keyboardType="decimal-pad"
          value={transactionForm.cost}
          onChangeText={(text) =>
            setTransactionForm((f) => ({ ...f, cost: text }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={toggleCalendar}>
        <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>{transactionForm.date || "Select Date"}</Text>
        </TouchableOpacity>

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
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: theme === 'light' ? 'black' : 'white' }]}
          placeholderTextColor="#999"
          placeholder={"Description"}
          value={transactionForm.description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={SubmitTransaction}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTransaction;
