import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles/TodoStyle'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ goBack, todo, onRemove, onSave}) => {

    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(todo.id, title)
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
                            onPress={goBack} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Delete"
                            color={THEME.COLOR_BTN_DELETE}
                            onPress={()=> onRemove(todo.id)} />
                    </View>
                </View>
            </View>
        </View>
    )
}

