import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
    StatusBar,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default ItemDate = props => {
    return(
        <View style={[
            {
                flexDirection: 'row'
            },
            props.containerStyle
        ]}>
            <View style={{
            }}>
                <Text>{props.title}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        marginRight: 8,
                        fontSize: 34
                    }}>{props.dateDayNumber}</Text>
                    <View>
                        <Text style={{
                            fontSize: 12
                        }}>
                            {props.dateMonthYear}
                        </Text>
                        <Text style={{
                            fontSize: 11
                        }}>
                            {props.dateDayOfWeek}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
