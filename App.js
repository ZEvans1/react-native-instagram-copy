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
    
  }

  render() {
    return (
        <InstaClone />
    );
  }
}

