import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/NavbarStyle'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

