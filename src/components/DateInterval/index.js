import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'

import 'moment/locale/pt-br';

import {
    View
} from 'react-native'

import ItemDate from './components/ItemDate'
import Separator from './components/Separator'

const moment = require('moment')

class DateInterval extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date_withdrawal: moment(),
      date_devolution: moment().add(1,'days')
    };
  }

  static getDerivedStateFromProps(props, state) {

      if (props.reservation) {
        state = {
          ...state,
          date_withdrawal: props.reservation.date_withdrawal,
          date_devolution: props.reservation.date_devolution
        };
      }

    return state
  }

  render() {

    return(
      <View style={this.props.containerStyle}>
          <ItemDate
              title='Ida'
              dateDayNumber={ moment(this.state.date_withdrawal).format("DD") }
              dateMonthYear={ moment(this.state.date_withdrawal).format("MMM YYYY") }
              dateDayOfWeek={ moment(this.state.date_withdrawal).format("dddd") }
          />

          <Separator/>

          <ItemDate
              title='Volta'
              dateDayNumber={ moment(this.state.date_devolution).format("DD") }
              dateMonthYear={ moment(this.state.date_devolution).format("MMM YYYY") }
              dateDayOfWeek={ moment(this.state.date_devolution).format("dddd") }
          />
      </View>
    )
  }

}

const mapStateToProps = state => ({
    reservation: state.reservation.reservation
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(DateInterval));
