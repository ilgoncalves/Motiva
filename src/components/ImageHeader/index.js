import React from 'react'

import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native'

import { Icon } from 'react-native-elements'

// Constants
import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

export default ImageHeader = props => {
    return (
        <View style={[
            {
                paddingTop: 16,
                paddingHorizontal: 16,
                backgroundColor: '#fff'
            },
            props.containerStyle
        ]}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

            </View>

        </View>
    )
}
