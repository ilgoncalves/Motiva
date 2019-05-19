import React from 'react';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Header as HeaderBase, Icon } from 'react-native-elements';

// Constants
import COLORS from '@constants/colors';

Header = ({ hasNext, hasPrev, backButton, callback, ...props }) => {
    if (hasNext != undefined) {
        props.rightComponent = {
            text: 'Avançar',
            onPress: hasNext.onPress,
            style: styles.button
        }
    }

    if (hasPrev != undefined) {
        props.leftComponent = {
            text: 'Cancelar',
            onPress: hasPrev.onPress,
            style: [styles.button, { fontWeight: 'normal' }]
        }
    }

    if (backButton != undefined) {

        props.leftComponent = (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    if (backButton.onPress)
                        return backButton.onPress()

                    return props.navigation.goBack()
                }}
                style={[{paddingLeft:16},{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
                <Icon
                    type='material-icon'
                    name={(backButton.IconName) ? backButton.IconName : 'keyboard-arrow-left'}
                    color={(backButton.color) ? backButton.color : COLORS.PRIMARY}
                    size={(backButton.IconSize) ? backButton.IconSize : 32}
                />
                <Text style={[styles.button, { fontWeight: 'normal' }]}>
                    {(backButton.title) ? backButton.title : 'Voltar'}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <HeaderBase
            {...props}
            // backgroundColor='#F8F8F8'
            backgroundColor='rgb(248, 248, 248)'
            placement='center'
            centerComponent={{
                text: props.title,
                style: (props.titleStyle) ? props.titleStyle : styles.title
            }}
            leftContainerStyle={{
                flex: 3
                // paddingLeft: 8
            }}
            centerContainerStyle={{
                flex: 6,
            }}
            rightContainerStyle={{
                flex: 3,
                // paddingRight: 8
            }}
            rightComponent={props.rightComponent}
            statusBarProps={{
                translucent: true,
                barStyle: 'dark-content',
                backgroundColor: 'transparent'
            }}
        />
    )
}

export default withNavigation(Header)

const styles = StyleSheet.create({
    title: {
        // paddingLeft: 8,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        fontSize: 17,
        color: COLORS.PRIMARY,
        fontWeight: 'bold'
    }
});