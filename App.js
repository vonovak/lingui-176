import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withI18n } from '@lingui/react';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{this.props.i18n._('Maximum of {num} items can be selected', { num: 10 })}</Text>
      </View>
    );
  }
}

export default withI18n()(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
