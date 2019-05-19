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

import Header from '@components/Header'

import GoalsListItem from '../../components/GoalsListItem'

import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

class Goals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.goals) {
            state.items = props.goals
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
        this.props.getGoals()
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
                            Metas
                        </Text>
                    </View>
                )} />


                <ScrollView
                    contentContainerStyle={{
                        paddingTop: 20,
                        justifyContent: 'center',
                        flex: (this.props.goalsLoading) ? 1 : 0
                    }}
                    style={{
                        backgroundColor: 'rgb(248, 248, 248)',
                        flex: 1
                    }}
                >
                    {
                        (this.props.goalsLoading) ? (
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
                                        <GoalsListItem
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
        goals: state.user.goals,
        goalsLoading: state.user.goalsLoading
    }
}

const mapDispatchToProps = dispatch => ({
    getGoals() {
        dispatch({ type: 'GET_GOALS_TRIGGER' })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Goals))
