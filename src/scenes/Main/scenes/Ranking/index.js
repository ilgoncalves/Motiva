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
import Header from '@components/Header'
import ViewSeparator from '@components/ViewSeparator'
import PersonListItem from '../../components/PersonListItem'
// import AvatarProfile from '@components/AvatarProfile'


import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

class Ranking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [{
                name:'c'
            }]
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.users) {
            console.log('Props >>> STATE',props ,state)
            state.items = props.users
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
        this.props.getUsers()
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
                            Ranking
                        </Text>
                    </View>
                )} />


                <ScrollView
                    contentContainerStyle={{
                        paddingTop: 20
                    }}
                    style={{

                        backgroundColor: 'rgb(248, 248, 248)',
                        flex: 1
                    }}
                >
                    {
                        (this.props.loading) ? (
                            <View
                                style={{
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
                                        <PersonListItem
                                            name={item.name}
                                            pontuation={item.current_score}
                                            image={item.profile_picture}
                                            ranking={i + 1}
                                            rankingSize={(i === 0) ? 24 : 17}
                                        />
                                        <View
                                            style={{
                                                marginTop: 16,
                                                height: 0.6,
                                                backgroundColor: '#efefef',
                                            }}
                                        >


                                        </View>
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
        users: state.user.usersSortedByScore,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => ({
    getUsers() {
        dispatch({ type: 'GET_USERS_TRIGGER' })
    },
    login() {
        dispatch({ type: 'USERS_LOGIN_TRIGGER' })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Ranking))
