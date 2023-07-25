import React from 'react'
import { View, Text } from 'react-native'

function Help(props) {
    return (
        < View >
            <Text>
                This is from help function
            </Text>
            <Text>{props.message}</Text>
        </View >
    )
}

export default Help;