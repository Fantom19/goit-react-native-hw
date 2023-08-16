import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/Screens/LoginScreen.jsx";
import RegistrationScreen from "./src/Screens/RegistrationScreen.jsx";

export default function App() {
  return (
    <>
      {/* <LoginScreen /> */}
      <RegistrationScreen />
      <StatusBar style="auto" />
    </>
  );
}
