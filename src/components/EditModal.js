import React, {useState} from 'react'
import { StyleSheet, View, Alert, TextInput, Button, Modal, Image, TouchableOpacity, Text } from 'react-native'
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel, value, onSave }) => {

    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert('Error!', `Minimal lenght name of item 3 symbols.Now ${title.trim().length} symbols`)
        } else {
            onSave(title)
        }
    }
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.wrap}>
                <View style={styles.modalView}>
                <View style={styles.circle}>
                    <Image 
                        source={require('./img/document.png')}
                        style={{width: 30, height: 30, tintColor: '#fff'}}
                        resizeMode={'center'}
                        />
                </View>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder={'Type item name'}
                    maxLength={50}
                    style={styles.input}
                />
                <View style={styles.btnView}>
                    <TouchableOpacity 
                        style={styles.btnCancel}
                        onPress={onCancel}>
                        <Text style={styles.text}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btnSave}
                        onPress={saveHandler}>
                        <Text style={styles.text}>Save</Text>
                    </TouchableOpacity>
                </View>
                </View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        width: 300, 
        height: 180,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#2c3e50', 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.7,
        shadowRadius: 1.2,
        elevation: 6,
    },
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)', 

    },
    circle: {
        width: 60, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50', 
        borderRadius: 50, 
        borderColor: '#fff',
        borderWidth: 3,  
        marginTop: -40, 
        marginVertical: 30
    },
    input: {
        width: '90%',
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    btnView: {
        width: '100%',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
    },
    btnCancel: {
        height: '65%',
        width: '50%', 
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: THEME.COLOR_BTN_DELETE, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    btnSave: {
        height: '65%',
        width: '50%', 
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: THEME.COLOR_BTN_SAVE, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})
