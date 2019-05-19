import React from 'react'
import {
    BackHandler,
    Alert
} from 'react-native';

import firebase from 'react-native-firebase'
import { Provider } from 'react-redux'

// Navigation
import {
    createStackNavigator,
    createAppContainer,
    NavigationActions
} from 'react-navigation'

// Get store (redux)
import _store from './store'

// Scenes : Splash
import Splash from './scenes/Splash'


const AppNavigator = createStackNavigator({
    Splash: { screen: Splash },
}, {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
        swipeEnabled: false
    },
  });


const Store = _store(AppNavigator)

export default class RootApp extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        const { store } = Store
        const { nav } = store.getState()

        if((nav.routes.length > 2 || nav.routes[0].index > 0)) {
          console.log('ON BACK >>>>>');
          store.dispatch(NavigationActions.back());
          return true;
        }

        return true
    }

    render() {
        console.disableYellowBox = true

        return (
            <Provider store={Store.store}>
                <React.Fragment>
                    <Store.AppWithNavigationState />
                </React.Fragment>
            </Provider>
        )
    }
}
