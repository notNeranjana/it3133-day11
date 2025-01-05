import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { useState } from "react";

const Thanks = ({ route }) => {
  const navigation = useNavigation();

  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Thank You!</Text>

      <Text style={styles.p}>
        Hello {data?.name}, we have received your message. We will get back to
        to you soon at {data?.email}.
      </Text>

      <Button
        icon="home"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("home")}
      >
        Home
      </Button>
    </View>
  );
};

export default Thanks;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  h1: {
    fontSize: 28,
    fontWeight: 800,
  },
  h3: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 600,
  },
  p: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#4d5072",
  },
  image: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
});
