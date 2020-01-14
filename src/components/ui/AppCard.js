import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AppCard = props => (
    <View style={styles.default}>{props.children}</View>
)

const styles = StyleSheet.create({
    default: {
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4, },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        elevation: 8,
    }
})