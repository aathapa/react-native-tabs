import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import AppRouter from './Routes';

export default class App extends Component {
  render() {
    return (
        <AppRouter />
    );
  }
}