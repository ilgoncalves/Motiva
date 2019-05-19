import React from 'react';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Header as HeaderBase, Icon } from 'react-native-elements';

// Constants
import COLORS from '@constants/colors';

AwardCardItem = ({ title, points, image, color, ...props }) => {

    return (
        <View
            style={{
                borderRadius: 10,
                flex: 1,
                paddingHorizontal: 12,
                paddingVertical: 15,
                backgroundColor: `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingLeft: 42
            }}
        >

            <View
                style={{
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 16,
                }}
            >
                {
                    (image) ? (
                        <Image
                            style={{
                                borderColor:'#000',
                                borderWidth:0.1,
                                height: 80,
                                width: 80,
                                borderRadius: 40
                            }}
                            source={{ uri: image }}

                        />
                    ) : (
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 25,
                                    backgroundColor: 'rgba(0,0,0,0.3)'
                                }}
                            />
                        )

                }
            </View>

            
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
                        fontWeight: 'bold'
                    }}
                >
                    {title}

                </Text>
                <Text
                    style={{
                        paddingBottom: 16,
                        fontSize: 14,
                        fontWeight: '400',
                        color: 'rgba(0,0,0,0.5)'
                    }}
                >
                    {`${points} pontos`}

                </Text>

            </View>

        </View>
    )
}

export default withNavigation(AwardCardItem)
