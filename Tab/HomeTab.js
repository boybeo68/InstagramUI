import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import styles from './styles';

export default class HomeTab extends Component {
  render() {
    return (
      <View >
          <Text>
              Home tab
          </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center'
    }
});