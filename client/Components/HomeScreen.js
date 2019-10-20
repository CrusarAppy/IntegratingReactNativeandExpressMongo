import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Reminder from './Reminder';
import Home from './Home';
import Setting from './Setting';

export const Tabs = createMaterialBottomTabNavigator(
  {
    Home1: {
      screen: Home,

      navigationOptions: {        
        tabBarLabel:"Home Page",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        )
      },
    },
    Setting1: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel:"Setting Page",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cogs" size={30} color="#900" />
        )
      }
    },
  
  Reminder1: {
    screen: Reminder,
    navigationOptions: {
      tabBarLabel:"Any question",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="Stopwatch" size={30} color="#900" />
      )
    }
  },
},

  {   
    
    order: ['Home1', 'Setting1','Reminder1'],
    tabBarOptions: {
      backgroundColor:'#60a370',
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#30a370',
      },
       tabStyle:{
       backgroundColor:'#60a370'
       }
    },
    
  },
  // {
  //   initialRouteName: 'Home'
  // }
  );

const Appcontain = createAppContainer(Tabs)
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  };

  render() {
    return (
      <Appcontain />
    );
  }
}
const styles = StyleSheet.create({
  bgcol:{
    backgroundColor:'#60a370'
  }
});
