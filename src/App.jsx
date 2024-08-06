import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { useState } from 'react';
import TodoList from './components/todoList/TodoList';
import TodoFooter from './components/todoFooter/TodoFooter';

function App() {
  const [todo,setTodo] = useState([
    {id:1,completed:false,title:'Js'},
    {id:2,completed:false,title:'React'},
    {id:3,completed:false,title:'React'},
    {id:4,completed:false,title:'React'},
    {id:5,completed:false,title:'React'},
  ])

  
  const [value,setValue] = useState('')
  function AddTask(value){
    const newTask = {
      id:Date.now(),
      title:value,      
      completed:false,
    }
    setTodo([...todo,newTask])
    setValue('')
  }

  function deleteTask(id){
    console.log(id);
    
    setTodo(todo.filter(todo => todo.id !== id))
  }

  function completedTask(id){
    console.log(id);
    
    setTodo(todo.map((todo) => {
      if(todo.id === id){
        return {...todo, completed:!todo.completed}
      }
      else{
        return todo
      }
    }))
  }
  return (
    <div className="cont">
         <div className="cont-item">
          <Header add={AddTask} setValue={setValue} value={value}/>
          <TodoList todo={todo} deleteFunc={deleteTask} completedTask={completedTask}/>
          <TodoFooter todo={todo}/>
         </div>
    </div>
  );
}

export default App;
