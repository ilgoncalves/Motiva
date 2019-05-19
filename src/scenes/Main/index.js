import React from 'react';
import { YellowBox, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

import { Icon } from 'react-native-elements'

// // Scenes
import Home from './scenes/Ranking'
import Goals from './scenes/Goals'
import Employers from './scenes/Employers'
import Awards from './scenes/Awards'
import Settings from './scenes/Settings'

// Constants
import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

// Resolve problema warning do navigation
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const TabBarComponent = props => <BottomTabBar {...props} />;

export default createBottomTabNavigator(
    {

        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        type='material-community'
                        name='format-list-numbered'
                        size={25}
                        color={tintColor}
                    />
                )
            })
        },

        Employers: {
            screen: Employers,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        type='material-community'
                        name='account-group'
                        size={25}
                        color={tintColor}
                    />
                )
            })
        },

        Awards: {
            screen: Awards,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        type='material-community'
                        name='crown'
                        size={25}
                        color={tintColor}
                    />
                )
            })
        },

        Goals: {
            screen: Goals,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        type='material-community'
                        name='book-open'
                        size={25}
                        color={tintColor}
                    />
                )
            })
        },

        Settings: {
            screen: Settings,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        type='material-icon'
                        name='settings'
                        color={tintColor}
                        size={25}
                    />
                )
            })
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: 'rgba(0,0,0,1)',
            inactiveTintColor: 'rgba(0,0,0,0.3)',
            inactiveBackgroundColor:'rgba(0,0,0,0)' ,
            style: {
                backgroundColor: 'rgba(0,0,0,0)',
                elevation: 4,
            }
        },
        initialRouteName: 'Home'
    }
);
