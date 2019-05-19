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

import AwardCardItem from '../../components/EmployersListItem'

// Components
// import AvatarProfile from '@components/AvatarProfile'


import COLORS from '@constants/colors'
import IMAGES from '@constants/images'

class Employers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    title: 'Viagem para João Pessoa',
                    points:'3000',
                    image: 'https://i.pinimg.com/originals/f2/b0/df/f2b0dfd92af85ce8a8fe866751fdd205.jpg',
                    color: [198, 149, 181, 1.0]
                },
                {
                    title: 'Viagem para João Pessoa',
                    points:'3000',
                    image: 'https://i.pinimg.com/originals/f2/b0/df/f2b0dfd92af85ce8a8fe866751fdd205.jpg',
                    color: [8, 155, 154, 1.0]
                }
            ]
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
                        paddingTop: 20
                    }}
                    style={{
                        backgroundColor: 'rgb(248, 248, 248)',
                        flex: 1
                    }}
                >
                    {
                        this.state.items.map((item, i) => (
                            <View

                                key={`PersonListItem-${i}`}
                                style={{
                                    marginVertical: 8,
                                    marginHorizontal: 20
                                }}
                            >
                                <EmployersListItem
                                    {...item}
                                    
                                />
                                
                            </View>

                        ))
                    }
                </ScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Employers))
