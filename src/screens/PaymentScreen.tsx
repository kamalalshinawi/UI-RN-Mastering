import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import PayMethodCard from "../components/PayMethodCard";
import PaymenyList from "../components/PaymenyList";
import CardIcon from "../components/CardIcon";
import AddButton from "../components/AddButton";
import { s, vs } from "react-native-size-matters";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headrcontent}>Payment</Text>
      </View>
      <PaymenyList />

      <View style={{ paddingHorizontal: s(18) }}>
        <CardIcon />
        <AddButton />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: vs(15),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vs(30),
    paddingHorizontal: s(24),
  },
  headrcontent: {
    marginStart: s(18),
    marginBottom: vs(4),
    fontSize: s(17),
    fontWeight: "regular",
  },
});
