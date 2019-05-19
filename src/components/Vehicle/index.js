import React from 'react'

import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    Icon,
} from 'react-native-elements'

// Components
import ButtonSwitch from '@components/ButtonSwitch'
import ButtonLink from '@components/ButtonLink';

import Item from './components/Item'
import ItemColor from './components/ItemColor'
import ItemExchange from './components/ItemExchange'
import ItemDoors from './components/ItemDoors'
import ItemFuel from './components/ItemFuel'

// Constants
import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

// Helpers
import { getCarCaster } from '@helpers/vehicle'

export default Vehicle = props => {
    return(
        <View style={[
            {
                marginTop: 18,
                paddingVertical: 12,
                paddingHorizontal: 12,
                backgroundColor: '#fff'
            },
            props.containerStyle
        ]}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text style={{
                        fontSize: 19,
                        color: COLORS.PRIMARY_TEXT
                    }}>
                        {props.title}
                    </Text>
                    <Text style={{
                        fontSize: 13
                    }}>
                        { props.plate ? `${props.plate.substr(0, 3).toUpperCase()} ${props.plate.substr(3)}` : '' }
                    </Text>
                </View>

                {/* Stars */}
                <View style={{ flexDirection: 'row' }}>
                    {
                        [1, 2, 3, 4, 5].map(star => (
                            <Icon
                                key={`star-${star}`}
                                name='star'
                                type='material'
                                color='#cfcfcf'
                                size={13}
                            />
                        ))
                    }
                </View>
            </View>

            <ScrollView
                horizontal
            >
                {
                  (props.gear != null && props.gear != '') && (
                    <ItemExchange value={props.gear} />
                  )
                }
                {
                  (props.fuel_level != null && props.fuel_level != '') && (
                    <ItemFuel value={props.fuel_level} />
                  )
                }
                {
                    (props.color != null && props.color != '') && (
                        <ItemColor color={props.color} />
                    )
                }
                {
                    (props.doors != null && props.doors != '') && (
                        <ItemDoors value={props.doors} />
                    )
                }
            </ScrollView>

            {/* Button Switch */}
            {
                (props.buttonSwitch) && (
                    <ButtonSwitch {...props.buttonSwitch}/>
                )
            }

            {
                (props.buttonLink) && (
                    <View
                        style={{
                            flex:1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <ButtonLink {...props.buttonLink}/>
                    </View>
                )
            }

        </View>
    )
}
