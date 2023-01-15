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
import { WARNA_UTAMA } from "../../utils/constants";

const UpdateScore = ({ klub1, klub2, score1, score2, date }) => {
  const Logo = (klub) => {
    if (klub.klub === "An-Nahl FC")
      return <Image source={LogoAnnahl} style={styles.logo} />;
    if (klub.klub === "Vamos FC")
      return <Image source={LogoVamous} style={styles.logo} />;
    if (klub.klub === "VE FC")
      return <Image source={LogoVeFc} style={styles.logo} />;
    if (klub.klub === "AL FA")
      return <Image source={LogoAwang} style={styles.logo} />;
    if (klub.klub === "Bogor FC")
      return <Image source={LogoBogor} style={styles.logo} />;
    if (klub.klub === "VC FC")
      return <Image source={LogoVictory} style={styles.logo} />;
    return <Image source={LogoVictory} style={styles.logo} />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.match}>
        <View style={styles.box}>
          <Logo klub={klub1} />
          <Text style={styles.text}>{klub1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>
            {score1} : {score2}
          </Text>
        </View>
        <View style={styles.box}>
          <Logo klub={klub2} />
          <Text style={styles.text}>{klub2}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpdateScore;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 15,
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
  match: {
    flexDirection: "row",
  },
  box: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 11,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
    marginBottom: 10,
  },
  score: {
    height: 22,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    position: "relative",
    zIndex: 1,
    marginHorizontal: -15,
  },
  textScore: {
    fontSize: 10,
    fontWeight: "700",
    color: WARNA_UTAMA,
  },
});
