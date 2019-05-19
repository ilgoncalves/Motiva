import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: ''
    }
    this.props.login('lima-igor@hotmail.com', '123123')

  }
  componentDidMount() {
    console.log('alo')
    this.props.test();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 20,
            width: '90%'
          }}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={{
            height: 20,
            width: '90%'
          }}
          onChangeText={(password) => this.setState({ password })}

        />
        <Button
          title='clique em mim'
          style={{
            height: 20,
            width: '90%'
          }}
          onPress={() => this.props.test(this.state.password, this.state.email)}

        />
      </View>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  test(password, email) {
    dispatch({
      type: 'TEST_TRIGGER',
      payload: {
        password,
        email
      }
    })
  },
  login(email, password) {
    dispatch({
      type: 'USERS_LOGIN_TRIGGER',
      payload: {
        password,
        email
      }
    })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Splash)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
