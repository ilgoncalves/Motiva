import React from 'react'

import {
    View,
    Text
} from 'react-native'

import {
    Icon
} from 'react-native-elements'

export default Item = props => {
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
            <Icon
                name='car-hatchback'
                type='material-community'
                color='#888'
                containerStyle={{
                    paddingHorizontal: 16,
                }}
            />

            <Text style={{
                marginTop: 18,
                paddingHorizontal: 16,
                fontSize: 15
            }}>
                Item
            </Text>
        </View>
    )
}