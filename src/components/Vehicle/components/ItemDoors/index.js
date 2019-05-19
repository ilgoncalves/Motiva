import React from 'react'

import {
    View,
    Text,
    Image
} from 'react-native'

import {
    Icon
} from 'react-native-elements'

import IMAGES from '@constants/images'

export default ItemDoors = props => {

    return(
        <View style={{
            width: 112,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginVertical: 24,
            marginLeft: 4,
            marginRight: 8,
            paddingVertical: 12,
            backgroundColor: '#fff',
            borderRadius: 8,
            elevation: 3
        }}>

            <Image
                source={IMAGES.ICONS.DOOR}
                style={{
                    width: 24,
                    height: 24,
                    marginHorizontal: 16
                }}
            />

            <Text style={{
                marginTop: 18,
                paddingHorizontal: 16,
                fontSize: 15,
                color: '#666666'
            }}>
                {props.value} portas
            </Text>
        </View>
    )
}
