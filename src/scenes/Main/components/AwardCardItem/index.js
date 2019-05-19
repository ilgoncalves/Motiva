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
                backgroundColor: `#fff`,
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                shadowColor: '#455B63',
                shadowRadius: 5,
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
                // paddingLeft: 42
            }}
        >

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingRight: 16,
                    marginBottom: 8
                }}
            >
                {
                    (image) ? (
                        <Image

                            
                            resizeMode='center'
                            
                            style={{
                                borderColor: '#000',
                                borderWidth: 0.1,
                                height: 200,
                                // overflow:'visible',

                                flex:1,
                                width: '80%',
                                // borderRadius: 40
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
