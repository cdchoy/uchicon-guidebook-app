import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import DepartmentsScreen from '../screens/DepartmentsScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' }
    />
  ),
};

HomeStack.path = '';

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

ScheduleStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  config
)

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
  ),
}

MapStack.path = '';

const DepartmentsStack = createStackNavigator(
  {
    Departments: DepartmentsScreen,
  },
  config
)

DepartmentsStack.navigationOptions = {
  tabBarLabel: 'Departments',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'} />
  ),
}

DepartmentsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ScheduleStack,
  DepartmentsStack,
  MapStack
});

tabNavigator.path = '';

export default tabNavigator;
