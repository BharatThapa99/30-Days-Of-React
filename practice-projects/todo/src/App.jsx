import { useState, useEffect } from "react"
import { TodoForm } from "./TodoForm"
import TodoList from "./TodoList"


function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  function addTodo(title) {
          setTodos(currentTodos => {
          return [
    
          ...currentTodos,
          {id: crypto.randomUUID(), title, completed: false },
        ]
      })
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
  })
}

  return (
  <>
    <TodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </>
  )
}

export default App
