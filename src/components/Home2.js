// ./src/components/Home2.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>홈2 화면 입니다.</Text>
      <Button title="홈2 버튼" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home2;