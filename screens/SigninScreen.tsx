import { View, Text, StyleSheet } from "react-native";

export default function Signin() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Signin</Text>
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
});
