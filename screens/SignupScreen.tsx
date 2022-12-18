import { View, Text, StyleSheet } from "react-native";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text>Welcomee signup</Text>
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
