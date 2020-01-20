import React from 'react'
import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/todoState'
import { ScreenState } from './src/context/screen/screenState'

export default function App() {
  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>

  )
}

