import { View, Text, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

interface AppState {}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Candidate! 👋</Text>
      <Text>Start create components and edit index.tsx file</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
