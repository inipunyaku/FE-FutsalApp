import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import {
  BoxKlub,
  HeaderInformation,
  Layanan,
  SmallButton,
  UpdateScore,
} from "../../components";
import { ImageBanner } from "../../assets";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layanan: "booking",
    };
  }
  clickLayanan(value) {
    this.setState({
      layanan: value,
    });
  }
  render() {
    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.page}
      >
        <View style={styles.wrapperHeader}>
          <HeaderInformation />
          <Image source={ImageBanner} style={styles.ImageBanner}></Image>
        </View>
        <View style={styles.wrapperLabel}>
          <Text style={styles.label}>
            Mari <Text style={styles.textBold}>Kita Futsal</Text>
          </Text>
          <View style={styles.layanan}>
            <Layanan
              tittle="Paket Langganan"
              onPress={() => this.clickLayanan("paket")}
              active={this.state.layanan === "paket" ? true : false}
            />
            <Layanan
              tittle="Booking Lapangan"
              onPress={() => this.clickLayanan("booking")}
              active={this.state.layanan === "booking" ? true : false}
            />
            <Layanan
              tittle="Join Team"
              onPress={() => this.clickLayanan("join")}
              active={this.state.layanan === "join" ? true : false}
            />
          </View>
        </View>
        <View style={styles.labelSparing}>
          <Text style={styles.label}>
            Pilih Tim <Text style={styles.textBold}>Sparing</Text> Kamu
          </Text>
          <SmallButton text="lihat semua" />
        </View>
        <View style={styles.klub}>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <BoxKlub klub="An-Nahl FC" statistik="WWDDLL" />
              <BoxKlub klub="Vamos FC" statistik="WDDDLL" />
              <BoxKlub klub="VE FC" statistik="DDDLLW" />
              <BoxKlub klub="AL FA" statistik="LLWWDD" />
              <BoxKlub klub="Bogor FC" statistik="DWDWLL" />
              <BoxKlub klub="VC FC" statistik="LLDDWW" />
            </ScrollView>
          </View>
        </View>
        <View style={styles.labelSparing}>
          <Text style={styles.label}>
            Update <Text style={styles.textBold}>Score</Text>
          </Text>
          <SmallButton text="lihat semua" />
        </View>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.score}>
              <UpdateScore
                klub1="An-Nahl FC"
                klub2="Vamos FC"
                score1="5"
                score2="2"
                date="Rabu, 11 January 2022"
              />
              <UpdateScore
                klub1="VC FC"
                klub2="Bogor FC"
                score1="7"
                score2="1"
                date="Kamis, 12 January 2022"
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  wrapperHeader: {
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  ImageBanner: {
    marginTop: windowHeight * 0.016,
    width: "100%",
    height: windowHeight * 0.125,
  },
  label: {
    fontSize: 18,
    fontWeight: "200",
  },
  textBold: {
    fontSize: 18,
    fontWeight: "700",
  },
  wrapperLabel: {
    paddingHorizontal: 30,
    marginTop: 14,
  },
  labelSparing: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 17,
    justifyContent: "space-between",
  },
  layanan: {
    marginTop: windowHeight * 0.035,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  klub: { flexDirection: "row", marginTop: 10 },
  score: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },

  wrapperScroll: {
    paddingHorizontal: 30,
  },
});
