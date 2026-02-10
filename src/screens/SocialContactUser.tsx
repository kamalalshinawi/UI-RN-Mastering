import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { verticalScale } from "react-native-size-matters";

const SocialContactUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
    </View>
  );
};

export default SocialContactUser;

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(17),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
});
