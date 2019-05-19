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
            items:[
                {
                    title:'Completar 100 vendas no mês',
                    points:'300',
                    isComplet:true
                },
                {
                    title:'Completar 150 vendas no mês',
                    points:'350',
                    isComplet:false
                },
                {
                    title:'Completar 10 vendas no dia',
                    points:'100',
                    isComplet:true
                },
                {
                    title:'Completar 20 vendas no dia',
                    points:'200',
                    isComplet:false
                },
                {
                    title:'Completar 5 vendas no dia',
                    points:'50',
                    isComplet:true
                },
                {
                    title:'Completar 200 vendas no mês',
                    points:'600',
                    isComplet:false
                },
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
                            Metas
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
                                <GoalsListItem
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Goals))
