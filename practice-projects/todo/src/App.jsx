import { useState, useEffect } from "react"
import { TodoForm } from "./TodoForm"
import TodoList from "./TodoList"


function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
          setTodos(currentTodos => {
          return [
    
          ...currentTodos,
          {id: crypto.randomUUID(), title, completed: false },
        ]
      })
  }


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
  <div className="container mx-auto px-4 w-9/12 text-center bg-teal-100	">
    <TodoForm onSubmit={addTodo}/>
    <h1 className="text-lg mt-4 font-bold underline">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
  </div>
  )
}

export default App
