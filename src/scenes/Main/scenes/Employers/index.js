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

import SeasonListItem from '../../components/SeasonListItem'

// Components
// import AvatarProfile from '@components/AvatarProfile'


import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

class Employers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[state season]', props)
        if (props.seasons) {
            state.items = props.seasons
        }
        return state;
    }

    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener('didFocus', () => this.didFocusFunctions()),
        ];

        this.didFocusFunctions();
    }

    didFocusFunctions() {
        this.props.getSeasons()
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    // backgroundColor: COLORS.MENU_BACKGROUND
                }}
            >
                <Header leftComponent={() => (
                    <View
                        style={{
                            paddingLeft: 12
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                color: 'rgba(0,0,0,0.6)'
                            }}
                        >
                            Eventos
                        </Text>
                    </View>
                )} />


                <ScrollView
                    contentContainerStyle={{
                        paddingTop: 20,
                        flex: (this.props.seasonLoading) ? 1 : 0
                    }}
                    style={{

                        backgroundColor: 'rgb(248, 248, 248)',
                        flex: 1
                    }}
                >
                    {
                        (this.props.seasonLoading) ? (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <ActivityIndicator size='large' color='#000' />
                            </View>
                        ) : (

                                this.state.items.map((item, i) => (
                                    <View

                                        key={`PersonListItem-${i}`}
                                        style={{
                                            marginVertical: 8,
                                            marginHorizontal: 20
                                        }}
                                    >
                                        <SeasonListItem
                                            {...item}

                                        />
                                    </View>

                                ))
                            )
                    }
                </ScrollView>

            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        seasons: state.user.seasons,
        seasonLoading: state.user.seasonLoading
    }
}

const mapDispatchToProps = dispatch => ({
    getSeasons() {
        dispatch({ type: 'GET_SEASON_TRIGGER' })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Employers))
