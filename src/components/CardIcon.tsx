import { StyleSheet, Text, View } from "react-native";
import { vs, s } from "react-native-size-matters";
import { CardLogo } from "../assets/Icons";
import LottieView from "lottie-react-native";

import React from "react";

const CardIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.CardLogo}>
        {/* <CardLogo /> */}
        <LottieView
          autoPlay
          style={{
            width: s(250),
            height: vs(150),
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/CardAnimation.json")}
        />
      </View>
      <Text style={styles.contentOne}>No master card added</Text>
      <View style={styles.contText}>
        <Text style={styles.contentTwo}>
          You can add a mastercard and save it for later
        </Text>
      </View>
    </View>
  );
};

export default CardIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    borderRadius: s(15),
    // marginHorizontal: s(16),
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(25),
  },
  CardLogo: {
    marginTop: vs(25),
  },
  contentOne: {
    color: "#32343E",
    fontSize: s(16),
    fontWeight: "bold",
    marginTop: s(18.8),
  },
  contentTwo: {
    color: "#2D2D2D",
    fontSize: s(15),
    fontWeight: "regular",
  },
  contText: {
    marginBottom: vs(12),
    marginTop: vs(2),
    height: vs(61),
    width: s(220),
    justifyContent: "center",
    alignItems: "center",
  },
});
