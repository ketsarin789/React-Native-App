import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList, Button } from "react-native";
import { Card, Icon } from "react-native-elements";
import { TEA } from "../shared/tea";
import { COMMENTS } from "../shared/comments";

function RenderTea(props) {
  const { tea } = props;

  if (tea) {
    return (
      <View style={{ marginTop: 10 }}>
        <Image
          source={{
            uri: "https://yifangfruitt.com/wp-content/uploads/2019/01/Roselle-Lemonade.png",
          }}
          style={{ width: "100%", height: 500 }}
        />
        <Text style={{ alignSelf: "center", marginTop: 5 }}>Rose Lemonade</Text>
        <Text style={{ alignSelf: "center", marginTop: 5 }}>$6.95</Text>
        <Icon
          name={props.favorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() =>
            props.favorite
              ? console.log("Already set as a favorite")
              : props.favorite()
          }
        />
        <Button
          title="Add To Cart"
          color="#5637DD"
          style={{ margin: 40, width: 30 }}
        />
      </View>
    );
  }
  return <View />;
}

function RenderComment({ comments }) {
  const renderCommentItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text
          style={{ fontSize: 12 }}
        >{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };
  return (
    <Card title="Comments">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
}

class TeaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tea: TEA,
      comments: COMMENTS,
      favorite: false,
    };
  }
  markFavorite() {
    this.setState({ favorite: true });
  }
  static navigationOptions = {
    title: "Tea Information",
  };
  render() {
    const teaId = this.props.navigation.getParam("teaId");
    const tea = this.state.tea.filter((tea) => tea.id === teaId)[0];
    const comments = this.state.comments.filter(
      (comment) => comment.teaId === teaId
    );
    return (
      <ScrollView>
        <RenderTea
          tea={tea}
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
        <RenderComment comments={comments} />
      </ScrollView>
    );
  }
}

export default TeaInfo;
