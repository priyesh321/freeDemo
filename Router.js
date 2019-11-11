import React, { Component } from "react";
import Signup from './src/Components/Signup/Signup'
import Login from './src/Components/Login/Login'
import Dashboard from './src/Components/Dashboard/Dashboard'

import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({

    Signup: {
        screen: Signup
    },
    Login: {
        screen: Login
    },
    Dashboard: {
        screen: Dashboard
    }
},
    {
        initialRouteName: 'Signup',
        headerMode: 'none'
    });

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer
console.disableYellowBox = true;
