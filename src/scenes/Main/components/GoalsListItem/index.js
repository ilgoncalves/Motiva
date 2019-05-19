import React from 'react';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Header as HeaderBase, Icon } from 'react-native-elements';

// Constants
import COLORS from '@constants/colors';

GoalsListItem = ({ title, points, isComplet, ...props }) => {

    return (
        <View
            style={{
                borderRadius: 10,
                flex: 1,
                paddingHorizontal: 12,
                paddingVertical: 20,
                backgroundColor: 'rgba(0,0,0,0.1)',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}
        >
            <View
                style={{
                    flex: 8,
                    justifyContent: 'center',
                    paddingLeft: 16
                }}
            >
                <Text
                    style={{
                        paddingBottom: 8,
                        fontSize: 17,
                        fontWeight: '400'
                    }}
                >
                    {title}

                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'rgba(0,0,0,0.5)'
                    }}
                >
                    {`${points} pontos`}

                </Text>

            </View>

            <View
                style={{
                    marginBottom: -8,
                    flex: 2,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }}
            >
                {
                    (isComplet) && (
                        <Icon
                            type='font-awesome'
                            name='check'
                            size={20}
                        />

                    )
                }

            </View>

        </View>
    )
}

export default withNavigation(GoalsListItem)
