import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface Props {
  name: string;
}

const Counter: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <Text style={styles.title}>I have been clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Click Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
});

export default Counter;
