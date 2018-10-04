import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base'
import {TabNavigator} from 'react-navigation'
// import styles from './styles';

export default class MainScreen extends Component {
    static navigationOptions ={
        headerLeft: <Icon style={{paddingLeft:10}} name='ios-camera-outline'/>,
        title: 'Instagram',
        headerRight:<Icon style={{paddingRight:10}} name='ios-send-outline'/>
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Main screen
                </Text>
            </View>
        );
    }
}
const AppTab = TabNavigator({
   
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});