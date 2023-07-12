import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [state, setState] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function keyboardHide() {
    setActiveInput(null);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../images/bg.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapper}>
              <View style={styles.form}>
                <Text style={styles.title}>Регистрация</Text>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      activeInput === "login" && styles.activeInput,
                    ]}
                    placeholder="Логин"
                    value={state.login}
                    onFocus={() => setActiveInput("login")}
                    onBlur={() => setActiveInput(null)}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[
                      styles.input,
                      activeInput === "email" && styles.activeInput,
                    ]}
                    keyboardType="email-address"
                    placeholder="Адрес электронной почты"
                    value={state.email}
                    onFocus={() => setActiveInput("email")}
                    onBlur={() => setActiveInput(null)}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[
                      styles.input,
                      activeInput === "password" && styles.activeInput,
                    ]}
                    secureTextEntry={true}
                    placeholder="Пароль"
                    value={state.password}
                    onFocus={() => setActiveInput("password")}
                    onBlur={() => setActiveInput(null)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Text style={styles.textPassword}>Показать</Text>
                </View>
                <View style={styles.imageWrapper}>
                  <Ionicons name="add" size={30} style={styles.addIcon} />
                </View>
              </View>
            </View>

            <View style={styles.registrationWrapper}>
              <View style={styles.registration}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={keyboardHide}
                >
                  <Text style={styles.textButton}>Зарегистрироваться</Text>
                </TouchableOpacity>

                <Text style={styles.textLink}>Уже есть аккаунт? Войти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginHorizontal: 16,
    paddingBottom: 32,
  },
  inputWrapper: {
    marginTop: 16,
  },
  imageWrapper: {
    position: "absolute",
    left: "35%",
    top: "-32%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addIcon: {
    position: "absolute",
    left: "87%",
    top: "65%",
    width: 25,
    height: 25,
    color: "#FF6C00",
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    color: "#212121",
  },
  activeInput: {
    borderWidth: 2,
    borderColor: "#FF6C00",
    backgroundColor: null,
  },
  textPassword: {
    position: "absolute",
    top: "35%",
    left: "78%",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  textLink: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  registrationWrapper: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 111,
  },
  registration: {
    marginHorizontal: 16,
  },
});

export default RegistrationScreen;
