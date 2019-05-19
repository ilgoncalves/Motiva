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

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
    }
});

export default Vehicle = props => {

    let cleanPhoneNumber = ''
    if(props.phone) {
      cleanPhoneNumber = props.phone.replace(/\D/g,'');
      cleanPhoneNumber = cleanPhoneNumber.replace(/ +?/g, '');
    }

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
                        {props.subtitle}
                    </Text>
                </View>
            </View>

            {(props.phone) && (
                <View style={[styles.section, { borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#CDCED2' }]}>
                    <Text style={{ fontSize: 16 }}>{props.phone}</Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => Linking.openURL(`tel:${cleanPhoneNumber}`)}
                    >
                        <Icon
                            type='material-icon'
                            name='phone'
                            color={COLORS.PRIMARY}
                            size={20}
                            containerStyle={{
                                backgroundColor: '#EFEFF4',
                                width: 40, height: 40,
                                borderRadius: 40,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                    </TouchableOpacity>

                </View>
            )
            }

            <View style={styles.section}>
                <Text
                    numberOfLines={2}
                    multiline={true}
                    style={{
                        fontSize: 16,
                        width: '85%'
                    }}
                >
                    {props.address}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => props.onPress() ? props.onPress() : null}>
                    <Icon
                        type='evilicon'
                        name='share-apple'
                        color={COLORS.PRIMARY}
                        size={32}
                        containerStyle={{
                            backgroundColor: '#EFEFF4',
                            width: 40, height: 40,
                            borderRadius: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}

                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}
