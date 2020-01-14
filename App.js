import React, {useState} from 'react'
import { View, Alert } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { HomeScreen } from './src/screens/HomeScreen'
import { TodoScreen } from './src/screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
  ])

  const addTodo = (title) => {

    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title
      }
    ])
  } 

  const removeTodo = id => {
    const todo = todos.find(e => e.id === id)
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
          setTodoId(null)
          setTodos(prev => prev.filter(todo => todo.id !== id))
        }},
      ],
      {cancelable: true},
    );
    
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo=>{
      if(todo.id === id) {
        todo.title = title
      } 
      return todo
    }))
  }

  let content = (
      <HomeScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId}/>
  )

  if (todoId) {
    const selectedItem = todos.find(todo => todo.id === todoId)
    content = <TodoScreen 
                    onRemove={removeTodo}
                    goBack={()=>setTodoId(null)} 
                    onSave={updateTodo}
                    todo={selectedItem}/>
  }

  return (
    <View>
      <Navbar text="Todo App" />
      <View style={{backgroundColor: '#fff'}}>
        { content }
      </View>
    </View>
  )
}

