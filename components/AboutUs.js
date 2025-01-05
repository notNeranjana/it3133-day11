import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hello React Navigation</Text>

      <Text style={styles.p}>
        In a web browser, you can link to different pages using an anchor (
        {"<a>"}) tag. When the user clicks on a link, the URL is pushed to the
        browser history stack. When the user presses the back button, the
        browser pops the item from the top of the history stack, so the active
        page is now the previously visited page. React Native doesn't have a
        built-in idea of a global history stack like a web browser does -- this
        is where React Navigation enters the story.
      </Text>

      <Text style={styles.p}>
        React Navigation's native stack navigator provides a way for your app to
        transition between screens and manage navigation history. If your app
        uses only one stack navigator then it is conceptually similar to how a
        web browser handles navigation state - your app pushes and pops items
        from the navigation stack as users interact with it, and this results in
        the user seeing different screens. A key difference between how this
        works in a web browser and in React Navigation is that React
        Navigation's native stack navigator provides the gestures and animations
        that you would expect on Android and iOS when navigating between routes
        in the stack.
      </Text>

      <Button
        icon="home"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("home")}
      >
        Home
      </Button>

      <Button
        icon="phone"
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("contact")}
      >
        Contact Us
      </Button>
    </View>
  );
};

export default About;

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
