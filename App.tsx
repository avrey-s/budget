import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AllStacks from "./components/Navigation/AllStacks";

export default function App() {
  return (
    <NavigationContainer>
      <AllStacks />
    </NavigationContainer>
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
