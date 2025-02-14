import { useState } from "react";
import './TodoList.css';
import TodoItem from './TodoItem';  
import PropTypes from 'prop-types';

// 🚨 props.Todos ❌ → 구조 분해 할당 { todos, setTodos } ✅
function TodoList({ todos, setTodos }) {
  const [input, setInput] = useState("");

  // 할 일 추가 함수
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요..."
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            setTodos={setTodos} 
          /> 
        ))}
      </ul>
    </div>
  );
}

// 🚨 prop-types 추가 (props 타입 검증)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
