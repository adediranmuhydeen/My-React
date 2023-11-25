import "./App.css"
import { useState } from "react"
import "./TaskForm"





export default  function App(){
  
  const [todos, setTodos] = useState([])

 function AddTask(title){
  setTodos((currentTodo)=>{ 
    return[
    currentTodo,
    {id: crypto.randomUUID(), title, completed: false},
  ]})
 }

  function toggleTodo(id, completed){
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if(todo.id == id){
          todo.completed = completed
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return(
  <>
  <TaskForm/>
    <h1 className="header">Tasks List</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
    {todos.map(todo =>{
      return (<li key={todo.id}>
        <label>
        <input type="checkbox" checked={todo.completed}
        onChange={e=> toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={()=> deleteTodo(todo.id)}>Delete</button>
    </li>
      )
    })}
     </ul>    
  </> 
  )
} 