/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

import App from './app';

export const Root = React.createClass({
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
});

AppRegistry.registerComponent('Saitama', () => Root);
