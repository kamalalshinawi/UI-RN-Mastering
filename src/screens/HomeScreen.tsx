import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTap from "../components/TopTap";
import MediationCard from "../components/MediationCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meditations</Text>
      <Text style={styles.loremtext}>Lorem Ipsum is simply dummy text</Text>
      <TopTap />

      <MediationCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(20),
    paddingHorizontal: s(17),
    // flexDirection: "row",
  },
  text: {
    fontWeight: "semibold",
    color: "#1D150F",
    fontSize: s(20),
    marginBottom: vs(10),
  },
  loremtext: {
    fontSize: s(14),
    fontFamily: "Montserrat",
    color: "#2C2016",
    marginBottom: vs(16),
  },
});
