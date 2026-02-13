import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTap from "../components/TopTap";
import MediationCard from "../components/MediationCard";
import { dummyData } from "../data/data";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meditations</Text>
      <Text style={styles.loremtext}>Lorem Ipsum is simply dummy text</Text>
      <TopTap />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MediationCard ImageUrl={item.image} text={item.title} datTime={item.date} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom:vs(125),
        }}
      />
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
