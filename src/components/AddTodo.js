import React, {useState} from 'react'
import { View, TextInput, Button, } from 'react-native'
import styles from '../styles/AddTodoStyle'
import { THEME } from '../theme'


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        console.log("Added:"+ value)
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            console.log('Clicked empty input')
            alert('Item name cannot be empty!')
        }
       
    }
    return(
        <View style={styles.todoView}>
            <TextInput 
                style={styles.textInput}
                onChangeText={setValue}
                value={value}
                placeholder="Add your items..."
                maxLength={50}
                underlineColorAndroid={'#2c3e50'}
                placeholderTextColor={THEME.COLOR_LIGHT_GRAY}
                selectionColor={THEME.COLOR_NAVBAR}/>
            <Button title="Add" onPress={pressHandler}/>
        </View>
    )
}

