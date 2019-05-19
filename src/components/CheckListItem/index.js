import React from 'react'
import { ListItem } from 'react-native-elements'
import COLORS from '@constants/colors';

export default ({ checked, title, ...props }) => {
    if (checked) {
        props.rightIcon = {
            type: 'material-icon',
            color: COLORS.PRIMARY,
            name: 'check',
            size: 18
        }
    }

    return (
        <ListItem
            title={title}
            containerStyle={{ marginLeft: 16, padding: 10 }}
            titleStyle={{ color: 'black', fontSize: 17, paddingRight: 24 }}
            bottomDivider
            {...props}
        />
    )
}