import React from 'react'

import {
    View,
    Text,
    Image
} from 'react-native'

import IMAGES from '@constants/images'

export default ItemExchange = props => {

    let value = props.value
    value = value ? `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}` : ''
    icon = (value && value == 'Automatico') ? IMAGES.ICONS.GEAR_AUTOMATIC : IMAGES.ICONS.GEAR_MANUAL
    value = (value && value == 'Automatico') ? 'Automático' : value

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
                source={ icon }
                style={{
                    width: 24,
                    height: 24,
                    marginHorizontal: 16
                }}
            />

            <Text
            numberOfLines={ 1 }
            style={{
                marginTop: 18,
                paddingHorizontal: 16,
                fontSize: 15,
                color: '#666666',
            }}>
                { value }
            </Text>
        </View>
    )
}
