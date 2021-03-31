// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import NewsDetails from './app/NewsDetails'

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//        <NewsDetails/>
//       </View>
//     )
//   }
// }


import React, { Component } from "react";
import { Provider } from "react-redux";

import store from './src/store'
import NewsList from "./src/NewsList";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewsList/>
      </Provider>

    )
  }
}
