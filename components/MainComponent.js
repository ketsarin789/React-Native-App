import React, { Component } from "react";
import Home from "./HomeComponent";
//import FirstPage from "./FirstComponent";
import Directory from "./DirectoryComponent";
//import { TEA } from "../shared/tea";
import TeaInfo from "./TeaInfoComponent";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    TeaInfo: { screen: TeaInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#d6832b",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;

//we use before use createApp
// constructor(props) {
//   super(props);
//   this.state = {
//     tea: TEA,
//     selectedTea: null,
//   };
// }
// onTeaSelect(teaId) {
//   this.setState({ selectedTea: teaId });
// }

// use before move to use AppNavigator
// <View style={{ flex: 1 }}>
//       <Directory
//         tea={this.state.tea}
//         onPress={(teaId) => this.onTeaSelect(teaId)}
//       />
//       <TeaInfo
//         tea={
//           this.state.tea.filter((tea) => tea.id === this.state.selectedTea)[0]
//         }
//       />
//     </View>
