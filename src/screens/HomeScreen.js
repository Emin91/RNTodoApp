import React from 'react'
import { StyleSheet, View, FlatList, Text, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const HomeScreen = ({ addTodo, todos, removeTodo, openTodo }) => {

    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />)}
        />
    )

    if (todos.length === 0) {
        content = (
        <View style={styles.imgView}>
            <Image
                source={require('../components/img/inbox.png')}
                resizeMode={'center'}
                style={styles.img} />
        </View>
        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}


const styles = StyleSheet.create({
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        backgroundColor: '#2d3436'
    },
    img: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
    },
})