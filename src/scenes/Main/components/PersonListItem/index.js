import React from 'react';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text, StyleSheet, View,Image } from 'react-native';

// Constants
import COLORS from '@constants/colors';

PersonListItem = ({ name, pontuation, ranking, image, ...props }) => {

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-evenly'
            }}
        >
            <View
                style={{
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 16
                }}
            >
                {
                    (image) ? (
                        <Image
                            style={{
                                borderColor:'#000',
                                borderWidth:0.1,
                                height: 50,
                                width: 50,
                                borderRadius: 25
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
                    flex:6,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        paddingBottom:4,
                        fontSize: 17,
                        fontWeight: '500'
                    }}
                >
                    {name}

                </Text>
                <Text
                    style={{
                        fontSize: 13,
                        fontWeight: '300',
                        color: 'rgba(0,0,0,0.5)'
                    }}
                >
                    {`${pontuation} pontos`}

                </Text>

            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: props.rankingSize,
                        fontWeight: 'bold',
                    }}
                >
                    {`#${ranking}`}
                </Text>

            </View>
        </View>
    )
}

export default withNavigation(PersonListItem)
