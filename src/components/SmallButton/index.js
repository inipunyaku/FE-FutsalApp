import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { WARNA_SEKUNDER, WARNA_UTAMA } from "../../utils/constants";

const SmallButton = ({ text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmallButton;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WARNA_UTAMA,
    padding: 5,
    height: windowHeight * 0.03,
    borderRadius: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 10,
    textAlign: "center",
  },
});
