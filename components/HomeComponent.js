import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { TEA } from "../shared/tea";
import { SearchBar, Card, ListItem } from "react-native-elements";
//import { FlatList } from "react-native-gesture-handler";

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
// const { width } = Dimensions.get("window");
// const height = width *100 / 60;
// const images = [
//   'https://i0.wp.com/cupcommunity.com/wp-content/uploads/2021/04/YiFang-Taiwan-Fruit-Tea-Best-Sellers-Brown-Sugar-Pearl-Milk-Yi-Fang-Signature-Fruit-Tea-and-Brown-Sugar-Pearl-Tea-Latte.jpg?fit=1200%2C1200&ssl=1',
//    'https://www.whatsonweibo.com/wp-content/uploads/2018/04/yunying.jpg',
//    'https://media-cdn.tripadvisor.com/media/photo-s/19/ce/f8/a8/yifang.jpg'
// ]

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tea: TEA,
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
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
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
          <Card title="ORDER ONLINE">
            <Text style={{ alignSelf: "center" }}>253-222-5555</Text>
            <Button
              onPress={() => navigate("TeaInfo", { teaId: item.id })}
              title="ORDER NOW"
              style={{ marginTop: 30 }}
              leftAvatar={{ source: require("./images/Black-Tea-Latte.png") }}
            />
          </Card>
        </ScrollView>
      );
    };
    return (
      <FlatList
        data={this.state.tea}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}
