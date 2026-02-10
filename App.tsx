import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./src/screens/IntroScreen";
import SocialContactUser from "./src/screens/SocialContactUser";

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <IntroScreen /> */}
      < SocialContactUser />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
