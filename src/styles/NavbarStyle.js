import { StyleSheet } from 'react-native'
import { THEME } from '../theme'

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLOR_NAVBAR,
    },
    text: {
        color: THEME.COLOR_WHITE,
        fontSize: 20,
    },
})

export default styles;