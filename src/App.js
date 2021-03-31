// import React, { Component } from "react";
// import { Provider } from "react-redux";

// import store from "./store";
// import Home from "./Home";

// export default () =>
//   <Provider store={store}>
//     <Home />
//   </Provider>;
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
