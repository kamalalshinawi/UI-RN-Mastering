import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useState } from "react";

const Active_BG = "#75563B";
const Active_txt = "#fff";
const inActive_txt = "#2C2016";
const TopTap = () => {
  type Tabs = string;
  const Tabs: Tabs[] = ["Live", "Reloaded"];
  const [active, setactive] = useState("Live");

  // const BGActive = backgroundColor: "#75563B";
  return (
    <View style={styles.container}>
      {Tabs.map((tabName) => {
        const ifActive = active === tabName;
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              ifActive && { backgroundColor: Active_BG },
            ]}
            onPress={() => setactive(tabName)}
          >
            <Text style={ifActive ? styles.ActiveTxt : styles.inActiveTxt}>
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTap;

const styles = StyleSheet.create({
  container: {
    height: vs(48),
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButton: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
  ActiveTxt: {
    color: Active_txt,
    fontSize: s(14),
    fontWeight: "semibold",
  },
  inActiveTxt: {
    color: inActive_txt,
    fontSize: s(14),
    fontWeight: "semibold",
  },
});
