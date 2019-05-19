import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import {
  View,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native'

import firebase from 'react-native-firebase';
// Constants
import IMAGES from '@constants/images';

class Splash extends Component {
  componentDidMount() {
    this._onAuthChange()
  }

  componentWillUnmount() {
    // Kill listener
    if (this.unsubscriber)
      this.unsubscriber();
  }

  _redirectTo = (scene) => {
    this.props.navigation.replace(scene);
  }

  _onAuthChange = () => {
    
      setTimeout(() => this._redirectTo('Main'), 1500);
    
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(33,116,169,0.7)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        <StatusBar
          translucent={true}
          backgroundColor='transparent'
          barStyle='light-content'
        />

        <View style={{

        }}>

          <Image
            source={IMAGES.LOGO}
            resizeMethod='auto'
            resizeMode='center'
            style={{
              width: 200,
              height: 180,
            }}
          />
        </View>

      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

const mapDispatchToProps = dispatch => ({
  getUserInfo(id) {
    dispatch({
      type: 'USER_GET_USER_INFO_TRIGGER',
      payload: { id }
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Splash))
