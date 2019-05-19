import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Input } from 'react-native-elements';

import COLORS from '@constants/colors';

const InputNumericBox = (props) => {
    return (
        <Input
            {...props}
            keyboardType='number-pad'
            maxLength={1}
            containerStyle={[
                {
                    backgroundColor: '#f8f8f8',
                    marginHorizontal: 16,
                    width: 56, height: 64,
                    borderRadius: 4
                },
                props.containerStyle
            ]}
            inputContainerStyle={[
                {
                    height: 64, padding: 0,
                    borderBottomWidth: 0
                },
                props.inputContainerStyle
            ]}
            inputStyle={[
                {
                    color: COLORS.PRIMARY_TEXT,
                    fontSize: 34,
                    height: 64,
                    padding: 0,
                    marginLeft: 0,
                    fontWeight: 'bold',
                    textAlign: 'center'
                },
                props.inputStyle
            ]}
            ref={props.inputRef}
        />
    )
}

export default InputNumericBox;
