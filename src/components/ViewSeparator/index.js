import React from 'react'

import {
    View,
    Text
} from 'react-native'

export default ViewSeparator = props => {
    return(
        <View style={{
            paddingTop: props.paddingTop ? props.paddingTop : 34 ,
            paddingBottom: 8,
            paddingLeft: 16,
            backgroundColor: '#efefef',
            height: props.height ? props.height : null
        }}>
            <Text style={{
                fontSize: 13,
                color: '#6d6d6d',
            }}>
                {props.title}
            </Text>
        </View>
    )
}
