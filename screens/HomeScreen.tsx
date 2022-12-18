import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/burger-bg.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ height: "50%" }}>
          <Text style={{ color: "#fff", fontSize: 62 }}>Burger App</Text>
        </View>
        <View style={{ height: "15%", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={{ color: "#fff", fontSize: 24, textAlign: "center" }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "#fff", fontSize: 24, textAlign: "center" }}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  touchableContainer: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
});
