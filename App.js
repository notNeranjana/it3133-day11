import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
              headerStyle: { backgroundColor: "#1d1d1d" },
              headerTitleStyle: { color: "#fff" },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name="home"
              component={Home}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen
              name="about"
              component={AboutUs}
              options={{ title: "About Us" }}
            />
            <Stack.Screen
              name="contact"
              component={ContactUs}
              options={{ title: "Contact Us" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
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
