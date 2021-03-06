import React from 'react'

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import {
  Icon,
  ListItem
} from 'react-native-elements';

import IMAGES from '@constants/images'
import COLORS from '@constants/colors'
import CONFIGS from '@constants/configs'

const moment = require('moment')

export default AvatarProfile = ({ deleteMode = false, ...props }) => {

  if (props.showRightIcon) {
    props.rightIcon = (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.AVATAR_ARROW_BACKGROUND,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
        onPress={() => props.onPress ? props.onPress() : null}
      >
        <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
        >
            <Icon
                type='material-icon'
                name='keyboard-arrow-right'
                color={COLORS.AVATAR_ARROW_COLOR}
                size={26}
            />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY_BACKGROUND,
        padding: 16,
        ...props.containerStyle
      }}
    >
      <ListItem
        containerStyle={{
          backgroundColor: props.grayBackground ? COLORS.AVATAR_GRAY_BACKGROUND : COLORS.AVATAR_DEFAULT_BACKGROUND
        }}
        leftAvatar={
          () => (
            <View style={{
              shadowColor: '#455B63',
              shadowRadius: 6,
              shadowOpacity: 0.5,
              shadowOffset: { width: 0, height: 2 },
              elevation: 5,
              width: 68,
              height: 68,
              borderRadius: 34,
              justifyContent: 'center',
              alignItems: 'center'
            }}>

                {props.source && (
                    <Image
                        source={props.source}
                        style={{
                            width: 68,
                            height: 68,
                            borderRadius: 34,
                            borderColor: '#fff',
                            borderWidth: 2,
                        }}
                    />
                )}
                {!props.source && (
                    <Icon
                        type='material-community'
                        name='camera-outline'
                        color={COLORS.DEEP_GRAY_TEXT}
                        size={40}
                    />
                )}

            </View>
          )
          //   {
          //   rounded: true,
          //   source: props.source,
          //   containerStyle: {
          //     width: 65,
          //     height: 65,
          //     marginRight: 12
          //   },
          //   avatarStyle: {
          //     // borderRadius: 120
          //   }
          // }
        }
        title={
          <Text
            style={{
              color: COLORS.AVATAR_TITLE_TEXT_COLOR,
              fontSize: 18,
              fontWeight: '600',
            }}
          >
            {props.name}
          </Text>
        }
        subtitle={
          <Text
            style={{
              color: COLORS.AVATAR_SUBTITLE_TEXT_COLOR,
              fontSize: 13,
            }}
          >
            {props.subtitle}
          </Text>
        }
        rightIcon={props.rightIcon}
      />
    </View>
  )
}
