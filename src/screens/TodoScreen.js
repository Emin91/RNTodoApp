import React, {useState, useContext} from 'react'
import { View, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { TodoContext } from '../context/todo/TodoContext'
import { ScreenContext } from '../context/screen/screenContext'
import styles from '../styles/TodoStyle'

export const TodoScreen = () => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = title => {
        updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.mainContainer}>
            <EditModal 
                visible={modal} 
                value={todo.title} 
                onSave={saveHandler}
                onCancel={() => setModal(false)}/>
            <AppCard>
                <View style={styles.textView}>
                    <Text style={styles.text}>Item Id: "{todo.id}"</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Item name:  "{todo.title}"</Text>
                </View>
                <Button title="Red." onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.btnView}>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title="Back"
                            color={THEME.COLOR_BTN_BACK}
                            onPress={() => changeScreen(null)} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Delete"
                            color={THEME.COLOR_BTN_DELETE}
                            onPress={()=> removeTodo(todo.id)} />
                    </View>
                </View>
            </View>
        </View>
    )
}

