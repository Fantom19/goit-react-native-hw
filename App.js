import { StyleSheet } from "react-native";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    // <LoginScreen />
    <RegistrationScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
