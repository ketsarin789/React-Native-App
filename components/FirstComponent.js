import React, { Component } from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;
const images = [
  "https://images.pexels.com/photos/2437295/pexels-photo-2437295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3136403/pexels-photo-3136403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2965773/pexels-photo-2965773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
export default class FirstPage extends Component {
  render() {
    return (
      <View style={{ marginTop: 10, width, height }}>
        <ScrollView pagingEnabled horizontal style={{ width, height }}>
          {images.map((image, index) => {
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width, height, resizeMode: "contain" }}
            />;
          })}
        </ScrollView>
      </View>
    );
  }
}
