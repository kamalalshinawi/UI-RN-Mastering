import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import BackButton from "../components/BackButton";
import { s,verticalScale } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import {FontAwesome,Entypo,FontAwesome6} from "@expo/vector-icons"

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
        <SocialSection title={"Whatsapp"} icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />} />
        <SocialSection title={"Twitter"} icon={<Entypo name="twitter" size={24} color="#178AD9" />} />
        <SocialSection title={"instagram"} icon={<FontAwesome name="instagram" size={24} color="#178AD9" />} />
        <SocialSection title={"Snap Chat"} icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />} />
        <SocialSection title={"Tiktok"} icon={<FontAwesome6 name="tiktok" size={24} color="#178AD9" />}  />
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
