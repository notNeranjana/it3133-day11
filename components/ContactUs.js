import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { useState } from "react";

const ContactUs = () => {
  const navigation = useNavigation();

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = () => {
    if (data.name === "" || data.email === "" || data.message === "") {
      alert("Please fill all fields");
      return;
    }

    navigation.navigate("thanks", { data });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Contact Us</Text>

      <Text style={styles.p}>
        You can contact us by filling the form below. We will get back to you
        soon.
      </Text>

      <TextInput
        mode="outlined"
        label="Name"
        placeholder="John Doe"
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
      />

      <TextInput
        mode="outlined"
        label="Email"
        placeholder="john@example.com"
        value={data.email}
        onChangeText={(text) => setData({ ...data, email: text })}
      />

      <TextInput
        mode="outlined"
        label="Message"
        placeholder="Your message here"
        value={data.message}
        onChangeText={(text) => setData({ ...data, message: text })}
        multiline={true}
        numberOfLines={5}
      />

      <Button
        icon="email"
        mode="outlined"
        onPress={submitForm}
        style={{ marginTop: 8 }}
      >
        Submit
      </Button>

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

export default ContactUs;

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
