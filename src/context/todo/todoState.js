import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }

    const {changeScreen} = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async title => {
        const response = await fetch('https://todoapp-ecaf4.firebaseio.com/todos.json', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title})
        })
        const data = await response.json()
        dispatch({ type: ADD_TODO, title, id: data.name })
    }

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

    const fetchTodos = async () => {
        showLoader()
        const response = await fetch('https://todoapp-ecaf4.firebaseio.com7/todos.json', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        const data = await response.json()
        console.log('Fetch Data', data)
        const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
        dispatch({type: FETCH_TODOS, todos})
        hideLoader()
    }
    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })
    const showLoader = () => dispatch({type: SHOW_LOADER})
    const hideLoader = () => dispatch({type: HIDE_LOADER})
    const showError = error => dispatch({type: SHOW_ERROR, error})
    const clearError = () => dispatch({type: CLEAR_ERROR})
    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos,
            }}>
            {children}
        </TodoContext.Provider>)
}