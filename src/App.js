//Importing Modules
import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

//Function App
function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  // UseEffect Funtion
  useEffect(() => {
    filterHandler()
  }, [todos, status])

  // Filter Todo Function
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  // Rendering The Page
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

// Exporting App
export default App;
