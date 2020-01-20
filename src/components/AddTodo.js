import React, { useState } from 'react'
import { View, TextInput, Keyboard, } from 'react-native'
import { THEME } from '../theme'
import Feather from 'react-native-vector-icons/Feather'
import styles from '../styles/AddTodoStyle'


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        console.log("Added:" + value)
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            console.log('Clicked empty input')
            alert('Item name cannot be empty!')
        }

    }
    return (
        <View style={styles.todoView}>
            <TextInput
                style={styles.textInput}
                onChangeText={setValue}
                value={value}
                placeholder="Add your items..."
                maxLength={50}
                underlineColorAndroid={'#2c3e50'}
                placeholderTextColor={THEME.COLOR_LIGHT_GRAY}
                selectionColor={THEME.COLOR_NAVBAR} />
            <Feather.Button
                name="file-plus"
                backgroundColor="#2c3e50"
                onPress={pressHandler}>
                Add
            </Feather.Button>
            {/* <Button title="Add" onPress={pressHandler}/> */}
        </View>
    )
}

