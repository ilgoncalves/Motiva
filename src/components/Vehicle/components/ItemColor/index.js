import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {
    Icon
} from 'react-native-elements'

getColor = (color) => {

    let text = color.toLowerCase()

    switch (text) {
        case 'branco':
            return '#FFF';
        case 'preto':
            return '#000';
        case 'roxo':
            return '#722870';
        case 'vermelho':
            return '#FBFBFB';
        case 'verde':
            return '#A9D40B';
        case 'amarelo':
            return '#FAD610';
        case 'prata':
            return '#EFEFEF';
        case 'cinza':
            return '#ADADAD';
        case 'GarageFilter':
            return '#FBFBFB';
        case 'azul':
            return '#13335D';
        case 'vinho':
            return '#842223';
        case 'marrom':
            return '#96591C';
        default:
            return '#F2F2F2';
    }
}

export default ItemColor = props => {

    let value = props.color
    value = value ? `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}` : ''

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
                name='format-color-fill'
                type='material-community'
                color='#888'
                containerStyle={{
                    paddingHorizontal: 16,
                }}
            />

            <View style={{
                width: 24,
                height: 4,
                marginLeft: 16,
                borderRadius: 8,
                backgroundColor: getColor(props.color),
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#707070',
                top: -4
            }}/>

            <Text style={{
                marginTop: 14,
                paddingHorizontal: 16,
                fontSize: 15
            }}>
                { value }
            </Text>
        </View>
    )
}
