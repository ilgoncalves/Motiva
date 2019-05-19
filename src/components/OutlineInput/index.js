import React, { Component } from 'react'
import { Input } from 'react-native-elements';


export default class OutlineInput extends Component {
    render() {
        return (
            <Input
                {...this.props}
                // autoCapitalize={(this.props.autoCapitalize) ? this.props.autoCapitalize : 'none'}
                inputStyle={{
                    color: this.props.fontColor ? this.props.fontColor : '#383A3C',
                    fontWeight: '500',
                    fontSize: 16,
                    textAlign:'center',
                }}
                inputContainerStyle={{
                    flex: 1,
                    borderColor: 'rgba(255,255,255,0)',
                    alignItems: 'center',
                    justifyContent:'center'
                }}
                containerStyle={[{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#383A3C',
                    marginHorizontal: 8,
                    borderRadius: 13,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // paddingLeft: 20,
                    marginVertical: 6
                }, this.props.containerStyle]}
                autoCorrect={false}
                maxLength={(this.props.maxLength) ? this.props.maxLength : 15}
                numberOfLines={1}
                placeholder={(this.props.placeholder) ? this.props.placeholder : 'Default'}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor={(this.props.placeholderTextColor) ? this.props.placeholderTextColor : 'rgba(0,0,0,0.4)'}

            />
        )
    }
}
