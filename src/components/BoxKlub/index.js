import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import {
  LogoAnnahl,
  LogoAwang,
  LogoBogor,
  LogoVamous,
  LogoVeFc,
  LogoVictory,
} from "../../assets";
import SmallButton from "../SmallButton";

const BoxKlub = ({ klub, statistik }) => {
  const Logo = () => {
    if (klub === "An-Nahl FC")
      return <Image source={LogoAnnahl} style={styles.logo} />;
    if (klub === "Vamos FC")
      return <Image source={LogoVamous} style={styles.logo} />;
    if (klub === "VE FC")
      return <Image source={LogoVeFc} style={styles.logo} />;
    if (klub === "AL FA")
      return <Image source={LogoAwang} style={styles.logo} />;
    if (klub === "Bogor FC")
      return <Image source={LogoBogor} style={styles.logo} />;
    if (klub === "VC FC")
      return <Image source={LogoVictory} style={styles.logo} />;
    return <Image source={LogoVictory} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.text}>{klub}</Text>
      <View style={styles.statistik}>
        <SmallButton text={statistik} />
      </View>
    </TouchableOpacity>
  );
};

export default BoxKlub;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    borderRadius: 10,
    padding: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginBottom: 10,
  },
  logo: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 14,
  },
  statistik: {
    position: "absolute",
    bottom: -10,
  },
});
