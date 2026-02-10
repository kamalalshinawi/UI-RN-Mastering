import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s,verticalScale } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";

const SocialContactUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.ContactText}>Contact Us</Text>
      <View style={styles.Socialcontainer} >
        <Text style={styles.textSocial}>Social Media Platforms </Text>
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
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
  Socialcontainer:{
    backgroundColor: "#F5F5FA",
    borderRadius: s(15), 
    paddingHorizontal: s(20),
    paddingVertical: verticalScale(20),
    marginTop: verticalScale(17),

  },
  textSocial:{
    fontWeight: "semibold",
    fontSize: s(16),
  },
  ContactText:{
    marginTop: verticalScale(20),
    fontWeight: "semibold",
    fontSize: s(38),
  }
});
