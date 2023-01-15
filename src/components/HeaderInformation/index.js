import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconField, IconUserDefault } from "../../assets";

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <IconUserDefault />
        <View style={styles.textWrapper}>
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.userName}>M Farhan</Text>
        </View>
      </View>
      <View style={styles.jadwalInfo}>
        <View>
          <Text style={styles.jam}>19.00 WIB</Text>
          <Text style={styles.tgl}>Sabtu, 13-01-2023</Text>
        </View>
        <View style={styles.iconJadwal}>
          <IconField />
          <Text style={styles.labelNext}>Next Jadwal</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  userInfo: {
    flexDirection: "row",
  },
  jadwalInfo: {
    flexDirection: "row",
  },
  textWrapper: {
    marginLeft: 9,
  },
  hello: {
    fontSize: 13,
    fontWeight: "200",
  },
  userName: {
    fontSize: 13,
    fontWeight: "600",
  },

  jam: {
    textAlign: "right",
    fontSize: 13,
    fontWeight: "200",
  },
  tgl: {
    textAlign: "right",
    fontSize: 13,
    fontWeight: "600",
  },
  iconJadwal: {
    marginLeft: 8,
    alignItems: "center",
  },
  labelNext: {
    fontSize: 11,
    fontWeight: "200",
  },
});
