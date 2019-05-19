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

import AwardCardItem from '../../components/AwardCardItem'
import ButtonPrimary from '../../../../components/ButtonPrimary'

// Components
// import AvatarProfile from '@components/AvatarProfile'


import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

class Awards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.awards){
            state.items= props.awards
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
        this.props.getAwards()
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
                            Prêmios
                        </Text>
                    </View>
                )} />


                <ScrollView
                    contentContainerStyle={{
                        paddingTop: 20,
                        flex: (this.props.awardsLoading) ? 1 : 0
                    }}
                    style={{
                        backgroundColor: 'rgb(248, 248, 248)',
                        flex: 1
                    }}
                >

                    {
                        (this.props.awardsLoading) ? (
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

                                        key={`Award-${i}`}
                                        style={{
                                            marginVertical: 8,
                                            marginHorizontal: 20
                                        }}
                                    >
                                        <AwardCardItem
                                            title={item.name}
                                            image={item.image}
                                            points={item.required_score}


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
        awards: state.user.awards,
        awardsLoading: state.user.awardsLoading
    }
}

const mapDispatchToProps = dispatch => ({
    getAwards() {
        dispatch({ type: 'GET_AWARDS_TRIGGER' })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Awards))
