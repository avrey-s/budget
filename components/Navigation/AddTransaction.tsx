import { View } from "react-native";
import React from "react";
import { NewChargePropsType } from "../Types/typeconfig";

import NewTransaction from "../inputs/NewTransaction";
import styles from "../Styles/styles";

const AddTransaction = (props: NewChargePropsType) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View>
        <NewTransaction />
      </View>
    </View>
  );
};

export default AddTransaction;
