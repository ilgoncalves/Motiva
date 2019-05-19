import React from 'react'

import {
    View
} from 'react-native'

export default Separator = props => {
    return(
        <View style={{flexDirection: 'row'}}>
            <View style={{
                width: 3,
                height: 3,
                marginRight: 2,
                borderRadius: 3,
                backgroundColor: '#888'
            }}/>
            <View style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                backgroundColor: '#888'
            }}/>
            <View style={{
                width: 3,
                height: 3,
                marginLeft: 2,
                borderRadius: 3,
                backgroundColor: '#888'
            }}/>
        </View>
    )
}