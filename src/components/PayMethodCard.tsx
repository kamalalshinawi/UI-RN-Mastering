import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { MethodIcon } from "../assets/Icons";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const PayMethodCard = ({ isSelected = false }) => {
  return (
    <View style={{ width: s(85) }}>
      {isSelected && (
        <View style={styles.check}>
          <Entypo name="check" size={12} color="white" />
        </View>
      )}
      <View style={[styles.MethodCard, isSelected && styles.selected]}>
        <MethodIcon />
      </View>
      <Text style={styles.TextMethod}>Cash</Text>
    </View>
  );
};

export default PayMethodCard;

const styles = StyleSheet.create({
  MethodCard: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  TextMethod: {
    // marginStart: s(27),
    textAlign: "center",
    marginTop: vs(4),
    fontSize: s(14),
    fontWeight: "regular",
  },
  selected: {
    backgroundColor: "#fff",
    borderColor: "#FF7622",
    borderWidth: 2,
    borderRadius: s(12),
  },
  check: {
    height: vs(24),
    width: s(24),
    backgroundColor: "#FF7622",
    borderRadius: s(20),
    borderWidth: 2,
    borderColor: "#fff",
    position: "absolute",
    top: vs(-10),
    right: s(1),
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
