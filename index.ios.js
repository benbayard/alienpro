/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  NavigatorIOS,
  Linking,
  TouchableHighlight
} from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import {
  App
} from "./common/src/components";

import { fetchPosts } from "./common/src/actions";

import {
  alienProApp
} from "./common/src/reducers";

const store = createStore(
  alienProApp,
  applyMiddleware(thunk)
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

class AlienPro extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          style={styles.wrapper}
          initialRoute={{
            component: App,
            title: 'Welcome to AlienPro',
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AlienPro', () => AlienPro);
