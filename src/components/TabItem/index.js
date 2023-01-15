import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { WARNA_SEKUNDER, WARNA_UTAMA } from "../../utils/constants";
import {
  IconHome,
  IconHomeActived,
  IconField,
  IconFieldActived,
  IconUser,
  IconUserActived,
} from "../../assets";

const TabItem = ({ label, isFocused, onLongPress, onPress }) => {
  let Icon = () => {
    if (label === "Home") {
      return isFocused ? <IconHomeActived /> : <IconHome />;
    }
    if (label === "Jadwal") {
      return isFocused ? <IconFieldActived /> : <IconField />;
    }
    if (label === "Akun") {
      return isFocused ? <IconUserActived /> : <IconUser />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}
    >
      <Icon />
      {isFocused && <Text style={styles.text}>{label.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    padding: 5,
  },
  containerFocus: {
    flexDirection: "row",
    alignContent: "center",
    padding: 5,
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 10,
  },
  text: {
    color: WARNA_UTAMA,
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "600",
  },
});
