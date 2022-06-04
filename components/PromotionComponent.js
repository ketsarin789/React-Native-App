import React, { Component } from "react";
import { ScrollView, Card, View, Image, Text, StyleSheet, Button } from "react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";
import { PROMOTION } from "../shared/promotion";

function RenderPromotion(props) {
  const promotion = props;
  if (promotion) {
    return (
      <View>
        <Image 
        source={require("./images/Thai-Tea.jpg")} style={styles.picture}/>
        <Text style={styles.text}>$2 off for Thai Ice Tea</Text>
        <Button 
          title="Add To Cart"
          style={{margin: 40}}
        />
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

const styles = StyleSheet.create({
  
     picture: {
      alignItems:'center',
       flex: 1,
      flexDirection:'row',
       margin: 20,
       width: 200
      
    },
    text: {
      justifyContent: 'flex-end',
      margin: 10,
      fontSize: 30
    }
   
  })
export default Promotions;
