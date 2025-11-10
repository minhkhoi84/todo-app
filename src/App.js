import { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
 // Đọc từ localStorage
    const savedTodos = localStorage.getItem('todos');
  // Nếu có data thì parse ra, không thì return []
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  function handleDeleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  function handleMoveUp(index) {  
    if (index > 0) {
      const newTodos = [...todos];
      [newTodos[index], newTodos[index - 1]] = [newTodos[index - 1], newTodos[index]];
      setTodos(newTodos);
    }
  }
  
  function moveDown(index) {  
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
      setTodos(newTodos);
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='todo-app'>
      <h1 className='todo-app__title'>To-do App</h1>
      <input 
        className='todo-app__input'
        placeholder='Nhập việc cần làm'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button className='todo-app__button' onClick={handleAddTodo}>Thêm</button>
      {todos.length === 0 ? (
        <p className='todo-app__empty'>Không có việc nào</p>
      ) : (
        <TodoList 
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onMoveUp={handleMoveUp}      
          onMoveDown={moveDown}   
        />
      )}
    </div>
  );
}

export default App;