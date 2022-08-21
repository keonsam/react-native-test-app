import { useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const CustomTouchPad = () => {
  const [touch, setTouch] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{touch}</Text>
      <TouchableHighlight onPress={() => setTouch(touch + 1)}>
        <View style={styles.button}>
          <Text>Touch here</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    padding: 30,
  },
  title: {
    color: "#FF00FF",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default CustomTouchPad;
