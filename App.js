import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { i18n } from '@lingui/core';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{i18n._('Maximum of {num} items can be selected', { num: 10 })}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
