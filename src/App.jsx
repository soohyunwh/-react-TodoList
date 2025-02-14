import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import TodoList from "./components/TodoList";
import './index.css';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text:"react 공부하기", completed: false},
  ]);

  return (
    <div className='app'>
      <h1>To-Do_List</h1>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
  
export default App
