import { TodoItem } from './TodoItem';

export function TodoList({ todos, onDeleteTodo, onMoveUp, onMoveDown }) {
    return (
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <TodoItem 
                key={index}           // ← Đây là key
                todo={todo}           // Props bình thường
                index={index}         // Props bình thường
                onDelete={onDeleteTodo}  // Props bình thường
                onMoveUp={onMoveUp}
                onMoveDown={onMoveDown}
            />
          ))}
        </ul>
    )
}