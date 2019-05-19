import React, { Component } from 'react';
import { View, Text, Image, Animated, StyleSheet, Dimensions, PanResponder } from 'react-native';

// Constants
import COLORS from '@constants/colors';
import IMAGES from '@constants/images';

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 24),
    alignSelf: 'center',
    height: 52,
    borderRadius: 100,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    paddingHorizontal: 8,
    overflow: 'hidden',
    marginBottom: 6
  },
  handler: {
    width: 180,
    height: 40,
    borderRadius: 100,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 8,
    zIndex: 10
  },
  handlerText: {
    color: COLORS.PRIMARY_TEXT,
    fontSize: 13,
    fontWeight: 'bold'
  },
  unlockIcon: {
    width: 24, height: 24,
    position: 'absolute',
    right: 16, zIndex: 0
  }
});

class ButtonSwitch extends Component {
  constructor(props) {
    super(props);

    const screenW = Dimensions.get('window').width;
    const limit = screenW - (196); // (styles.handler width)

    this._positionX = new Animated.Value(0);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (ev, gestureState) => true,
      onStartShouldSetPanResponderCapture: (ev, gestureState) => true,
      onMoveShouldSetPanResponder: (ev, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (ev, gestureState) => true,
      onPanResponderMove: (ev, gestureState) => (
        (Math.abs(gestureState.dx) > limit || gestureState.dx < 0)
          ? null
          : Animated.event([null, { dx: this._positionX }])(ev, gestureState)
      ),
      onPanResponderRelease: (ev, { vx, dx }) => {
        const screenWidth = Dimensions.get('window').width;

        if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= (0.4 * screenWidth)) {
          this.props.onSwipeEnd();
        }

        // Get back to start
        Animated.spring(this._positionX, { toValue: 0 }).start();
      }
    });
  }

  _renderActiveHandler = () => {
    return (
      <React.Fragment>
        <Text style={styles.handlerText}>{this.props.title}</Text>
        <Image source={IMAGES.CHEVRON_PRIMARY} style={{ width: 24, height: 24 }} />
      </React.Fragment>
    )
  }

  _renderInactiveHandler = () => {
    return (
      <React.Fragment>
        <Text style={[styles.handlerText, { color: 'white' }]}>{this.props.title}</Text>
        <Image source={IMAGES.CHEVRON_WHITE} style={{ width: 24, height: 24 }} />
      </React.Fragment>
    )
  }

  _renderUnlockIcon = () => {
    if (this.props.active) {
      return (
        <Image
          source={IMAGES.UNLOCK_PRIMARY}
          style={styles.unlockIcon}
        />
      )
    } else {
      return (
        <Image
          source={IMAGES.UNLOCK}
          style={styles.unlockIcon}
        />
      )
    }
  }

  render() {
    return (
      <View style={[
        styles.container,
        this.props.containerStyle
      ]}>
        <Animated.View
          style={[styles.handler, { transform: [{ translateX: this._positionX }] }, (this.props.active == false) && { backgroundColor: '#888' }]}
          {...this._panResponder.panHandlers}
        >
          {this.props.active ? this._renderActiveHandler() : this._renderInactiveHandler()}
        </Animated.View>

        {this.props.showUnlockIcon && this._renderUnlockIcon()}
      </View>
    );
  }
}

export default ButtonSwitch;
