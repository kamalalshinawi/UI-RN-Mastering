import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import { IconCard } from "../assets/Icons";

// interface MediaData {
//   imag: string;
//   text: string;
//   date: string;
// }
const MediationCard = () => {
  return (
    <ImageBackground
      source={require("../assets/james.webp")}
      style={styles.imageContainer}
      imageStyle={styles.imgStyle}
    >
      <View style={styles.overlay} />

      <View style={styles.CardContent}>
        <Text style={styles.content}>Meditations</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconCard />
          <Text style={styles.datetxt}>31st Jan - 09:00 am</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MediationCard;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 12,
    height: vs(150),
    width: s(153),
    overflow: "hidden",
    marginTop: vs(24),
  },
  imgStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  CardContent: {
    position: "absolute",
    bottom: vs(12),
    left: s(10),
  },

  content: {
    fontSize: s(12),
    fontWeight: "semibold",
    color: "#FFFFFF",
  },
  datetxt: {
    color: "#FFFFFF",
    fontSize: s(12),
    fontWeight: "regular",
    marginStart: s(7.7),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgb(0,0,0,0.15)",
  },
});
