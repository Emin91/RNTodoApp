import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            onPress={()=> onOpen(todo.id)}
            onLongPress={()=> onRemove(todo.id)}>
            <View style={styles.todo}>
                <Text style={styles.itemName}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginTop: 2,
        marginBottom: 1,
        backgroundColor: '#125478'
    },
    itemName: {
        fontSize: 20,
        color: '#fff'
    }
})