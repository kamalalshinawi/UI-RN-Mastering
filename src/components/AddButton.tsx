import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const AddButton = () => {
  return (
    <View style={styles.container}>
      <Entypo name="plus" size={24} color="#FF7622" />
      <Text
        style={{
          color: "#FF7622",
          fontSize: s(14),
          fontWeight: "bold",
        }}
      >
        Add New
      </Text>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    height: vs(60),
    width: s(300),
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderRadius: s(10),
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(15),
    borderColor: "#F0F5FA",
    flexDirection: "row",
  },
});
