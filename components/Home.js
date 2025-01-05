import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>React Navigation</Text>

      <Text style={styles.p}>
        Routing and navigation for React Native and Web apps.
      </Text>

      <Image
        source={require("../assets/react-navigation.png")}
        style={styles.image}
      />

      <Text style={styles.h3}>Easy to Use</Text>
      <Text style={styles.p}>
        Start quickly with built-in navigators that deliver a seamless
        out-of-the-box experience.
      </Text>

      <Text style={styles.h3}>Components built for iOS and Android</Text>
      <Text style={styles.p}>
        Platform-specific look-and-feel with smooth animations and gestures.
      </Text>

      <Button
        icon="book-open-variant"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("about")}
      >
        About Us
      </Button>
    </View>
  );
};

export default Home;

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
