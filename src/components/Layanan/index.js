import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { IconBooking, IconJoinTeam, IconLangganan } from "../../assets";
import { WARNA_SEKUNDER, WARNA_UTAMA } from "../../utils/constants";

const Layanan = ({ tittle, active, onPress }) => {
  const Icon = () => {
    if (tittle === "Paket Langganan") return <IconLangganan />;
    if (tittle === "Booking Lapangan") return <IconBooking />;
    if (tittle === "Join Team") return <IconJoinTeam />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.text(active)}>{tittle.replace(" ", "\n")}</Text>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  container: (active) => ({
    alignItems: "center",
    backgroundColor: active ? WARNA_UTAMA : "white",
    borderRadius: 10,
    padding: 10,
    borderColor: WARNA_SEKUNDER,
    borderWidth: active ? 0 : 2,
  }),
  text: (active) => ({
    color: active ? "white" : WARNA_SEKUNDER,
    textAlign: "center",
    fontWeight: "600",
  }),
  icon: {
    marginTop: -30,
  },
});
