import React, { Component } from 'react';
import {
    View,
    AppRegistry
} from 'react-native';

import App from './src/App';

const index = () => (
    <App />
)

AppRegistry.registerComponent('Calculadora', () => index);
