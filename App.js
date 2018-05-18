import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import firebase from 'react-native-firebase';
import  InstaClone  from './src/InstaClone.js';


export default class App extends Component {
  constructor(){
    super()
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyC3rHkqxxmWqKQwWQTfDaRG_cdyTNUI7Vw',
    //   authDomain: 'instaclone-e1871.firebaseapp.com'
    // }

    // firebase.initializeApp(firebaseConfig);
    // firebase.app();
  }

  render() {
    return (
        <InstaClone />
    );
  }
}

