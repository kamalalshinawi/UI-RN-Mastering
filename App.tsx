import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./src/screens/IntroScreen";
import SocialContactUser from "./src/screens/SocialContactUser";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
        {/* <IntroScreen /> */}
        <SocialContactUser />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
