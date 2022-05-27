import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { TEA } from "../shared/tea";

function RenderTea({ tea }) {
  if (tea) {
    return (
      <Card
        featuredTitle={tea.name}
        image={require("./images/Black-Tea-Latte.png")}
      >
        <Text style={{ margin: 10 }}>{tea.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class TeaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tea: TEA,
    };
  }
  static navigationOptions = {
    title: "Tea Information",
  };
  render() {
    const teaId = this.props.navigation.getParam("teaId");
    const tea = this.state.tea.filter((tea) => tea.id === teaId)[0];
    return <RenderTea tea={tea} />;
  }
}

export default TeaInfo;
