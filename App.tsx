import { StyleSheet, View } from "react-native";
import Counter from "./src/components/Counter";
import CustomTouchPad from "./src/components/CustomTouchPad";
import Separator from "./src/components/Separator";

export default function App() {

  return (
    <View style={styles.container}>
      <Counter name="First" />
      <Separator />
      <Counter name="Second" />
      <Separator />
      <CustomTouchPad />
    </View>
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
