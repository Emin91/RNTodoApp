import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{ id: '1', title: 'Testtest' }]
    }

    const {changeScreen} = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const addTodo = title => dispatch({ type: ADD_TODO, title })
    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
                  'Delete item',
                  `Do you want to remove "${todo.title}"?`,
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'Delete', onPress: () => {
                        changeScreen(null)
                        dispatch({ type: REMOVE_TODO, id })
                    }},
                  ],
                  {cancelable: true},
                );
        
    }
    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })
    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo,
            }}>
            {children}
        </TodoContext.Provider>)
}