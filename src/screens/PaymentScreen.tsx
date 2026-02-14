import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headrcontent}>Payment</Text>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(24),
    marginTop: vs(15),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headrcontent: {
    marginStart: s(18),
    marginBottom: vs(4),
    fontSize: s(17),
    fontWeight: "regular",
  },
});
