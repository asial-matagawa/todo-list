import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [a, b] = useState(() => {
    const c = localStorage.getItem("ITEMS")
    if (c == null) return []

    return JSON.parse(c)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(a))
  }, [a])

  function d(e) {
    b(f => {
      return [
        ...f,
        { id: crypto.randomUUID(), title: e, completed: false },
      ]
    })
  }

  function g(h, i) {
    b(f => {
      return f.map(j => {
        if (j.id === h) {
          return { ...j, completed: i }
        }

        return j
      })
    })
  }

  function k(h) {
    b(f => {
      return f.filter(j => j.id !== h)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={d} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={a} toggleTodo={g} deleteTodo={k} />
    </>
  )
}
