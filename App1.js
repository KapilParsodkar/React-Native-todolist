import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ProgreeviewIOS,
  Image,
  TouchableOpacity,
} from "react-native";

import icon from "./assets/icon.png";

export default function App1() {
  return (
    <View style={{ padding: 50 }}>
      <Text style={styles.textstyles}>Hello world</Text>
      <ActivityIndicator size="large" color="#61dfbb"></ActivityIndicator>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqt_gHcmf_c1QAAoPcT_aqtUt0ExCV4g3bg&usqp=CAU",
        }}
        style={{ width: 305, height: 159 }}
      />
      <TouchableOpacity activeOpacity={0.5}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textstyles: {
    marginTop: 50,
    marginLeft: 50,
  },
});
