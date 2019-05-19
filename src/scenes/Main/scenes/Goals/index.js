import React, { Component } from 'react'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import {
    View,
    ScrollView,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native'

import {
    Icon,
    ListItem
} from 'react-native-elements'

// Components
// import AvatarProfile from '@components/AvatarProfile'


import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

class Goals extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    static getDerivedStateFromProps(props, state) {
        return state;
    }

    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener('didFocus', () => this.didFocusFunctions()),
        ];

        this.didFocusFunctions();
    }

    didFocusFunctions() {
        console.log('[INIT COURSES]');
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center'
                    // backgroundColor: COLORS.MENU_BACKGROUND
                }}
            >
                <Text>
                    Goals
                </Text>

            </View>
        )
    }

}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    sculture() {
        dispatch({ type: 'COURSES_GET_ALL_TRIGGER' })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Goals))
