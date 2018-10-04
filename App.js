import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './Screen/MainScreen'

export default class App extends React.Component {
    render() {
        return (
            <AppStactNavigation/>
        );
    }
}
const AppStactNavigation = createStackNavigator({
    Main: {
        screen: MainScreen
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
