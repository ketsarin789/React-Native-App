import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Card, Button, SocialIcon, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };
  sendMail() {
    MailComposer.composeAsync({
      recipients: ["campsites@nucamp.co"],
      subject: "Inquiry",
      body: "To whom is may concern",
    });
  }
  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>Fon Tea </Text>
            <Text>Seattle, WA 98001 U.S.A.</Text>

            <Text style={{ marginBottom: 10 }}></Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: kayakfon@gmail.com</Text>
            <Button
              title=" Send Email"
              buttonStyle={{ backgroundColor: "#5637DD", margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>

        <Card>
          <View style={styles.container}>
            <Text
              style={{ fontSize: 20, marginBottom: 20, textAlign: "center" }}
            >
              Different Way to Contact Us
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <SocialIcon
                    type="facebook"
                    onPress={() => {
                      alert("facebook");
                    }}
                  />
                  <Text style={{ textAlign: "center" }}>facebook</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <SocialIcon
                    type="instagram"
                    onPress={() => {
                      alert("instagram");
                    }}
                  />
                  <Text style={{ textAlign: "center" }}>instagram</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <SocialIcon
                    type="linkedin"
                    onPress={() => {
                      alert("linkedin");
                    }}
                  />
                  <Text style={{ textAlign: "center" }}>linkedin</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <SocialIcon
                    type="pinterest"
                    onPress={() => {
                      alert("pinterest");
                    }}
                  />
                  <Text style={{ textAlign: "center" }}>pinterest</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <SocialIcon
                    type="twitter"
                    onPress={() => {
                      alert("twitter");
                    }}
                  />
                  <Text style={{ textAlign: "center" }}>twitter</Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  facebook: {},
});
export default Contact;
