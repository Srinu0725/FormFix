import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Guest: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface LoginScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground source={require("./assets/image1.jpg")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.tagline}>BETTER SPORTS THROUGH BETTER SCIENCE</Text>
        <Text style={styles.title}>FormFix.AI</Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestButton} onPress={() => navigation.navigate("Guest")}>
          <Text style={styles.guestText}>Continue as a Guest</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better visibility
  },
  tagline: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#6A008F",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  guestButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  guestText: {
    color: "white",
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: "#008F6A",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  signupText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
