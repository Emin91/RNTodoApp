import React, { useContext } from 'react'
import { View } from 'react-native'
import { Navbar } from './components/Navbar'
import { HomeScreen } from './screens/HomeScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext)
  return (
    <View style={{flex: 1}}>
      <Navbar text="Todo App" />
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        { todoId ? <TodoScreen/> : <HomeScreen /> }
      </View>
    </View>
  )
}