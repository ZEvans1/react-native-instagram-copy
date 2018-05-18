import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Register, Login, Camera, Profile } from './components/screens';
import { createSwitchNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';

const Tabs = createMaterialTopTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
})

const IntroStack = createStackNavigator({
    register: Register,
    login: Login
})

const MainStack = createSwitchNavigator({
    intro: IntroStack,
    main: Tabs
})


class InstaClone extends Component {
    render() {
        return(
            <MainStack />
        )
    }
}



export default InstaClone;