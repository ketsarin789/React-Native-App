import React from "react";
import { View, Image, ScrollView, Text, StyleSheet } from "react-native";
import { SearchBar, Card } from "react-native-elements";

//  import React, { Component } from "react";
//  import { View, Text } from "react-native"

//  class Home extends Component {
//    static navigationOptions = {
//      title: "Homes",
//    }
//    render() {
//      return (
//        <View>
//          <Text>Home Component</Text>
//        </View>
//      );
//    }

//  export default Home

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  static navigationOptions = {
    title: "Welcome to My App",
  };
  updateSearch = (searchTerm) => {
    this.setState({ search: searchTerm });
  };
  render() {
    const { search } = this.state;
    return (
      <ScrollView>
        <View style={{ marginTop: 0, color: "#fff" }}>
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        <View style={{ marginTop: 0 }}>
          <Image
            source={{
              uri: "https://i0.wp.com/cupcommunity.com/wp-content/uploads/2021/04/YiFang-Taiwan-Fruit-Tea-Best-Sellers-Brown-Sugar-Pearl-Milk-Yi-Fang-Signature-Fruit-Tea-and-Brown-Sugar-Pearl-Tea-Latte.jpg?fit=1200%2C1200&ssl=1",
            }}
            style={{ width: "100%", height: 200 }}
          />
        </View>
      </ScrollView>
    );
  }
}
