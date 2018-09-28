/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';


import HomePage from './Components/HomePage';
import MapScreen from './Components/MapScreen';

import colors from './styles/colors/index';
import CircularImage from './Components/common/CircularImage';

import Icon from 'react-native-vector-icons/FontAwesome';
import Router from './Router';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'actions',
    };
  }

  render() {
    return (
       
      <Router/>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'red',
  },
  logo: {
    width: 200,
    height: 50,
  },
  


});
