import React, { useContext, useState, PropsWithChildren } from "react";
import { View, Switch, StyleSheet, SafeAreaView } from "react-native";
import ThemeContext from "./ThemeContext";

const ThemeHandler = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log(`Switching theme from ${theme} to ${newTheme}`);
    setTheme(newTheme);
  };

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={theme === "light" ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={theme === "dark"}
          />
        </View>
        {children}
      </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    position: "relative",
    width: 50,
    height: 50,
    right: 0,
    bottom: 0,
    top:40,
    zIndex: 1,
  },
});
export default ThemeHandler;
