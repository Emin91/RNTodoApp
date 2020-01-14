import { StyleSheet } from 'react-native'
import { THEME } from '../theme'

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 20,
        backgroundColor: THEME.COLOR_SELECTED_ITEM_BG
    },
    textView: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 10, 
        paddingRight: 10,
    },
    text: {
        fontSize: 20, 
        color: THEME.COLOR_SELECTED_ITEM_TEXT,
    },
    btnView: {
        paddingTop: 5, 
        paddingBottom: 40,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '40%',
    },
})

export default styles;