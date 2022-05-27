import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { TEA } from "../shared/tea";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tea: TEA,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("TeaInfo", { teaId: item.id })}
          leftAvatar={{ source: require("./images/Black-Tea-Latte.png") }}
        />
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

export default Directory;

//onPress={() => props.onPress(item.id)}
