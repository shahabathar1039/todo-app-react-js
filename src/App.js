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
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, status]);

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

  //Saving Data On Local Storage
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  // Rendering The Page
  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList  filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

// Exporting App
export default App;
