import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// This is the home Screen that will show one button
export default function Timescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Time 20 minuets from now! </Text>
      <Text style={styles.text2}> You need a break from work :D </Text>

      <Button
        onPress={() => navigation.goBack()}
        color="#457fad"
        title="Go back to Mainscreen"
      />

      <Button
        onPress={() => navigation.navigate('Breakscreen')}
        color="#457fad"
        title="Time's  up!"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa7470",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color:"white"
  },
  text2: {
    fontSize: 14,
    color:"white"
  }

});
