import React from 'react';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text, StyleSheet, View, Image, Slider } from 'react-native';
import { Header as HeaderBase, Icon } from 'react-native-elements';

// Constants
import COLORS from '@constants/colors';

SeasonListItem = ({ name, winner_prize, winner, days_left, elapsed_time, ...props }) => {

    return (
        <View
            style={{
                borderRadius: 10,
                flex: 1,
                paddingHorizontal: 12,
                paddingVertical: 20,
                backgroundColor: props.color,
                justifyContent: 'space-evenly',
                shadowColor: '#455B63',
                shadowRadius: 5,
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',

                }}
            >

                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',

                    }}
                >
                    <Text
                        style={{
                            paddingBottom: 12,
                            fontSize: 17,
                            fontWeight: '400',
                            color: 'rgba(255,255,255,1)'
                        }}
                    >
                        {name}

                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'rgba(255,255,255,0.9)'
                        }}
                    >
                        {`Primeiro Lugar:`}

                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: '300',
                            color: 'rgba(255,255,255,0.7)'
                        }}
                    >
                        {`${winner}. ${winner_prize} pts`}

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

                </View>
            </View>

            <View
                style={{
                    height: 20,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    value={elapsed_time}
                    disabled={true}
                    thumbTintColor='rgba(0,0,0,0)'
                    minimumTrackTintColor='green'
                    style={{
                        paddingTop: 12,
                        width: '70%'
                    }}
                />
                <Text
                    style={{
                        paddingBottom: 4,
                        paddingLeft: 16,
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'rgba(255,255,255,0.7)'
                    }}

                >
                    {`${days_left} dias rest.`}
                </Text>

            </View>


        </View>
    )
}

export default withNavigation(SeasonListItem)
