import React, {useContext, useEffect, useCallback} from 'react'
import { StyleSheet, View, FlatList, Text, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { TodoContext } from '../context/todo/TodoContext'
import { ScreenContext } from '../context/screen/screenContext'
import { AppLoader } from '../components/ui/AppLoader'

export const HomeScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)

    if(loading) {
        return <AppLoader />
    }

    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />)}
        />
    )

    const loadTodos = useCallback(async() => await fetchTodos(), [fetchTodos])    

    useEffect(() => {
        loadTodos()
    }, [])

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