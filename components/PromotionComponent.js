import React, { Component } from "react";
import { ScrollView, Card, View, Image } from "react-native";
import { PROMOTION } from "../shared/promotion";

function RenderPromotion(props) {
  const promotion = props;
  if (promotion) {
    return (
      <View style={{ marginTop: 10 }}>
        <Image source={require("./images/Thai-Tea.jpg")} />
      </View>
    );
  }
}

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: PROMOTION,
    };
  }
  static navigationOptions = {
    title: "Promotions",
  };
  render() {
    const promotionId = this.props.navigation.getParam("promotionId");
    const promotion = this.state.promotions.filter(
      (promotion) => promotion.id === promotionId
    )[0];
    return (
      <ScrollView>
        <RenderPromotion promotion={promotion} />
      </ScrollView>
    );
  }
}
export default Promotions;
